
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/style/users.css'

const Users = () => {
  let [Users, setUser] = useState([]);

    let fetchApi = async () => {
      let fetchApi = await fetch("http://localhost:3000/Users");
      let data = await fetchApi.json();
      setUser(data);
    };
    fetchApi();

  let navigate = useNavigate();

  let login = (id) => {
    navigate(`/userportal/userdata/${id}`);
  };

  return (
    <div className="user">
      <div className="header">Users</div>
      <div className="container">
        <table border={0}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Email</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((elem,index) => {   
              let {id, email } = elem;
    
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  
                  <td>{email}</td>
                  <td>
                    <button onClick={() =>login(id)}> View</button>
                     
                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;