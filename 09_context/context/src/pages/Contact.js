// import {useContext} from 'react';
// import {CounterContext} from '../context/CounterContext';

import {useCounterContext} from '../hooks/useCounterContext';

const Contact = ()=>{
    
    // const {counter} = useContext(CounterContext);

    const {counter} = useCounterContext();

    return(
        <>
        <div>Contact</div>
        <p>O mesmo contexto sendo utilado aqui: {counter}</p>
        </>        
        )
}

export default Contact