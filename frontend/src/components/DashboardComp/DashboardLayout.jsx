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
    
   <div className="gap-4 p-5 h-full overflow-y-auto">
   {posts.map((post, key) => (
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
                />
            ))}
   
      
        
        </div>

  
  )
}

export default DashboardLayout