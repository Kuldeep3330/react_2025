import React, { useState } from 'react'
import gameImg from './assets/game-logo.png'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from './components/GameOver.js'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}
const Main = () => {
  const [gameTurns, setGameTurns] = useState([])

  //   const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = derivedActivePlayer(gameTurns)
  let gameBoard = [...initialGameBoard.map(array=>[...array])]
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }
  let winner
  for (const combinaton of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinaton[0].row][combinaton[0].column]
    const secondSquareSymbol =
      gameBoard[combinaton[1].row][combinaton[1].column]
    const thirdSquareSymbol = gameBoard[combinaton[2].row][combinaton[2].column]

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol
    }
  }

  const hasDraw= gameTurns.length===9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === 'X' ? 'O' : 'X'))
    setGameTurns((prevTurns) => {
      let currentPlayer = derivedActivePlayer(prevTurns)

      const upadtedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ]
      return upadtedTurns
    })
  }

  function handleRestart(){
    setGameTurns([]);
  }

  return (
    <>
      <header>
        <img src={gameImg} alt="Hand-Drawn tic tac toe game board" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="player 1"
              symbol="X"
              isActive={activePlayer === 'X'}
            />
            <Player
              initialName="player 2"
              symbol="O"
              isActive={activePlayer === 'O'}
            />
          </ol>

          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  )
}

export default Main
