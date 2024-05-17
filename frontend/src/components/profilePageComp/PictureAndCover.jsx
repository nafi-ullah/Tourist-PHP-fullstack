import React from 'react'
import { useLocation } from "react-router-dom";


const PictureAndCover = () => {
    const location = useLocation();

    const { fullname, userid, username,coverpic, profilepic,bio, email } = location.state;

 


  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center w-4/5 m-auto mb-4">
                        {/* <!-- Banner Profile --> */}
                        <div className="relative">
                            <img src={coverpic} alt="Banner Profile" className="min-w-5/6 h-64 rounded-t-lg" />
                            <img src={profilepic} alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"/> 
                        </div>
                        {/* <!-- User Info with Verified Button --> */}
                        <div className="flex items-center mt-4">
                           <div> <h2 className="text-xl font-bold text-gray-800 mt-7">{fullname}</h2> </div>
                            <h4 className="text-sm font-bold text-gray-800 mt-7">@{username}</h4>
                        </div>
                        {/* <!-- Bio --> */}
                       
                     
                    </div>
  )
}

export default PictureAndCover