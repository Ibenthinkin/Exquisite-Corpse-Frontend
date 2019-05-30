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

  addLineToState = (line) => {
    const lines = [...this.state.corpses[line.corpse_id - 1].lines]
    const newCorpses = this.state.corpses.map(corpse =>{
      if (corpse.id !== line.corpse_id)  return corpse;
      return {
        ...corpse,
          lines: [...lines, line]
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
    console.log(response)
    console.log(line)
  })

  .then((response)=>{
    this.addLineToState(line)
  })
}

// handleDelete = (line) =>{
//   console.log(line)
// }

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

handleUpdate = (id, corpse_id) =>{
  console.log(id, corpse_id)
}





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
