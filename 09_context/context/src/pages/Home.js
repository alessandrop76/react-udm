// import {useContext} from 'react';
// import {CounterContext} from '../context/CounterContext';
import './Home.css';
import {ChangeContext} from '../components/ChangeContext';

// - Refatorando o contexto com hooks
import{useCounterContext} from '../hooks/useCounterContext';

//5- importando contexto complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  // const {counter} = useContext(CounterContext);
  
 const {counter} = useCounterContext();

//5 - contexto mais complexo
const {color, dispatch} = useTitleColorContext();
console.log(color);

//6- Alterando contexto complexo
const setTitleColor = (color) => {
  dispatch({ type: color });
 }


  return (
    <>
    <h1 style={{ color:color }}>React Context</h1>
    <p>O valor do contexto é: {counter}</p>
    <br />
    <ChangeContext />

    {/* 6- Alterando contexto complexo */}
    <div className="bts">
      <button id="red" onClick={()=> setTitleColor("RED")} >Title Vermelho</button>
      <button id="blue" onClick={()=> setTitleColor("BLUE")} >Title Azul</button>
    </div>
   
    </>
    
  )
}

export default Home