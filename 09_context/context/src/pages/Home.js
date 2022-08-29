import React from 'react'
import {useContext} from 'react';
import {CounterContext} from '../context/CounterContext';

import {ChangeContext} from '../components/ChangeContext';

const Home = () => {
  const {counter} = useContext(CounterContext);

  return (
    <>
    <h1>React Context</h1>
    <p>O valor do contexto é: {counter}</p>
    <ChangeContext />
    </>
    
  )
}

export default Home