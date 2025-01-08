import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/style/userdata.css';

const Userdata = () => {
  let [email, setEmail] = useState(""); 
  let navigate = useNavigate();
  let defaultPassword = "jsonplaceholder.org";

  let handleLogin = async (e) => {
    e.preventDefault();

    let fetchApi = await axios.get("http://localhost:3000/Users");

    let User = fetchApi.data.find((u) => u.email === email);

    if (User && defaultPassword === "jsonplaceholder.org") {
      navigate("/userportal/userdashboard", { state: { User } });
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <div className="userlogin">
      <div className="header">User Login</div>
      <div className="container">
        <form onSubmit={handleLogin}>
          <input   type="email" name="email"  placeholder="Enter User Email"  value={email} 
           onChange={(e) => setEmail(e.target.value)}  required />
           
          <input type="text" name="pass" placeholder="Password (De jsonplaceholder.org)"  disabled value="jsonplaceholder.org" />
            
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Userdata;
