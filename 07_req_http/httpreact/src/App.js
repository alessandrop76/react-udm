import './App.css';
import {useState, useEffect} from 'react';

//4- custom Hooks
import { useFetch } from './hooks/useFetch';


const url = 'http://localhost:3000/products';

function App() {
  
const [products, setProducts] = useState([]);

//4 - custom Hooks
const {data : items, httpConfig, loading, error} = useFetch(url);

console.log(items);

const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [id, setId] = useState("");

  //1 - resgatando dados
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     // ...
  //     setProducts(data)
  //   }
  //   fetchData();
  // }, []); // Or [] if effect doesn't need props or state

  // console.log(products);


  //2 - Adição de produtos
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const product = await {
//       id,
//       name,
//       price: parseInt(price),
//     };

//     const res = await fetch(url,{
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });

// // 3- Carregamento dinâmico
// const addedProduct = await res.json();

// setProducts((prevProducts) => [...prevProducts, addedProduct]);
// console.log(product,res);
  // }


const handleSubmit = async (e) => {
     e.preventDefault();
     const products = await {
            id,
            name,
            price: parseInt(price),
          };

          httpConfig(products, "POST");

setName("");
setPrice("");
setId("");


};

//8 - delete produto
  const handleRemove = async (id) => {    
       httpConfig(id, "DELETE");
   }


  return (
    <div className="App">

     <h1>Lista de Produtos</h1>
     <div className="product">
     <form  className="newProduct row" onSubmit={handleSubmit}>
      Novo Produto
      <div>
      <label htmlFor="name">Nome </label>
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value) } />
      </div>
         <div>
         <label htmlFor="price">Preço R$ </label>
          <input type="number" name="price"  value={price} onChange={(e) => setPrice(e.target.value) }/>
         </div> 
         <div>
          {loading && 
            <input className="btn" type="submit" name="submit" disabled value="Agurade" />   
          }
          {!loading && 
            <input className="btn" type="submit" name="submit" value="Criar" />   
          }
               
         </div>
      </form> 


      <form  className="newProduct row">
      Pesquisar Produto
      <div>
      <label htmlFor="name">Nome/Código</label>         
      </div>
         <div>       
          <input type="" name="prices" value={price} onChange={(e) => setPrice(e.target.value) } />
         </div> 

        <div>
          {loading && 
            <input className="btn" type="btn" name="submit" disabled defaultValue="Agurade" />   
          }
          {!loading && 
            <input className="btn" type="btn" name="submit" defaultValue="Pesquisar" />   
          }
      
         </div>
      </form>    

     </div>
     {loading && <p>Carregando os dados...  ...  ... </p>}
     <table className="table">
      <thead>
        <tr>
        <th>Code</th>
          <th>Product</th>
          <th>Price</th>
          <th>Edit / Delete</th>
        </tr>          
      </thead>
     
      {!error && (
        <tbody>
        {items && items.map((product,id) => (           //Validação para verificar se o array não está recebendo um obj null
          <tr key={id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
            <button type="btn" ><i className="fa fa-edit icon"></i></button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button type="btn" onClick={() => handleRemove(product.id)}><i className="fa fa-recycle icon"></i></button>
            </td>
          </tr>
          ))}
      </tbody>
      )}
      {error && <p>Sorry something went wrong :/</p>}
      
     </table>
     
     
    </div>
  );
}

export default App;
