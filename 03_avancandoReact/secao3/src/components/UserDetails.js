const UserDetails = ({name, age, children}) => {
let users = [{
    id: 1,
    name: "Joe",
    age: 33
  },
    {
      id: 2,
      name: "John",
      age: 34
    },
      {
        id: 3,
        name: "Mary",
        age: 12
      },
      {
        id: 4,
        name: "Tobie",
        age: 17
      },
      {
        id: 5,
        name: "Cindy",
        age: 22
      },
      {
        id: 6,
        name: "Nany",
        age: 18
      }
  ]

  return (
    <div>
        <h2>User Details</h2>
        <ul>
         
            {users.map((user,id)=>(
                
                 <li key={id}>O usuário <strong>{user.name}</strong> tem {user.age} {user.age >= 18 ? (<span>e PODE dirigir</span>):(<span>e <strong>NÃO PODE</strong> dirigir</span>)}</li>
              
           ))}
           
              </ul>
    </div>
  )
}

export default UserDetails