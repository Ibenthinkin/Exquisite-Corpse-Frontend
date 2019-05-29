import React from 'react'
import Line from './Line'

const LinesContainer = props => {
  const lines = props.lines.map((line, i) => <Line {...line} key={ Date.now() + i}/>)

  return (
    <div>
      {props.showAllClick ? lines : lines.slice(-1)[0].props.content}
    </div>
    )
}

export default LinesContainer
