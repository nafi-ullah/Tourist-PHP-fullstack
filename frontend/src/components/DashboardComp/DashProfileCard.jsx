import React from 'react'
import { useLocation } from "react-router-dom";

const DashProfileCard = () => {
    const location = useLocation();
    const { fullname, userid, username, profilepic, email } = location.state;


  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
                        {/* <!-- Banner Profile --> */}
                        <div className="relative">
                            <img src="https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg" alt="Banner Profile" className="w-full rounded-t-lg" />
                            <img src={profilepic} alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"/> 
                        </div>
                        {/* <!-- User Info with Verified Button --> */}
                        <div className="flex items-center mt-4">
                            <h2 className="text-xl font-bold text-gray-800 mt-7">{fullname}</h2>
                        </div>
                        {/* <!-- Bio --> */}
                        <p className="text-gray-700 mt-2"> Web Developer | Cat Lover | Coffee Enthusiast </p>
                        {/* <!-- Social Links --> */}
                        <div className="flex items-center mt-4 space-x-4">
                            <a href="#" className="text-blue-500 hover:underline"> Twitter </a>
                            <a href="#" className="text-blue-500 hover:underline"> GitHub </a>
                            <a href="#" className="text-blue-500 hover:underline"> LinkedIn </a>
                        </div>
                    </div>
  )
}

export default DashProfileCard