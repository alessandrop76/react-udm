import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
  return (
   <nav className={styles.navbar}>
    <NavLink className={styles.brand} to="/">
        Mini<span> Blog</span>
    </NavLink>
    <ul className={styles.links_list}> 
        <li> 
        <NavLink to='/' className={({isActive})=> (isActive ? styles.active : '')}>Home</NavLink>
        </li>
        <li>
        <NavLink to='/about' className={({isActive})=>(isActive ? styles.active : '')}>About</NavLink>
        </li>
    </ul>       
    <ul className={styles.links_list}>
    <li>
        <NavLink to='/login' className={({isActive})=>(isActive ? styles.active : '')}>Login</NavLink>
        </li>
        <li>
        <NavLink to='/register' className={({isActive})=>(isActive ? styles.active : '')}>Register</NavLink>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar