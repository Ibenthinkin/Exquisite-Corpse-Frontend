import React from 'react';
import './App.css';
import CorpseContainer from './CorpseContainer'

export default class App extends React.Component{

  constructor() {
    super()
    this.state = {
      corpses: []
    }
  }


    addLine = (line) => {
      console.log(line)
    }

  async componentDidMount () {
       const response = await fetch('http://localhost:3000/api/v1/corpses/')
       const corpses = await response.json()
       await this.setState( {corpses: corpses} )
  }



render(){
  return (
    <div> <h1>Corpse</h1>
      <CorpseContainer addLine={this.addLine} corpses={this.state.corpses}/>
    </div>
  );
}

}
