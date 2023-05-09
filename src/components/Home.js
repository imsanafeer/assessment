import React, { useEffect, useState } from 'react'



const Home = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => setUsers(json))
    }, []);
   
    
  return (
    <div>
      <table border={3}>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>body</th>
            </tr>
            {users.map(user => (
              <tr key={user.userId}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
              </tr>
            ))}
          </table>
    </div>
  );
}

export default Home
