import React, { Component } from 'react'
import LinesContainer from './LinesContainer'
import AddLineForm from './AddLineForm'
import './App.scss';
import './navbarStyle.scss';


 class Corpse extends Component {

   constructor(props){
     super()
     this.state = {
       showAllClick: false,
       addLineClick: false,
       generateLineClick: false
     }
   }

 handleShowAllClick = (e) => {
    this.setState({ showAllClick: !this.state.showAllClick})
   }

handleAddLineClick = (e) => {
    if (this.state.generateLineClick) {
      this.setState({
        generateLineClick: !this.state.generateLineClick
       })
    } else {
       this.setState({
         generateLineClick: false,
         addLineClick: !this.state.addLineClick
       })
    }
}

 handleGenerateLineClick = (e) => {
   if (this.state.addLineClick) {
     this.setState({
         generateLineClick: !this.state.generateLineClick
     })
   } else {
     this.setState({
       generateLineClick: !this.state.generateLineClick,
       addLineClick: !this.state.addLineClick
     })
   }
 }


  render() {
    return(
      <div className='corpse'>
        <h2>{this.props.title}</h2>
        <button className='red-button' onClick={this.handleAddLineClick}>Add Line</button>
        <button className='blue-button' onClick={this.handleShowAllClick} name='showAll'>Show Whole Corpse</button>
        <button className='green-button' onClick={this.handleGenerateLineClick}>Generate New Line</button>

        <LinesContainer
        showAllClick={this.state.showAllClick}
        lines={this.props.lines}
        addLine={this.props.addLine}
        delete={this.props.delete}
        update={this.props.update}/>

        <AddLineForm
        corpse_id={this.props.id}
         addLine={this.props.addLine}
         addLineClick={this.state.addLineClick}
         handleAddLineClick={this.handleAddLineClick}
         generateLineClick={this.state.generateLineClick}/>
      </div>
    )
  }
}

export default Corpse



// render() {
//   const currentUser = utils.getUserName();
//   const { colors, palate, title, note, creator } = this.state;
//   const createdBy = creator !== currentUser
//     ? `created by: ${creator}`
//     : 'created by you';
//   const palateColors = colors.length
//     ? colors.map((color, i) => (
//         <ColorItem key={i + color} color={color} />
//       ))
//     : null;
//   return (
//     <div className='palette__wrapper'>
//       <svg width={'400px'} height={'400px'} id={'rePalate'}>
//         {palate}
//       </svg>
//       <p>
//         {createdBy}
//       </p>
//       <h1>{title}</h1>
//       <p>{note}</p>
//       {palateColors}
//       <br />
//       <br />
//       {!title && creator === currentUser ? (
//         <div>
//           <NoteForm />
//           <button className={'nice-button'} onClick={this.updateInfo}>
//             Update
//           </button>
//         </div>
//       ) : null}
//       <br />
//       <br />
//       {(creator === currentUser) && (
//         <Link to={`/${currentUser}/palates`}>
//           <button
//             className={'mean-button'}
//             onClick={this.handleClick}
//           >
//             Delete Your Palate
//           </button>
//         </Link>
//       )}
//     </div>
//   );
// }






// <p> {props.description}</p>
// <button onClick={() => props.removeTodo(props.id)}>Delete</button>
