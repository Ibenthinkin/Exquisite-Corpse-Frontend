import React from 'react'
import './App.scss'
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar'
import './App.scss';


export default class About extends React.Component {
  render() {
    return (
      <div className='page'>
        <Navbar/>
          <h1>About</h1>
      </div>
    )
  }
}
