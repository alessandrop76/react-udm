const Events = () =>{
    const handleMyEvent = (e) => {
        console.log(e);
        // alert('Evento carregado no onclick quando se usa parenteses nas funções');
    }
    const renderSomething = (x) => {
        if(x){
            return <h4>Renderizando isso</h4>
                
            }
        else{
            return <h4>Renderizando aquilo</h4>
        }
    }
    return(
        <>
         <div>
            <button onClick={handleMyEvent}>Clique aqui</button>
        </div>
        
        {renderSomething(true)};
        {renderSomething(false)};
        </>
    )
}

export default Events;