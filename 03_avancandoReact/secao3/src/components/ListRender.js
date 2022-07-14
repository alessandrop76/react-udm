import {useState} from 'react';

const ListRenderer = () => {

    const [list] = useState(['paula','josé', 'pedro', 'maria','joão']);
    console.log(list)

    const [users, setUsers] = useState([
        { id: 1, name: 'alba', age: 33},
        { id: 2, name: 'bob', age: 56},
        { id: 3, name: 'cloe', age: 24},
        { id: 4, name: 'dora', age: 55}
    ]);
    console.log(users)
    
const deleteRandom = () => {
 const randomNumber = Math.floor(Math.random() * 5);

 setUsers((prevUsers)=>{
    return(
            prevUsers.filter((user)=> randomNumber !== user.id)
        )
 })
}

return(
        <div className="lists">
            <div>
            <ul>
                {list.map((item, i) =>(
                    <li key={i}>{item}</li>
                ))}
            </ul>
            </div>

            <div>
            <ul>{users.map((users, id)=>(
                    <li key={users.id}>Name:<strong> {users.name}</strong>  Age:<strong> {users.age}</strong> </li>                   )
                 )}
            </ul>

            <button onClick={deleteRandom}>Deletar usuário</button>
        </div>
        </div>
        
        )
}

export default ListRenderer;