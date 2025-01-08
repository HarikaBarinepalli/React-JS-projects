import { useLocation } from "react-router-dom";
import '../assets/style/userdashboard.css';
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  let navigate = useNavigate()
  let location = useLocation()
  let userDetails = location.state?.User; // Updated to match state key

  if (!userDetails) {
    return <div>User not found</div>; 
  }

  let dateObj = new Date();
  let age = dateObj.getFullYear() - userDetails.birthDate.slice(0, 4);
 

  let goBack = () => {
    navigate(-2);
  }


  return (
    <>
      <div className="userdashboard">
        <div className="header">User Dashboard</div>
        <div className="container">
          <table border={0}>
            <thead>
              <tr>
                <th>Field</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>First Name:</strong></td>
                <td>{userDetails.firstname}</td>
              </tr>
              <tr>
                <td><strong>Last Name:</strong></td>
                <td>{userDetails.lastname}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>{userDetails.email}</td>
              </tr>
              <tr>
                <td><strong>Birth Date:</strong></td>
                <td>{userDetails.birthDate}</td>
              </tr>
              <tr>
                <td><strong>Age:</strong></td>
                <td>{age}</td>
              </tr>
              <tr>
                <td><strong>Phone:</strong></td>
                <td>{userDetails.phone}</td>
              </tr>
              <tr>
                <td><strong>Website:</strong></td>
                <td>{userDetails.website}</td>
              </tr>
              <tr>
                <td><strong>Company Name:</strong></td>
                <td>{userDetails.company.name}</td>
              </tr>
              <tr>
                <td><strong>Company Catchphrase:</strong></td>
                <td>{userDetails.company.catchPhrase}</td>
              </tr>
              <tr>
                <td><strong>Address:</strong></td>
                <td>{userDetails.address?.street}, {userDetails.address?.city}, {userDetails.address?.zipcode}</td>
              </tr>
              <button onClick={goBack} >Back Button</button>
      
              

    
    
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;




