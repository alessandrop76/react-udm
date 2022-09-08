import styles from './Login.module.css';
import {useState, useEffect, useRef} from 'react';


const Login = () => {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const [forgotPassword,setForgotPassword] = useState(false);


  return (
    <div className={styles.login}>
        <h2 className={styles.h2}>Login</h2>
        <p>Entre com suas credenciais</p>
        <form>
          <label>
            <input type="email" name="emil" placeholder="Digite seu email" />
          </label>
          <label>
            <input type="password" name="password" placeholder="Digite sua senha" />
            </label>

            <button className="btn" type="submit">Login</button>

            <label>
              <div>
            <input type="checkbox" name="forgotPassword" />
              <span>esqueci a senha</span>
              </div>
            </label>
        </form>
   </div>
  )
}
export default Login;