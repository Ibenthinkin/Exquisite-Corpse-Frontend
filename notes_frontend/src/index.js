
const baseUrl = `http://localhost:3000/api/v1/`
const  corpsesEndPoint= `http://localhost:3000/api/v1/corpses`
const  linesEndPoint= `http://localhost:3000/api/v1/lines`


document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.attachEventListeners();
  
  fetch(corpsesEndPoint)
    .then(res => res.json())
    .then(json =>
      json.forEach(corpse => {
        const newCorpse = new Corpse(corpse);
        document.querySelector('#corpses-list').innerHTML += newCorpse.renderListItem();
      })
    );


    fetch(linesEndPoint)
    .then(res => res.json())
    .then(json => console.log(json));


});


// const getImageData = async () => {
// try {
//   const response = await fetch(imageURL)
//
//   const data = await response.json()
//   displayCard(data)
//   return data
// } catch(error) {
//   console.error(error.message)
// }
// }
