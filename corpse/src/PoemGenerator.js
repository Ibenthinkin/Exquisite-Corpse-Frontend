import React from 'react'
import './App.scss'
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar'
import './App.scss';
import {items} from './Seed'

const PoemGenerator = () => {

  const line = (items) => {
    return items[Math.floor(Math.random()*items.length)];
  }

    return (
      <div className='page'>
        <Navbar/>
          <h1>Generator</h1>
          <h1>{line(items)}</h1>
      </div>
    )

}

export default PoemGenerator
