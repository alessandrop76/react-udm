import {useContext} from 'react';
import {CounterContext} from '../context/CounterContext';

const Contact = ()=>{
    
    const {counter} = useContext(CounterContext);

    return(
        <>
        <div>Contact</div>
        <p>O mesmo contexto sendo utilado aqui: {counter}</p>
        </>        
        )
}

export default Contact