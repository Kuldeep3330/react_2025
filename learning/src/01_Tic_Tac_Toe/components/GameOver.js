import React from 'react'

const GameOver = ({winner, onRestart}) => {
  return (
    <div id="game-over">
        <h1>GameOver</h1>
        {winner && <p>{winner} won!</p>}
        {!winner && <p>It's a draw!</p>}
        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>
        </div>
  )
}

export default GameOver