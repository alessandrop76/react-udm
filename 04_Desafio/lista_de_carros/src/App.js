import './App.css';
import {useState} from 'react';
import ListaPrincipal from './components/ListaPrincipal';
import ListaReserva from './components/ListaReserva';
import ChoiceList from './components/ChoiceList';


function App() {

const list1 = <ListaPrincipal />;
const list2 = <ListaReserva />

let isCar = false;

const [mainList, setMainList] = useState(isCar);
function showMain() {
  setMainList(true)
  if(isCar === false) {
    setReserveList(false)
  }else{
    setReserveList(true)
  }  
}
const [reserveList, setReserveList] = useState(isCar)
function showReserve(){
  setReserveList(true)
  if(isCar === false) {
    setMainList(false)
  }else{
    setReserveList(true)
  }
}

  return (
    <div className="App">
     <h1>Lista de Carros</h1>
     <ChoiceList />   
     <div className="buttons">
     <button onClick={showMain}>Lista Principal</button>
     <button onClick={showReserve}>Lista Reserva</button>
     </div>   
      {mainList ? (list1) : (null)}
      {reserveList ? (list2) : (null)}
    </div>
  );
}

export default App;
