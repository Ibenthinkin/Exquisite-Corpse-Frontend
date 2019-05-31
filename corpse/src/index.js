import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './Login'
import About from './About'
import PoemGenerator from './PoemGenerator'

import * as serviceWorker from './serviceWorker';



const routing = (
  <Router>
    <div>

      <Route exact path="/" component={App} />
      <Route path="/Login" component={Login} />
      <Route path="/About" component={About} />
      <Route path="/PoemGenerator" component={PoemGenerator} />

    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// <ul>
//    <li>
//      <Link to="/">Home</Link>
//    </li>
//    <li>
//      <Link to="/Login">Login</Link>
//    </li>
//    <li>
//      <Link to="/About">About</Link>
//    </li>
//  </ul>
