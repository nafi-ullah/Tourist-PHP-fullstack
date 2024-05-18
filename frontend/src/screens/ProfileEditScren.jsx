import React, { useEffect, useState } from 'react';
import ProfileFrom from '../components/profilePageComp/ProfileEdit'
import PictureAndCover from '../components/profilePageComp/PictureAndCover'
import AboutCard from '../components/profilePageComp/AboutCard'
import axios from "axios";
import { useLocation } from "react-router-dom";
import PostContentCard from '../components/DashboardComp/PostContentCard';
import { Pencil } from 'lucide-react';


const ProfileEditScren = () => {
    const [showEditor, setShowEditor] = useState(false);
    const location = useLocation();
    const [loading, setLoading] = useState(true); 
    const [userData, setUserData] = useState(null);
    const [posts, setPosts] = useState([]);



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

      const getPostInfo = async () => {
        try {
            const response = await axios.get(`http://localhost/api/users/posts/induser/${userid}`);
            setPosts(response.data); 
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false); // Set loading to false after data is fetched
        }
    };

    if (userid) {
        getUserInfo();
        getPostInfo();
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
        <div className='w-full'>
        <div className='w-1/2 m-auto text-3xl font-bold'>Your Posts 
        <div className='w-full h-1 bg-slate-700'></div>
        </div>

        <div className="gap-4 p-5 w-1/2 m-auto flex flex-wrap justify-center h-full overflow-y-auto">
   {posts.map((post, key) => (
    <div className='relative'>
       {showEdit && <div className="absolute top-16 right-10 w-5 h-5 cursor-pointer">
            <Pencil />
         </div>}
                <PostContentCard
                    key={key}
                    headline={post.headline}
                    caption={post.caption}
                    picture={post.picture}
                    fullname={post.fullname}
                    profilepic={post.profilepic}
                    timestamp={post.timestamp}
                    username={post.username}
                    comment_count={post.comment_count}
                    userid={post.userid}
                    postid={post.postid}
                   
                />
                </div>
            ))}
        
        </div>
        </div>
        
    
    </div>
  )
}

export default ProfileEditScren