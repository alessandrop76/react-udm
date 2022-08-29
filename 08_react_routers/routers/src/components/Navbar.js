// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
   <nav>
    {/* <Link to="/">Home</Link> */}
    <NavLink to="/">Home</NavLink>
    
    {/* <Link to="/about">Sobre</Link> */}
    <NavLink to="/about"
    //className={({is-active}) => (isActive ? "esta-ativo" : "nao-ativo")}
    >Sobre</NavLink>
    
    {/* <Link to ="/products/:id">Product</Link> */}
   <NavLink to ="/products/:id">Produto</NavLink>
   </nav>
  )
}

export default Navbar