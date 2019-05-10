document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.attachEventListeners();

  app.adapter.fetchCorpses().then(json => {
    json.forEach(corpse => {
      document.querySelector('#corpses-list').innerHTML += new Corpse(corpse).renderListItem();
    });
  });
});








//
// const baseUrl = `http://localhost:3000/api/v1/`
// const  corpsesEndPoint= `http://localhost:3000/api/v1/corpses`
// const  linesEndPoint= `http://localhost:3000/api/v1/lines`
//
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new App();
//   app.attachEventListeners();
//
//   fetch(corpsesEndPoint)
//     .then(res => res.json())
//     .then(json =>
//       json.forEach(corpse => {
//         const newCorpse = new Corpse(corpse);
//         document.querySelector('#corpses-list').innerHTML += newCorpse.renderListItem();
//       })
//     );
//
//
//     fetch(linesEndPoint)
//     .then(res => res.json())
//     .then(json => console.log(json));
// });
