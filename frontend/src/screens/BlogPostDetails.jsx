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
    <div className='h-full w-full flex justify-center'>
        <div className='w-2/5 mt-20'>
            <div>
            <img src={post.picture} alt="Post Image" className="w-full h-96 object-cover rounded-md" />
            </div>
            <div className='text-6xl font-bold mt-8'>{post.headline}</div>
            <div className="flex items-center space-x-2 mt-5">
            <img src={post.profilepic} alt="User Avatar" className="w-12 h-12 rounded-full" />
            <div>

                <button >
                    <div className="text-gray-800 font-semibold hover:underline hover:text-blue-500"> {post.fullname} </div>
                </button>
                <p className="text-gray-500 text-sm"><i>@{post.username}</i> Posted on {post.timestamp}</p>
            </div>
        </div>

        <div className='text-slate-700 mt-8'>{post.caption} </div>



        <section className='mt-20'>
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">Discussion ({post.comment_count})</h2>
    </div>
    <form className="mb-6">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  ">
            <label for="comment" className="sr-only">Your comment</label>
            <textarea id="comment" rows="6"
                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
                placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800">
            Post comment
        </button>
    </form>
        </section>


        </div>
    </div>
  )
}

export default BlogPostDetails