import '../App.css';

const ChangeMessageState = ({handleMessage}) => {

    const messages = ["Oi", "Olá", "Oi como vai?"]
  return (
    <div>
        <button className="btnMsg" onClick={() => handleMessage(messages[0])}>1</button>
        <button className="btnMsg" onClick={() => handleMessage(messages[1])}>2</button>
        <button className="btnMsg" onClick={() => handleMessage(messages[2])}>3</button>
    </div>
  )
}

export default ChangeMessageState