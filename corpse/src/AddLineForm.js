import React from 'react'

class AddLineForm extends React.Component{

  constructor(props){
    super()
    this.state = {
      content: '',
      author: '',
      corpseId: props.corpseId
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
    this.props.addLine(this.state)
    this.setState ({
      content: '',
      author: ''
    })
  }

  placeHolderAuthor = () => {
    if (!this.props.generateLineClick) {
      return "Write your name here";
    } else {
      return "GENERETED AUTHOR"
    }
  }

  placeHolderLine = () => {
    if (!this.props.generateLineClick) {
      return "Write a new line here";
    } else {
      return "GENERETED LINE OF POEMS"
    }
  }


  render(){
      if (!this.props.addLineClick) {
        return null;
      }

      const { content, author } = this.state;
      const isEnabled = content.length > 0 && author.length > 0;

    return(
      <form onSubmit={this.handleSubmit}>
        <textarea name='content' placeholder={this.placeHolderLine()} value={this.state.content} onChange={this.handleOnChange}/><br/>
        <input name='author' placeholder={this.placeHolderAuthor()} value={this.state.author} onChange={this.handleOnChange}/><br/>
        <button disabled={!isEnabled}>Submit</button>
      </form>
    )
  }

}


export default AddLineForm
