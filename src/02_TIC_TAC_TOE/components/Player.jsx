import React, { useState } from 'react'

const Player = ({ initialName,symbol, isActive}) => {
   const[isEdit, setIsEdit]= useState(false);
   const[playerName, setPlayerName]= useState(initialName);

   const clickHandle=()=>{
    setIsEdit(prev=> !prev);
    console.log("click");    
   }
   const handleChange=(e)=>{
    setPlayerName(e.target.value)
   }

   let editablePlayerName=<span className='player-name'>{playerName}</span>
   if(isEdit)
   {
    editablePlayerName= <input type='text' required value={playerName} onChange={handleChange}/>
   }
   
  return (
    
    <li className={isActive?'active':undefined}>
      <span className="player">
      {/* {!isEdit ? <span className='player-name'>{name}</span>: <input type='text'/>} */}
      {editablePlayerName}
      <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={clickHandle}>{!isEdit?'Edit':'Save'}</button>
    </li>    

  )
}

export default Player