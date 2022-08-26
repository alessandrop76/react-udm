import React from 'react'
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

 //Renderizando com Hooks....................................................................................



const Product = () => {    
  const url = "http://localhost:3000/products/";
  const [error, setError] = useState(null);
  const [isLoaded,setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then((result) =>{
      setIsLoaded(true);
      setItems(result);
    },
    (error) => {
      setIsLoaded(true);
      setError(error);
    }
    )
  },[])
  
  if(error){
    return <div>Error: {error.message}</div>
  }else if(!isLoaded){
    return <div>Loading...</div>
  }else{
    return(
      <div className="container">
        {items.map(item =>(
          <div className="cards" key={item.id}>
          <div className="card-body">
            <div className="h5">
             <span className="card-subtitle">{item.name}</span>
            </div>
               <h5 className="card-title">$ {item.price}</h5>
              
              <p className="card-text"></p>
            <Link className="btn" to={`/products/${item.id}`}><button className="btn" type="button">*detalhes*</button></Link>
          </div>
          </div>
        ))}
      </div>
    
    )
  }
  
  }

export default Product