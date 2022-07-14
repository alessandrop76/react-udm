import {useState} from 'react';


const ConditionalRender = () => {

    let [x] = useState(true);    
    let [valorX, setValorX] = useState(x)
    console.log(x)
    
    function AlteraX(){
       if(x === true){
            setValorX(false)
            x = false;          
        }else{
            setValorX(true);
            x = true;
        }
    }
    console.log(valorX)

    let [name,setName] = useState("Joao");

  return (
    <>   
            <div className="conditional">
                <h4>Conditional Render</h4>
            { valorX && <p>Isso aparece no caso de X ser <strong className="true">true</strong></p> }
            { !valorX && <p>Isso aparece no caso de X ser <strong className="false">false</strong></p> }
           
            <button onClick={() => {AlteraX(valorX)}}>Altere o valor de X</button>

            <h2>If Ternário</h2>
           {name === "Joao" ? (
            <div>O João está aqui</div>
           ) : (
            <div>O joão não está aqui :/, agora temos {name}</div>
           )} 
        <button onClick={() => setName("Joana")}>Tente outro nome</button>

        </div>
    </>
   
    
  )
}

export default ConditionalRender