import { useState } from 'react'
import game from './assets/game-logo.png'
import GameBoard from './components/GameBoard'
import Player from './components/Player'
import './Ex1.css'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from './components/GameOver.jsx'

const initialGameBoard=[
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function derivedActivePlayer(gameTurns)
{
let currentPlayer='X'
if(gameTurns.length>0 && gameTurns[0].player ==='X')
{
  currentPlayer="O"
}
return currentPlayer
}
function Ex1() {
  const [gameTurns, setGameTurns]=useState([])
  const [hasWinner, setHasWinner]=useState(false)
  // const[activePlayer, setActivePlayer]=useState('X');

  const activePlayer =derivedActivePlayer(gameTurns)

  // let gameBoard=initialGameBoard;

  let gameBoard=[...initialGameBoard.map(array=>[...array])];

    for(const turn of gameTurns)
    {
        const {square, player}=turn
        const{row, col}=square;

        gameBoard[row][col]=player;
    }

    let winner
for(const combination of WINNING_COMBINATIONS)
{
  const firstSquareSymbol =gameBoard[combination[0].row][combination[0].column]
  const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
  const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
  if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol)
  {
    winner= firstSquareSymbol
  }
}

const hasDraw= gameTurns.length === 9 && !winner

  const  handleSelectSquare=(rowIndex, colIndex)=>{

    // setActivePlayer(curActivePlayer=> curActivePlayer==='X' ? 'O':'X')

    

    setGameTurns(prevTurns=>{
      let currentPlayer=derivedActivePlayer(prevTurns);
      // if(prevTurns.length>0 && prevTurns[0].player==='X')
      // {
      //   currentPlayer='O'
      // }
      const updatedTurns=  [{square:{row:rowIndex, col:colIndex},player:currentPlayer},
      ...prevTurns];
      return updatedTurns;
    });    
  }

  function handleRematch(){
    setGameTurns([])
  }

  return (
    <>
    <header>
      <img src={game} alt="" />
      <h1>Tic-Tac-Toe</h1>
      
    </header>
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
        <Player  initialName="Player 1" symbol="X" isActive={activePlayer==='X'}/>
        <Player  initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch}/>}
        <GameBoard 
        onSelectSquare={handleSelectSquare}
         board={gameBoard}
         />
      </div>
      <Log turns={gameTurns}/>
    </main>
    </>
  )
}

export default Ex1
