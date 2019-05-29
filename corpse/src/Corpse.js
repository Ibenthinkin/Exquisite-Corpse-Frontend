import React, { Component } from 'react'
import LinesContainer from './LinesContainer'
import AddLineForm from './AddLineForm'

 class Corpse extends Component {

   constructor(){
     super()
     this.state = {
       showAll: false,
       addLine: false,
       generateLine: false

     }
   }


 handleShowAll = (e) => {
    this.setState({ showAll: !this.state.showAll})

   }

 handleAddLine = (e) => {
   this.setState({ addLine: !this.state.addLine})
   }

 handleGenerateLine = (e) => {
   this.setState({
      generateLine: !this.state.addLine,
      addLine: !this.state.addLine
    })
   }


  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.handleAddLine}>Add Line</button>
        <button onClick={this.handleShowAll} name='showAll'>Show Whole Corpse</button>
        <button onClick={this.handleGenerateLine}>Generate New Line</button>

        <LinesContainer showAll={this.state.showAll} lines={this.props.lines}/>
        <AddLineForm addLine={this.state.addLine} generateLine={this.state.generateLine}/>
      </div>
    )
  }
}

export default Corpse


// <p> {props.description}</p>
// <button onClick={() => props.removeTodo(props.id)}>Delete</button>
