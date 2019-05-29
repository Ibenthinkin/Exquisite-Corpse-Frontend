import React, { Component } from 'react'
import LinesContainer from './LinesContainer'
import AddLineForm from './AddLineForm'

 class Corpse extends Component {

   constructor(props){
     super()
     this.state = {
       showAllClick: false,
       addLineClick: false,
       generateLineClick: false

     }
   }

 handleShowAllClick = (e) => {
    this.setState({ showAllClick: !this.state.showAllClick})
    console.log(this.props.id)
   }

handleAddLineClick = (e) => {
    if (this.state.generateLineClick) {
      this.setState({
        generateLineClick: !this.state.generateLineClick
       })
    } else {
       this.setState({
         generateLineClick: false,
         addLineClick: !this.state.addLineClick
       })
    }
}

 handleGenerateLineClick = (e) => {
   if (this.state.addLineClick) {
     this.setState({
         generateLineClick: !this.state.generateLineClick
     })
   } else {
     this.setState({
       generateLineClick: !this.state.generateLineClick,
       addLineClick: !this.state.addLineClick
     })
   }
 }


  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.handleAddLineClick}>Add Line</button>
        <button onClick={this.handleShowAllClick} name='showAll'>Show Whole Corpse</button>
        <button onClick={this.handleGenerateLineClick}>Generate New Line</button>

        <LinesContainer showAllClick={this.state.showAllClick}
        lines={this.props.lines}/>

        <AddLineForm
        corpseId={this.props.id}
         addLine={this.props.addLine}
         addLineClick={this.state.addLineClick}
         generateLineClick={this.state.generateLineClick}/>
      </div>
    )
  }
}

export default Corpse


// <p> {props.description}</p>
// <button onClick={() => props.removeTodo(props.id)}>Delete</button>
