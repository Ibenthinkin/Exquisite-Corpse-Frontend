import React from 'react';
import './App.css';
import CorpseContainer from './CorpseContainer'

export default class App extends React.Component{

  constructor() {
    super()
    this.state = {
      corpses: []
    }
  }

  async componentDidMount () {
       const response = await fetch('http://localhost:3000/api/v1/corpses/')
       const corpses = await response.json()
       await this.setState( {corpses: corpses} )
  }

  addLineToState = (response) => {
    const lines = [...this.state.corpses[response.corpse_id].lines]
    const newCorpses = this.state.corpses.map(corpse =>{
      if (corpse.id !== response.corpse_id)  return corpse;
      return {
        ...corpse,
          lines: [...lines, response]
      }
    })
    this.setState({
      corpses: newCorpses
    })
  }


addLine = (line)=> {
  let body = JSON.stringify(line)
  fetch('http://localhost:3000/api/v1/lines', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body,
  }).then((response) => {return response.json()})
  .then((response)=>{
    this.addLineToState(response)
    })
}


handleDelete = (id, corpse_id) => {
    fetch(`http://localhost:3000/api/v1/lines/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        console.log('Line was deleted!')
      })
      .then((response)=>{
        this.deleteLineFromState(id, corpse_id)
      })
  }

 deleteLineFromState = (id, corpse_id) => {
    const newCorpses = this.state.corpses.map(corpse =>{
      if (corpse.id !== corpse_id){
          return corpse;
      } else {
        const newLines = corpse.lines.filter(line =>  (line.id !== id))
          return {
          ...corpse,
            lines: newLines
          }
    }})

  this.setState({
      corpses: newCorpses
    })
  }

handleUpdate = (line) =>{

  fetch(`http://localhost:3000/api/v1/lines/${line.id}`,
  {
    method: 'PATCH',
    body: JSON.stringify(line),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
      this.updateLineInState(line)
    })
    .then((response)=>{
      console.log('Line was edited!')
    })
}

// updateLineFromState = (line) =>{
//   console.log(line)
// }

updateLineInState = (line) => {
   const newCorpses = this.state.corpses.map(corpse =>{
     if (corpse.id !== line.corpse_id){
         return corpse;
     } else {
       const newLines = corpse.lines.filter((oldLine) =>  (oldLine.id !== line.id));

        newLines.push(line)

         return {
         ...corpse,
           lines: newLines
         }
   }})

 this.setState({
     corpses: newCorpses
   })
 }

 //
 // updateFruit(fruit){
 //    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
 //    newFruits.push(fruit)
 //    this.setState({
 //      fruits: newFruits
 //    })
 //  }







render(){
  return (
    <div> <h1>Corpse</h1>
      <CorpseContainer addLine={this.addLine}
      corpses={this.state.corpses}
      delete={this.handleDelete}
      update={this.handleUpdate}/>
    </div>
  );
}

}
