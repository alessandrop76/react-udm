

const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h4>Cars Details</h4>
        <ul>
            <li>Marca: {brand}</li>
            {!newCar ? (<li>Kilometragem {km} KM</li>):(<li>{newCar && <p>Este carro é 0 KM</p>}</li>)}
            <li>Cor: {color}</li>
        </ul>
       
    </div>
  )
}

export default CarDetails