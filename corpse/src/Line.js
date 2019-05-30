import React from 'react'

 const Line = props => {

  const pressDelete = () => {
     props.delete(props.id, props.corpse_id)
   }

   const pressEdit = () => {
      props.update(props.id, props.corpse_id)
    }

    return (
      <div>
        <h4>{props.content}</h4>
        <button value={props}onClick={pressDelete}>Delete</button>
        <button value={props}onClick={pressEdit}>Edit</button>
      </div>
    )

}

export default Line
