
const ShowUserName = (props) => {

  return (
    <>
    <div className="sections">
    <h4>Props - {props.tipo}</h4>
    <div>O nome deste usuário é: {props.name} de {props.age} anos</div>
    </div>
   
    </>
    
  )
}

export default ShowUserName