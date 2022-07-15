import './App.css';
import {useState} from 'react';
import MyComponent from './components/MyComponent';
import MyTitle from './components/MyTitle';

function App() {

const n = 15;
const [name]= useState("Nome");
const valida = true;

  return (
    <div className="App">
      {/*CSS Global*/}
     <h1>Estilos com CSS</h1>
     <p>Parágrafo do elemento Global</p>
    
     {/*CSS no componente*/}
     <MyComponent />
    
     {/*CSS Inline*/}
     <p style={{ color: '#ff44ff',
      backgroundColor: 'blue',
      borderTop: '2px solid black',
      padding: '10px',
      borderBottom: '3px solid gold'}}>Esta é uma estilização com CSS in-line</p>
    
     {/*CSS Inline Dinâmico*/}
     <h2 style={n >10 ? ({color:"red"}) : ({color: 'green'})}>CSS Dinâmico - com uma condição</h2>
     <h2 style={n <10 ? {color:"red"} : {color: 'green'}}>CSS Dinâmico - com outra condição</h2>
     <h2 style={name ==="Nome" ? {color:"red"} : {color: 'green'}}>CSS Dinâmico - Utilizando um estado do componente</h2>
     <h2 style={name ==="Nomes" ? {color:"red"} : {color: 'green'}}>CSS Dinâmico - Utilizando outro estado do componente</h2>
    
    {/*Classe Dinâmica*/}
    <h2 className={valida ? "title1" : "title2"}>Classe estilizada dinâmicamente conforme validação desejada</h2>
    <h2 className={!valida ? "title1" : "title2"}>Classe estilizada dinâmicamente conforme validação desejada</h2>

    {/*CSS Modules*/}
    <MyTitle />
    <h2 className="my_title">Este elemento recebe a classe de nome igual ao do elemento acima, mas não recebe a estilização dele</h2>
    </div>
  );
}

export default App;
