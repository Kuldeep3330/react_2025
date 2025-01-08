import React, { useState } from 'react'

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName]=useState(initialName);
  const [isEditing, setIsEditing] = useState(false)

  function handleClick() {
    //updating state based on old state
    setIsEditing(editing=>!editing)
      }
  
      function handleChange(e)
      {
        setPlayerName(e.target.value)
      }
  let editablePlayerName=<span className="player-name">{playerName}</span>
  let btnCaption="Edit"
  if(isEditing)
  {
    editablePlayerName=<input type='text' required value={playerName} onChange={handleChange}/>
    btnCaption='Save'
  }
  return (
    <li className={isActive?'active':undefined} >      
          <span className="player">
          {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>        
      <button onClick={handleClick}>{btnCaption}</button>
    </li>
  )
}

export default Player
