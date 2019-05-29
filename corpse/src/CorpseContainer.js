import React from 'react'
import Corpse from './Corpse'

const CorpseContainer = props => {
  const corpses = props.corpses.map((corpse, i) => <Corpse {...corpse} key={ Date.now() + i} addLine={props.addLine}/>)
  return (
    <div>
      {corpses}
    </div>
    )
}

export default CorpseContainer
