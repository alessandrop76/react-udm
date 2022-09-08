import styles from './Register.module.css'
import {useState, useEffect, useRef} from 'react';


import { useAuthentication } from '../../hooks/useAuthentication';



const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [confirmEmail, setConfirmEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  
  const passwordInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const { createUser, error: authError, loading } = useAuthentication();

 

  const handleSubmit = async (e) => {
      e.preventDefault();

      setError("")

      const user = {
        displayName,
        email,
        password
      }

      if(password !== confirmPassword) {
        setError("As senhas precisam ser iguais");
        setPassword("");
        setConfirmPassword("");
        passwordInputRef.current.focus();
        return
        
        
      }else if(email !== confirmEmail){
        setError("os emails não correspondem");
        setEmail("");
        setConfirmEmail("");
        emailInputRef.current.focus();
        return
        }
        else{
          const res = await createUser(user);
          
          console.log(res);

          setDisplayName("")
          setEmail("");
          setConfirmEmail("")
          setPassword("");
          setConfirmPassword("")
        }
      };

      useEffect(() => {
        if(authError){
          setError(authError);
        }
      },[authError]);
            
          return(
          <div className={styles.register}>
          <h2 className={styles.h2}>Registre-se</h2>
          <p>Crie seu usuário e compartilhe suas histórias</p>
          <form onSubmit={handleSubmit}>
            <label>
            <span>Nome:</span>
            <input 
            type="text" 
            name="name" 
            required placeholder="Insira seu Nome" 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)} />
            </label>
  
            <label>
            <span>Email:</span>
            <input 
            type="email" 
            name="email" 
            required placeholder="Insira seu emial"
            value={email}
            ref={emailInputRef}
            onChange={(e) => setEmail(e.target.value)} />
            </label>
  
            <label>
            <span>Confirmar Email:</span>
            <input 
            type="email" 
            name="confirmEmail" 
            required placeholder="Repita seu email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)} />
            </label>
  
            <label>
            <span>Senha:</span>
            <input 
            type="password" 
            name="password" 
            required placeholder="Insira sua senha"
            value={password}
            ref={passwordInputRef}
            onChange={(e) => setPassword(e.target.value)} />
            </label>
  
            <label>
            <span>Confirmar Senha:</span>
            <input 
            type="password" 
            name="confirmPassword" 
            required placeholder="Repita sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
  
            <button className="btn" type="submit">Cadastrar</button>
            {error && <p className="error">{error}</p>}
          </form>
      </div>
  )
}
   
export default Register;