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
     this.props.delete(this.state.id, this.state.corpse_id)
  }

  pressEdit = () => {
      // this.props.update(this.state)
      this.setState({editable: !this.state.editable})
      // console.log(this.state.editable)
  }

  handleOnChange = (e) => {
    const { name, value } = e.target
      this.setState({
        [name] : value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.update(this.state)
    this.setState({editable: !this.state.editable})


  }

  // placeHolderAuthor = () => {
  //   return (this.state.author)
  // }

  // placeHolderLine = () => {
  //   return (this.state.content)
  // }




  render(){
    const { content, author } = this.state;
    const isEnabled = content.length > 0 && author.length > 0;

    if (!this.state.editable){
      return (
        <div>
          <h4>{this.state.content}</h4>
          <button value={this.state}onClick={this.pressDelete}>Delete</button>
          <button value={this.state}onClick={this.pressEdit}>Edit</button>
        </div>
      )} else {
        return (
          <form onSubmit={this.handleSubmit}>
            <textarea name='content' placeholder={this.state.content} value={this.state.content} onChange={this.handleOnChange}/><br/>
            <input name='author' placeholder={this.state.author} value={this.state.author} onChange={this.handleOnChange}/><br/>
            <button disabled={!isEnabled}>Submit</button>
          </form>
        )
      }

  }
}
