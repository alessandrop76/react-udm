import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//2- Importando o contexto - o Provider deve encapsular os elementos que recebem o contexto
import {CounterContextProvider} from './context/CounterContext';

import {TitleColorContextProvider} from './context/TitleColorContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
      <App />
      </TitleColorContextProvider>
    </CounterContextProvider>   
  </React.StrictMode>
);

