import React,{useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios";


const PictureAndCover = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true); 
    const [userData, setUserData] = useState(null);
    const { userid } = location.state;

    useEffect(() => {
      const getUserInfo = async () => {
          try {
              const response = await axios.get(`http://localhost/api/users/users/${userid}`);
              setUserData(response.data); 
          } catch (error) {
              console.error('Error fetching user data:', error);
          } finally {
              setLoading(false); // Set loading to false after data is fetched
          }
      };

      if (userid) {
          getUserInfo();
      }
  }, [userid]);

  if (loading) {
      return <div>Loading...</div>; // Loading component
  }


  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center w-3/5 m-auto mb-4">
                        {/* <!-- Banner Profile --> */}
                        <div className="relative">
                            <img src={userData.coverpic} alt="Banner Profile" className="min-w-[900px] h-64 rounded-t-lg" />
                            <img src={userData.profilepic} alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-48 h-48 rounded-full border-4 border-white"/> 
                        </div>
                        {/* <!-- User Info with Verified Button --> */}
                        <div className="flex items-center mt-4">
                           <div> <h2 className="text-xl font-bold text-gray-800 mt-24">{userData.fullname}</h2> 
                           <h4 className="text-sm font-bold text-gray-800 ">@{userData.username}</h4></div>
                            
                        </div>
                        {/* <!-- Bio --> */}
                       
                     
                    </div>
  )
}

export default PictureAndCover