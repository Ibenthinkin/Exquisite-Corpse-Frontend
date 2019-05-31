import React from 'react'
import Corpse from './Corpse'
import './App.scss';

const CorpseContainer = props => {
  const corpses = props.corpses.map((corpse, i) => <Corpse {...corpse}
  key={corpse.id}
  addLine={props.addLine}
  delete={props.delete}
  update={props.update}/>)
  return (
    <div className={'all-corpses'}>
      {corpses}
    </div>
    )
}

export default CorpseContainer
