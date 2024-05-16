
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { postCred } from "../utils/auth";
import ListUser from "../components/homecomponents/CreateUser";
import axios from "axios";


const LoginPage = () => {
   
    // const [password, setPassword] = useState('');
    // const [username, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [fullname, setFullName] = useState('');
    const [showSignUp, setShowSignUp] = useState(false);
   
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost/api/user/save', inputs).then(function(response){
            console.log(response.data);
           
        });
        
    }
   


    // const handleButtonClick = async () => {

    //     // if(fullname.length == 0){
    //     //     alert("Name has left blank");
    //     // }
    //     // else if(username.length == 0){
    //     //     alert("Username has left blank");
    //     // }
    //     // else if(email.length == 0){
    //     //     alert("email has left blank");
    //     // }
    //     // else if(password.length == 0){
    //     //     alert("password has left blank");
    //     // }
    
    //     try{
            
     
    //       const response = await postCred({
    //         username,
    //         password
    //       }
    //      );
    
        
    //     //   console.log('Response:', password);
    //     console.log(response);


    //     if(response.token ){
    //       if(response.isVoted){
    //         navigate("/vote-complete", {
    //             state: {
    //             //   regno: regno,
    //             },
    //           });
    //       }
    //     }
    //     else{
    //         // const notify = () => toast("Bad Credential, Try Right Credential");
    //         // notify();
    //         console.error('Error:');
    //     }
      
    

     
    
    //     }catch(e){
    //     //     const notify = () => toast("Bad Credential, Try Right Credential");
    //        console.error('Error:', e);
    //     //   notify();
    //     }
    
    //   };
      const handleSignUp = () => {
       setShowSignUp(true);
      };
      
      const handleLogin = () => {
        setShowSignUp(false);
       };

  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">Are you ready to embark on unforgettable journeys, discover new cultures, and create memories that will last a lifetime! </h1>
      <p className="leading-relaxed mt-4">Welcome to our travel website, your gateway to the exciting world of exploration and adventure.</p>
    </div>

    {!showSignUp && <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Log In</h2>
      <ListUser />
      
      <p className="text-xs text-gray-500 mt-3">Haven't registered yet? <button className="text-button bg-black" onClick={handleSignUp}>
      Sign Up
    </button> </p>
    </div>}

    {/* {showSignUp && <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <div className="relative mb-4">
        <label htmlFor="Registration-No" class="leading-7 text-sm text-gray-600">Full Name</label>
        <input type="text" id="fullname" name="fullname" value={fullname} onChange={(e) => setFullName(e.target.value)}  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="Registration-No" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="Registration-No" class="leading-7 text-sm text-gray-600">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUserName(e.target.value)}  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
 
      <div className="relative mb-4">
        <label htmlFor="Registration-no" class="leading-7 text-sm text-gray-600">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button onClick={handleButtonClick } className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log in</button>
      <p className="text-xs text-gray-500 mt-3">Already registered? <button className="text-button" onClick={handleLogin}>
      Log in
    </button> </p>
   
    </div>} */}
    
  </div>

</section>
{/* <ToastContainer /> */}

</>
  )
}

export default LoginPage