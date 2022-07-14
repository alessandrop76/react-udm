const Challenge = ()=>{
    let number1 = 10;
    let number2 = 20;

    let result = number1+number2;
   

    return(
        <>
        <p>Valor A: {number1}</p>
        <p>Valor B: {number2}</p>
        <button onClick={() => console.log(number1+number2)}>O valor de A + B é : {result}</button>  
        </>        
    )
}

export default Challenge;