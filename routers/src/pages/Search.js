import {useSearchParams, Link, useParams} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import SearchForm from '../components/SearchForm';


const Search = () => {

  // const {id} = useParams();

  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?"+ searchParams;

  const {data: items, loading, error} = useFetch(url);

    
  if(error){
    return <div>Error: {error.message}</div>
  }else if(loading){
    return <div>Loading...</div>
  }else{
    return(
      <>
      <SearchForm />
      <div className="container">
        {items && items.map(item =>(
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
    </>
    )
  }
}

export default Search