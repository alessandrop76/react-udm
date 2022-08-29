import React from 'react'
import {useParams} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import {Link} from 'react-router-dom';



const Products = () => {
 
const {id} = useParams();

const url = 'http://localhost:3000/products/'+id;

const {data: items, error, loading} = useFetch(url);

return (
<>
<div>Products - Rota Dinâmica</div>
    <p>O produto selecionado tem o id: # {id}</p>
    <h2>Produto</h2>
    {error && <p>Ocorreu um erro :/</p>}
    {loading && <p>Carregando...</p>}
    {items && (<div>
      <p>Código: {items.id}</p>
      <p>Produto: {items.name}</p>
      <p>Unidade: R${items.price}</p>
      <Link to={`/products/${id}/info`}>mais informações...</Link>
    </div>)}
</>
  )
}

export default Products