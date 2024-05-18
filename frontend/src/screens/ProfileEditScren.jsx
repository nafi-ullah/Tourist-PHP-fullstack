import React, { useEffect, useState } from 'react';
import ProfileFrom from '../components/profilePageComp/ProfileEdit'
import PictureAndCover from '../components/profilePageComp/PictureAndCover'
import AboutCard from '../components/profilePageComp/AboutCard'
import axios from "axios";
import { useLocation } from "react-router-dom";


const ProfileEditScren = () => {
    const [showEditor, setShowEditor] = useState(false);
    const location = useLocation();
    const [loading, setLoading] = useState(true); 
    const [userData, setUserData] = useState(null);



    const handleEditor = ()=>{
        if(showEditor){
            setShowEditor(false);
        }
        else{
            setShowEditor(true);
        }
    }


    const { userid, showEdit } = location.state;

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
    <div className='bg-[#F4F2EE]'>
        <PictureAndCover coverpic={userData.coverpic}
        profilepic={userData.profilepic}
        fullname={userData.fullname}
        username={userData.username}
        />
        {showEditor && <ProfileFrom 
        profilepic={userData.profilepic}
            fullname={userData.fullname}
            coverpic={userData.coverpic}
            bio={userData.bio}
            userid={userid}
            email={userData.email}
        />}
        {!showEditor &&   <AboutCard
          fullname={userData.fullname}
          bio={userData.bio}
          userid={userid}
          email={userData.email}
        />}
        {showEdit && <div className='w-4/5 mb-14 flex justify-end'>
                <button onClick={handleEditor}> <div className="text-blue-500 hover:underline"> Edit Profile </div></button>
        </div>}
        
    
    </div>
  )
}

export default ProfileEditScren