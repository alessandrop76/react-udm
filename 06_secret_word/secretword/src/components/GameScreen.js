import React from 'react'
import {useState, useRef} from 'react';
import './GameScreen.css';

const GameScreen = ({
  verifyLetter, 
  pickedWords, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  guesses, 
  score, 
}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    verifyLetter(letter);
    setLetter("");
    letterInputRef.current.focus();
  };

  return (
    
    <div className="game">
      <p className="points"><span>Pontuação: {score}</span></p>
      <h1>Descubra a palavra... </h1>
      
      <h3 className="tip">Dica sobre a palavra: <span>{pickedCategory}</span></h3>
      <p>você ainda tem <span> {guesses} </span> tentativa(s)</p>
      <div className="wordContainer">
        {letters.map((letter, i) => 
        guessedLetters.includes(letter) 
        ?(<span key={i} className="letter">{letter}</span>)
        :(<span key={i} className="blankSquare"></span>))
        }
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input
           type="text" 
           className=""
           name="letter"
           maxLength="1"
           required
           onChange={(e)=> setLetter(e.target.value)}
           value={letter}
           ref={letterInputRef} />
          <button>Digite uma letra</button>
        </form>
        <div className="wrongLettersContainer">
         <p>Letras já utilizadas: </p>
         {wrongLetters.map((letter, i) => (
            <span key={i}>{letter}, </span>
          ))}
          
        </div>
      </div>
      
      </div>
     
  )
}

export default GameScreen