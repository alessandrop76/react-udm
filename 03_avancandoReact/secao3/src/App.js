// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import ListRenderer from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import Banners from './components/Banners';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  let userName = [{
    id: 1,
    name: "Alba",
    age: 33
  },
    {
      id: 2,
      name: "Bob",
      age: 34
    },
      {
        id: 3,
        name: "Carl",
        age: 12
      },
      {
        id: 4,
        name: "Doni",
        age: 17
      },
      {
        id: 5,
        name: "Eric",
        age: 2
      },
      {
        id: 6,
        name: "Felix",
        age: 18
      }
  ]

let [newUser] = useState({name: "Mary", age: 44});

const cars = [
{brand: "Ferrai", km: 0, color: "white", newCar: true},
{brand: "Porsche", km: 5300, color: "yellow", newCar: false},
{brand: "Lamborghini", km: 0, color: "red", newCar: true}, 
]

function showMessage(){
  console.log("Função executada com sucesso !")
}

const [message, setMessage] = useState("");

const handleMessage = (msg) =>{
  setMessage(msg);
}

  return (
    <div className="App">
      
      <h1>Seção 3</h1>
      <Banners />      
      <ManageData />
      <ListRenderer />
      <ConditionalRender />
      
      {/*Props */}
      <ShowUserName name="Jhon" tipo="Declaradas"/> 
      <ShowUserName name={userName.name} age={userName.age} tipo="Através de variáveis"/>
      <ShowUserName name={newUser.name} age={newUser.age} tipo="Através de states"/>
      
      {/*Reaproveitamento de componentes */}
      <CarDetails brand={"VW"} km={1000} color={"Vermelho"} newCar={false} />
      <CarDetails brand={"FIAT"} km={0} color={"Branco"} newCar={true} />
      <CarDetails brand={"MERCEDES"} km={0} color={"Cinza"} newCar={true} />
      <CarDetails brand={"OPEL"} km={1450} color={"Vermelho"} newCar={false} />
     
      {/*Loop de lista - map */}
      { <div className="loopCars">
        <table className="table">
        <thead><tr><td>Brand</td><td>KM</td><td>Color</td><td></td></tr></thead> 
      {cars.map((car,id) =>       
      <tbody  key={id}><tr><td>{car.brand}</td><td>{car.km}</td><td>{car.color}</td><td>{car.newCar}</td></tr></tbody>
      )}
      </table>
      </div>
      }
      {/*Fragments */}
      <Fragments propsFragment={"Elemento Teste"} />

      {/*Children */}
      <Container myValue="Props do componente 1">
         <p>Este é um elemento filho - 'children' -  renderizado dentro de um elemento pai</p>
      </Container> 

      <Container myValue="Props do componente 2">
         <h5>Este é um elemento filho - 'children' -  renderizado dentro de um elemento pai</h5>
      </Container> 
      
      {/*Executar função */}
      <ExecuteFunction myFunction={showMessage} />

      {/*State lift */}
      <Message  msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />

      {/*Desafio pode dirigir - validar se idade do usuário é maior que 18 anos */}
      <UserDetails />
      
      <>
          {userName.map((uname,id)=>(
                 <li key={id}>O usuário <strong>{uname.name}</strong> tem {uname.age} {uname.age >= 18 ? (<span>e PODE dirigir</span>):(<span>e <strong>NÃO PODE</strong> dirigir</span>)}</li>
           ))}
      </>
      
    </div>
  );
}

export default App;
