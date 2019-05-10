class App {
  attachEventListeners() {
    document.querySelector('#corpses-list').addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id);
      const corpse = Corpse.findById(id);
      document.querySelector('#update').innerHTML = corpse.renderUpdateForm();

      // const update = document.querySelector('#update')
      // corpse_li.appendChild(update.innerHTML = corpse.renderUpdateForm())
      // let corpse_li = document.querySelector(`#corpse_id${id}`)
      // let update = document.createElement('form')
      // update.innerHTML = corpse.renderUpdateForm()
      // corpse_li.appendChild(update)
    });

    document.querySelector('#update').addEventListener('submit', e => {
      e.preventDefault();
      const id = parseInt(e.target.dataset.id);
      const corpse = Corpse.findById(id);
      const title = e.target.querySelector('input').value;
      const imageURL = e.target.querySelector('textarea').value;
      const bodyJSON = { title, imageURL };
      fetch(`http://localhost:3000/api/v1/corpses/${corpse.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSON),
      })
        .then(res => res.json())
        // our backend responds with the updated corpse instance represented as JSON
        .then(updatedCorpse => console.log(updatedCorpse));
    });

  }
}
