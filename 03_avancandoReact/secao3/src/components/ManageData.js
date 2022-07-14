import { useState } from 'react';
import "../App.css";

const ManageData = ()=>{

    let someData = 10;
    console.log(someData);

    const [number, setNumber] = useState(15);
    console.log(number);

    return(
        <>
        <div className="manageData">
            <div>
            <p>Valor: {someData}</p>
            <button onClick={()=> console.log(someData)}>Mudar variável</button>
            </div>
               
            <div>
               <p>Valor : {number}</p>
                <button onClick={()=> setNumber(25)}>Alterar valor da variável</button>
            </div>
        </div>
        </>
        
        )
}

export default ManageData;