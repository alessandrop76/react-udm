//CSS
import './App.css';
import './index.css';

//Hooks
import {
  useCallback,
  useState,
  useEffect
} from 'react';

//data
import {wordList} from './data/words';

//Componentes
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const stages = [{
    id: 1,
    name: "start"
  },
  {
    id: 2,
    name: "game"
  },
  {
    id: 3,
    name: "end"
  },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);

  // const [words, setWords] = useState(wordList);
  // console.log(words)

  let guessesQty = 3;
  

  // state para as palavras, categorias e letras
  const [pickedWords, setPickedWords] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);


  //Selecionando uma categoria e uma palavra
  const pickWordAndCategory = useCallback(() => {
    //select random category
    const categories = Object.keys(wordList);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    // console.log(category);

    //select random word
    const word = wordList[category][Math.floor(Math.random() * wordList[category].length)];
    //console.log(word);

    return {
      word,
      category
    }

  },[]);

  //Inicia o Jogo
  const startGame = useCallback(() => {
    //pick word and category
    const {word, category} = pickWordAndCategory();

    // create a array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(word, category, wordLetters, wrongLetters);

    // fill state
    setPickedCategory(category);
    setPickedWords(word);
    setWrongLetters(wrongLetters);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
    setGuesses(guessesQty);
  },[pickWordAndCategory, guessesQty,wrongLetters]);

  //Verifica e processa a letra digitada
  const verifyLetter = (letter) => {
    // setGameStage(stages[2].name);
    // console.log(letter);
    const normalizedLetter = letter.toLowerCase();
    //verificando se a letra já foi utilizadas
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    // acrescenta a letra adivinhada ou remove a letra
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);

    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  //verificar se as tentativas acabaram
  useEffect(() => {
    if (guesses <= 0) {
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  //verificar se a palavra foi adivinhada
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];  //este operador Set inputa apenas uma vez itens que forem repetidos no array
    console.log(uniqueLetters);
if( guessedLetters.length === uniqueLetters.length){
  //adicionar pontuação
  setScore((actualScore) => (actualScore += 100));

  //carregar nova palavra
  startGame();
  clearLettersStates();
  setGuesses(guesses + 1 );  
}
  }, [guessedLetters, letters, guesses, startGame])

  //Game Over - ressetar game
  const retry = () => {
    setGameStage(stages[0].name);
    setGuesses();
    setScore(0);
  }



  return ( <div className = "App" >

      {gameStage === "start" && < StartScreen startGame = {startGame}/>}
      {gameStage === "game" && < GameScreen verifyLetter = {verifyLetter} pickedWords = 
          {
            pickedWords
          }
          pickedCategory = {
            pickedCategory
          }
          wordLetters = {
            letters
          }
          guessedLetters = {
            guessedLetters
          }
          letters = {
            letters
          }
          guesses = {
            guesses
          }
          wrongLetters = {
            wrongLetters
          }
          score = {
            score
          }
          />}
           {gameStage === "end" && < EndScreen retry = {retry}
           score={score}
            />}

            </div>
          );
        }

        export default App;