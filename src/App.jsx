import { useState } from 'react'
import Score from './components/Score'

function App() {
  const [isNewGame, setIsNewGame] = useState(false)

  return (
    <div className='main-container'>
      <div className='new-game-container' style={{display: isNewGame ? "none" : "block"}}>
        <h1 className='game-title'>TIC-TAC-TOE</h1>
        <button className='new-game-button' onClick={ () => setIsNewGame(!isNewGame)}> New Game </button> <br />
        <button className='new-game-button'> How to play </button>
      </div>

      <div className="tic" style={{display: !isNewGame ? "none" : "grid"}}>
        <div className="block" id='one'></div>
        <div className="block" id='two'></div>
        <div className="block" id='three'></div>
        <div className="block" id='four'></div>
        <div className="block" id='five'></div>
        <div className="block" id='six'></div>
        <div className="block" id='seven'></div>
        <div className="block" id='eight'></div>
        <div className="block" id='nine'></div>
      </div>

      { 
        isNewGame
        ? <Score />
        : null
      } 
    </div>
  )
}

export default App
