import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        for (const key in inputs) {
            if (!inputs[key]) {
                alert(`${key} field is required`);
                return;
            }
        }

        const inputsWithAction = {...inputs,table: "users", action: "register"};

        axios.post('http://localhost/api/user/save', inputsWithAction).then(function(response){
            console.log(response.data);
         
        });
        
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Username: </label>
                            </th>
                            <td>
                                <input type="text" name="username" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Fullname: </label>
                            </th>
                            <td> 
                                <input type="text" name="fullname" onChange={handleChange} />
                            </td>
                        </tr>
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
                                <button className="bg-black">Sign Up</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
