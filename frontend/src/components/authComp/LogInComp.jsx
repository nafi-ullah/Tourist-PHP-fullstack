import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function LogInForm() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const inputsWithAction = {...inputs,table: "users", action: "login"};
        axios.post('http://localhost/api/user/save', inputsWithAction)
        .then(function(response) {
          const { data, status } = response;
          const { message, user, jwt } = data;
    
          if (status === 200 && user) {
            const fullname = user.fullname || '';
        const userid = user.userid || '';
        const username = user.username || '';
        const profilepic = user.profilepic || '';
        const bio = user.bio || '';
        const coverpic = user.coverpic || '';
        const email = user.email || '';
        const jwtToken = jwt || '';

    
            navigate("/dashboard", {
              state: {
                fullname,
                userid,
                username,
                profilepic,
                email,
                bio,
                coverpic,
                jwtToken: jwt
              },
            });
          } else {
            alert(message);
          }
        })
        .catch(function(error) {
          // Handle errors, such as network issues or server errors
          if (error.response) {
            // Server responded with a status other than 200 range
            alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
          } else if (error.request) {
            // Request was made but no response received
            alert('No response from server. Please try again later.');
          } else {
            // Other errors
            alert(`Error: ${error.message}`);
          }
        });
       
        
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="email" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Password: </label>
                            </th>
                            <td>
                                <input type="password" name="password" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button className="text-white bg-black">Log in</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
