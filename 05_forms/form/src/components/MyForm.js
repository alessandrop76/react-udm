import styles from '../components/MyForm.module.css';
import {useState} from 'react';

const MyForm = ({ user }) => {
 //6 - Inputs Controlados
     const [name, setName] = useState(user ? user.name : "");
     const [email, setEmail] = useState(user ? user.email : "");
     const [bio, setBio] = useState(user ? user.bio : "");
     const [role, setRole] = useState(user ? user.role : "");

//{/*3 - Manipulando o form*/}
     function handleNome(e){
        setName(e.target.value)        
     }
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, bio, role);

           //7 - Limpando Formulários
    setName("");
    setEmail("");
    setBio("");
    setRole("")
     }
     console.log(name)

    //  function handleEmail(e){
    //     setEmail(e.target.value)
    //     console.log(email)
    //  }
     console.log(email)

  return (
    <div>
        <h1>Forms</h1>
        {/*1 - Criando o Form*/}
        <form className={styles['form']} onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input
             type="text"
             name="name"
             placeholder="Digite seu nome" onChange={handleNome}
             value={name}
            />
        {/*2- Label envolvendo o input*/}
            <label>
                <span>Email</span>
                <input 
                type="email"
                name="email"
                placeholder="Digite seu email"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                />                 
            
            {/*4 - Fazendo a manipulação do state inline*/}
            </label>
            <label>
                <span>Bio: </span>
            <textarea 
            name="bio"
            id="bio"
            placeholder="Sobre você"
            onChange={(e)=> setBio(e.target.value)}
            value={bio}></textarea>   
            </label>
            {/* 9 - Select */}
            <select name="role" onChange={(e)=> setRole(e.target.value)}>
                <option value="usuario">Usuário</option>
                <option value="administrador">Administrador</option>
                <option value="editor">Editor</option>
            </select>
           <input type="submit" value="Enviar"></input>
        </form>
     </div>
  )
  
}

export default MyForm