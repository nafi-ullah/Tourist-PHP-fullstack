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

        const inputsWithAction = {...inputs, action: "login"};
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
