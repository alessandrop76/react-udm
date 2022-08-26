import { useNavigate } from "react-router-dom";

import {useState} from "react";

const SearchForm = () => {

  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();

    navigate('/search?q=' + query);
  }



  return (
    <div>
        <form className="search" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="find" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" name="submit" value="Search" />        
        </form>
    </div>

  )
}

export default SearchForm