class App {
  constructor() {
    this.adapter = new Adapter();

    // this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.createCorpses = this.createCorpses.bind(this);
    this.addCorpses = this.addCorpses.bind(this);
    // this.createLines = this.createLines.bind(this);
    // this.addLines = this.addLines.bind(this);
  }

  attachEventListeners() {
    document.querySelector('#update').addEventListener('submit', this.handleFormSubmit);
    document.querySelector('#corpses-list').addEventListener('click', this.handleEditClick);
    // document.querySelector('#corpses-list .delete').addEventListener('click', this.handleDeleteClick);

  }

  createCorpses(corpses) {
    console.log(corpses)
    corpses.forEach(corpse => {
      new Corpse(corpse);
    });
    this.addCorpses();
  }

  addCorpses() {
    console.log(Line.all)
    document.querySelector('#corpses-list').innerHTML = ''
    // Corpse.all.forEach(
    //   corpse => (document.querySelector('#corpses-list').innerHTML += corpse.renderListItem())
    // );

    Corpse.all.forEach( function(corpse){
      document.querySelector('#corpses-list').innerHTML += corpse.renderListItem()
      // console.log(corpse.id)

      // let corpse_li = document.querySelector(`#corpse_id${corpse.id}`)
        Line.all.forEach( function(line){
          // console.log("line.corpse_id")
          let corpse_li = document.querySelector(`#corpse_id${corpse.id}`)
            // console.log(line.corpse_id === corpse.id)
            
          if (line.corpse_id === corpse.id){
            let newli = document.createElement('li')
            newli.innerHTML = line.content
            console.log(newli)
            corpse_li.appendChild(newli)
          }
        })

    });
  }



  createLines(lines) {
    // console.log(lines)

    lines.forEach(line => {
      new Line(line);
    });
      // this.addLines()
      // console.log(this)
  }
  //
  // addLines() {
  //   console.log(this)
  //
  //   document.querySelector('#lines-list').innerHTML = '';
  //
  //   document.querySelector('#lines-list').innerHTML = '';
  //   Line.all.forEach(
  //     line => (document.querySelector('#lines-list').innerHTML += line.renderListItem())
  //   );
  // }




  handleFormSubmit(e) {
    e.preventDefault();
    const id = parseInt(e.target.dataset.id);
    const corpse = Corpse.findById(id);
    const title = e.target.querySelector('input').value;
    const imageURL = e.target.querySelector('textarea').value;
    const bodyJSON = { title, imageURL };
    this.adapter.updateCorpse(corpse.id, bodyJSON).then(updatedCorpse => {
    const corpse = Corpse.findById(updatedCorpse.id);
    corpse.update(updatedCorpse);
    this.addCorpses();
  });
  }

  handleEditClick(e) {
    const id = parseInt(e.target.dataset.id);
    const corpse = Corpse.findById(id);
    if (event.target.id === "edit") {
    document.querySelector('#update').innerHTML = corpse.renderUpdateForm();
  }else if (event.target.id === "delete"){
    // console.log("delete")
    // console.log(e.target)
    // console.log(this.corpse.renderUpdateForm)
    corpse.delete(id)
  }
}

  // handleDeleteClick(e) {
  //   const id = parseInt(e.target.dataset.id);
  //   const corpse = Corpse.findById(id);
  //   if (event.target.id === "delete"){
  //   // document.querySelector('#update').innerHTML = corpse.renderUpdateForm();
  //   console.log(corpse)
  //   }
  // }




}





// class App {
//
//   constructor() {
//     this.adapter = new Adapter();
//   }
//
//   attachEventListeners() {
//     document.querySelector('#corpses-list').addEventListener('click', e => {
//       const id = parseInt(e.target.dataset.id);
//       const corpse = Corpse.findById(id);
//       document.querySelector('#update').innerHTML = corpse.renderUpdateForm();
//
//       // const update = document.querySelector('#update')
//       // corpse_li.appendChild(update.innerHTML = corpse.renderUpdateForm())
//       // let corpse_li = document.querySelector(`#corpse_id${id}`)
//       // let update = document.createElement('form')
//       // update.innerHTML = corpse.renderUpdateForm()
//       // corpse_li.appendChild(update)
//     });
//
//     // document.querySelector('#update').addEventListener('submit', e => {
//     //   e.preventDefault();
//     //   const id = parseInt(e.target.dataset.id);
//     //   const corpse = Corpse.findById(id);
//     //   const title = e.target.querySelector('input').value;
//     //   const imageURL = e.target.querySelector('textarea').value;
//     //   const bodyJSON = { title, imageURL };
//     //   fetch(`http://localhost:3000/api/v1/corpses/${corpse.id}`, {
//     //     method: 'PATCH',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //       Accept: 'application/json',
//     //     },
//     //     body: JSON.stringify(bodyJSON),
//     //   })
//     //     .then(res => res.json())
//     //     // our backend responds with the updated corpse instance represented as JSON
//     //     .then(updatedCorpse => console.log(updatedCorpse));
//     // });
//
//
//     document.querySelector('#update').addEventListener('submit', e => {
//       e.preventDefault();
//       const id = parseInt(e.target.dataset.id);
//       const corpse = Corpse.findById(id);
//       const title = e.target.querySelector('input').value;
//       const imageURL = e.target.querySelector('textarea').value;
//       const jsonBody = { title, imageURL };
//       this.adapter.updateCorpse(corpse.id, jsonBody).then(updatedCorpse => console.log(updatedCorpse));
//     });
//
//   }
// }
