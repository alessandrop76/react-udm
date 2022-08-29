import {useContext} from 'react';
import { CounterContext } from '../context/CounterContext';
import {useTitleColorContext} from '../hooks/useTitleColorContext';

const About = () =>{

    const {counter} = useContext(CounterContext);

    const {color} = useTitleColorContext();



    return (
        <>
        <h1 style={{ color: color }}>About</h1>
        <p>{counter}</p>
        </>
        )
}

export default About