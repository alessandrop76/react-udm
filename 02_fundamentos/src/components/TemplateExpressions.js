import './TemplateExpressions.css';

const TemplateExpressions = () =>{
    const name = "Alessandro";
    const data = {
        age: 45,
        job: "Programador",
        hobbies: "Música"
    }
    return(
        <>
        <div className="line">
         <p>Olá meu nome é: <span>{name}</span> e eu sou <span>{data.job}</span>, mas também gosto de <span>{data.hobbies}</span></p>  
        </div>
        </>
    )
}

export default TemplateExpressions;