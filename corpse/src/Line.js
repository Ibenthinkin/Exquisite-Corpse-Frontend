import React, { Component } from 'react'

export default class Line extends Component {
  constructor(props){
    super()
    this.state = {
      content: props.content,
      author: props.author,
      id: props.id,
      corpse_id: props.corpse_id,
      editable: false
    }
  }


  pressDelete = () => {
     this.props.delete(this.props.id, this.props.corpse_id)
  }

  pressEdit = () => {
      this.props.update(this.state)
      this.setState({editable: !this.state.editable})
      console.log(this.state.editable)
  }

  render(){

      return (
        <div>
          <h4>{this.props.content}</h4>
          <button value={this.props}onClick={this.pressDelete}>Delete</button>
          <button value={this.props}onClick={this.pressEdit}>Edit</button>
        </div>
      )
  }
}
