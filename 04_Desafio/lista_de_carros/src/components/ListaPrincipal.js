import styles from './ListaPrincipal.module.css';
import logo1 from './assets/alfaromeo.png';
import logo2 from './assets/bentley.png';
import logo3 from './assets/chrysler.png';
import logo4 from './assets/daewoo.png';
import logo5 from './assets/fiat.png';
import logo6 from './assets/gmc.png';
import logo7 from './assets/honda.png';
import logo8 from './assets/jaguar.png';
import logo9 from './assets/kia.png';
import logo10 from './assets/lexus.png';



const ListaPrincipal = ({brand, logo, km, color}) => {
const mainCars = [
    {id: 1, brand:"Alfa Romeo", logo:logo1, km:4444, color:"Rojo"},
    {id: 2, brand:"Bentley", logo:logo2, km:5000, color:"Blue"},
    {id: 3, brand:"Chrysler", logo:logo3,  km:24900, color:"Black"},
    {id: 4, brand:"Daewoo", logo:logo4, km:19300, color:"Gray"},
    {id: 5, brand:"Fiat", logo:logo5, km:0, color:"Celest"},
    {id: 6, brand:"GMC", logo:logo6, km:1000300, color:"Sky Blue"},
    {id: 7, brand:"Honda", logo:logo7, km:99000, color:"Pink"},
    {id: 8, brand:"Jaguar", logo:logo8, km:44888, color:"Ice"},
    {id: 9, brand:"Kia", logo:logo9, km:22222, color:"Black"},
    {id: 10,brand:"Lexus", logo:logo10, km:41000, color:"Yellow"}
]
  return (
    <>
    <div className={styles["container"]}>
    <h3>ListaPrincipal</h3>
    <table className={styles['main_table']}>
        <thead>
            <tr>
            <th>Brand</th>
            <th></th>
            <th>KM</th>
            <th>Color</th>
            </tr>            
        </thead>
        {mainCars.map((cars, id)=>(
        <tbody key={id}>        
        <tr>
            <td>{cars.brand}</td>
            <td><img className={styles['logoBrand']} src={cars.logo} alt="imagem da pasta assets" /></td>
            <td>{cars.km}</td>
            <td>{cars.color}</td>
        </tr>
        </tbody>
         ))}
    </table>
    </div>
    
    </>
  )
}

export default ListaPrincipal