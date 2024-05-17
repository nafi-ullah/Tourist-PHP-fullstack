import React from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DashProfileCard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { fullname, userid, username,coverpic, profilepic,bio, email } =location && location.state;

    const goToProfile = (event) => {
        const { name, value, files } = event.target;
        navigate("/profile", {

            state: {
                fullname,
                userid,
                username,
                profilepic,
                email,
                bio,
                coverpic
              },
        });
    }


  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
                        {/* <!-- Banner Profile --> */}
                        <div className="relative">
                            <img src={coverpic} alt="Banner Profile" className="w-full rounded-t-lg" />
                            <img src={profilepic} alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"/> 
                        </div>
                        {/* <!-- User Info with Verified Button --> */}
                        <div className="flex items-center mt-4">
                           <div> <h2 className="text-xl font-bold text-gray-800 mt-7">{fullname}</h2> </div>
                            <h4 className="text-sm font-bold text-gray-800 mt-7">@{username}</h4>
                        </div>
                        {/* <!-- Bio --> */}
                        <p className="text-gray-700 mt-2"> Web Developer | Cat Lover | Coffee Enthusiast </p>
                        {/* <!-- Social Links --> */}
                        <div className="w-full flex justify-center mt-4 space-x-4">
                            <button onClick={goToProfile}>
                            <div className="text-blue-500 hover:underline"> View Profile </div>
                            </button>
                        </div>
                    </div>
  )
}

export default DashProfileCard