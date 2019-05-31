import React from 'react'
import './App.scss';
import {items} from './Seed'
import {names} from './Seed'


class AddLineForm extends React.Component{

  constructor(props){
    super()

      this.state = {
        content: '',
        author: '',
        corpse_id: props.corpse_id
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
    this.props.handleAddLineClick()
  }

  selector = (array) => {
    return array[Math.floor(Math.random()*items.length)];
  }



  placeHolderAuthor = () => {
    if (!this.props.generateLineClick) {
      return "Write your name here";
    } else {
      return (this.selector(names))
    }
  }

  placeHolderLine = () => {
    if (!this.props.generateLineClick) {
      return "Write a new line here"
    } else {
      return (this.selector(items))
    }
  }


  render(){
      if (!this.props.addLineClick) {
        return null;
      }

      const { content, author } = this.state;
      const isEnabled = content.length > 0 && author.length > 0 || this.props.generateLineClick

    return(
      <form onSubmit={this.handleSubmit}>
        <input className='wide-input' type='text' name='content' placeholder={this.placeHolderLine()} value={this.state.content} onChange={this.handleOnChange}/><br/>
        <input  type='text' name='author' placeholder={this.placeHolderAuthor()} value={this.state.author} onChange={this.handleOnChange}/><br/>
        <button disabled={!isEnabled}>Submit</button>
      </form>
    )
  }

}


export default AddLineForm
