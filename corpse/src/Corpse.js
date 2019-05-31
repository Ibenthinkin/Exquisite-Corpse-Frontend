import React, { Component } from 'react'
import LinesContainer from './LinesContainer'
import AddLineForm from './AddLineForm'
import './App.scss';
import './navbarStyle.scss';
import {items} from './Seed'
import {names} from './Seed'


 class Corpse extends Component {

   constructor(props){
     super()
     this.state = {
       showAllClick: false,
       addLineClick: false,
       generateLineClick: false
     }
   }

 // selector = (array) => {
 //   return items[Math.floor(Math.random()*items.length)];
 // }

 handleShowAllClick = (e) => {
    this.setState({ showAllClick: !this.state.showAllClick})
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
      <div className='corpse'>
        <h2>{this.props.title}</h2>
        <button className='red-button' onClick={this.handleAddLineClick}>Add Line</button>
        <button className='blue-button' onClick={this.handleShowAllClick} name='showAll'>Show Whole Corpse</button>
        <button className='green-button' onClick={this.handleGenerateLineClick}>Generate New Line</button>

        <LinesContainer
        showAllClick={this.state.showAllClick}
        lines={this.props.lines}
        addLine={this.props.addLine}
        delete={this.props.delete}
        update={this.props.update}/>

        <AddLineForm
        corpse_id={this.props.id}
         addLine={this.props.addLine}
         addLineClick={this.state.addLineClick}
         handleAddLineClick={this.handleAddLineClick}
         generateLineClick={this.state.generateLineClick}/>

      </div>
    )
  }
}

export default Corpse
