
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { postCred } from "../utils/auth";

import axios from "axios";
import ListUser from "../components/authComp/CreateUser";
import LogInForm from "../components/authComp/LogInComp";


const LoginPage = () => {
   
    // const [password, setPassword] = useState('');
    // const [username, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [fullname, setFullName] = useState('');
    const [showSignUp, setShowSignUp] = useState(false);
   
  


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
      <LogInForm/>
     
      <p className="text-xs text-gray-500 mt-3">Haven't registered yet? <button className="text-black bg-white" onClick={handleSignUp}>
      Sign Up
    </button> </p>
    </div>}

    {showSignUp && <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      <ListUser/>
     
      <p className="text-xs text-gray-500 mt-3">Already registered? <button className="text-black" onClick={handleLogin}>
      Log in
    </button> </p>
   
    </div>}
    
  </div>

</section>
{/* <ToastContainer /> */}

</>
  )
}

export default LoginPage