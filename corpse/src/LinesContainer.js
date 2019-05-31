import React from 'react'
import Line from './Line'
import './App.scss';

const LinesContainer = props => {
  const lines = props.lines.map((line, i) => <Line {...line}
   key={line.id}
   delete={props.delete}
   update={props.update}/>)

  return (
    <div>
      {props.showAllClick ? lines : lines.slice(-1)[0]}
    </div>
    )
}

export default LinesContainer
