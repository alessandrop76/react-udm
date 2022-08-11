import React from 'react'
import './EndScreen.css';

const EndScreen = ({retry, score}) => {
  return (
    <div className={"start"}>
      <h1>Game Over</h1>
      <h2>Your Score: <span>{score}</span></h2>
      <button onClick={retry}>Fim do Jogo</button>
    </div>
  )
}

export default EndScreen