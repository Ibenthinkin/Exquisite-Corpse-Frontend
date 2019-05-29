import React from 'react'

class AddLineForm extends React.Component{

  constructor(props){
    super()
    this.state = {
      name: '',
      author: ''
    }
  }

  handleOnChange = (e) => {
    const { name, value } = e.target

      this.setState({
        [name] : value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAddLine(this.state)
  }

  placeHolderAuthor = () => {
    if (!this.props.generateLine) {
      return "Write your name here";
    } else {
      return "GENERETED AUTHOR"
    }
  }

  placeHolderLine = () => {
    if (!this.props.generateLine) {
      return "Write a new line here";
    } else {
      return "GENERETED LINE OF POEMS"
    }
  }


  render(){
      if (!this.props.addLine) {
        return null;
      }
    return(
      <form onSubmit={this.handleSubmit}>
        <textarea name='content' placeholder={this.placeHolderLine()} value={this.state.content} onChange={this.handleOnChange}/><br/>
        <input name='author' placeholder={this.placeHolderAuthor()} value={this.state.author} onChange={this.handleOnChange}/><br/>
        <button>Submit</button>
      </form>
    )
  }

}


export default AddLineForm
