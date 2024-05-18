import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const BlogPostDetails = () => {
    const { postid } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        console.log(postid);
        axios.get(`http://localhost/api/users/posts/indpost/${postid}`).then(response => {
            setPost(response.data);
        });
    }, [postid]);

    if (!post) {
        return <div>Loading...</div>;
    }


  return (
    <div className='text-3xl'>{post.headline}</div>
  )
}

export default BlogPostDetails