import './MyComponent.css';

const MyComponent = () => {
    const primeiroComponent = ()=>{
        alert("Este é o primeiro componente criado nesta aplicação")
    }
    return(
        <button className="saibaMais" onClick={primeiroComponent}>Saiba mais...</button>
    )   
}

export default MyComponent;