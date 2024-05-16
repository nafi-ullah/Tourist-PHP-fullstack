import React from 'react'
import DashProfileCard from './DashProfileCard'
import PostsCard from './PostsCard'
import PostContentCard from './PostContentCard'
import { useEffect, useState } from "react";
import axios from "axios"

const DashboardLayout = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, []);

    function getPosts() {
        axios.get('http://localhost/api/users/posts').then(function(response) {
            console.log(response.data);
            setPosts(response.data);
        });
    }



  return (
    
   <div>
   
      
        
            <div className="gap-4 p-5 h-full overflow-y-auto">
                <PostContentCard />
                <PostContentCard />
                <PostContentCard />
                <PostContentCard />
                <PostContentCard />
                <PostContentCard />
            </div>
 

        </div>

  
  )
}

export default DashboardLayout