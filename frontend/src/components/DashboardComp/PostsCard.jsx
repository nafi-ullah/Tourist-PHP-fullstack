
import React, { useState, useRef, useEffect } from 'react';

import { uploadFile } from 'react-s3';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



const PostsCard = () => {
    const [inputs, setInputs] = useState({
        caption: '',
        picture: null // Initialize picture as null
    });
    const location = useLocation();
    const navigate = useNavigate();
    const { userid  } = location.state;
 

    //script add kore nite hobe.
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
       widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dhqvosimu',
            uploadPreset: 'jhc18w5a'
        }, function(error, result){
            if (!error && result && result.event === 'success') {
                const imageUrl = result.info.secure_url;
                setInputs(inputs => ({ ...inputs, picture: imageUrl }));
           // console.log(inputs);
            }
        })

    }, [])


    const handleChange = (event) => {
        const { name, value, files } = event.target;
        // Check if the input is a file input
        if (files) {
            setInputs(inputs => ({ ...inputs, [name]: files[0] }));
        } else {
            setInputs(inputs => ({ ...inputs, [name]: value }));
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            console.log(inputs);
            const inputsWithAction = {...inputs,userid: userid, table: "posts"};
            axios.post('http://localhost/api/user/save', inputsWithAction).then(function(response){
                console.log(response.data);
                        window.location.reload();
            });
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }




  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
    <form onSubmit={handleSubmit}>
        {/* <!-- Post Content Section --> */}
        <div className="mb-6">
            <label htmlFor="headlineContent" className="block text-gray-700 text-sm font-bold mb-2">Headline</label>
            <textarea id="headlineContent" name="headline" rows="2" onChange={handleChange} className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
    sm:leading-5 resize-none focus:outline-none focus:border-blue-500" placeholder="Headline"></textarea>
        </div>
        <div className="mb-6">
            <label htmlFor="countryContent" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
            <textarea id="countryContent" name="country" rows="1" onChange={handleChange} className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
    sm:leading-5 resize-none focus:outline-none focus:border-blue-500" placeholder="Which Country?"></textarea>
        </div>
        <div className="mb-6">
            <label htmlFor="postContent" className="block text-gray-700 text-sm font-bold mb-2">Post Content:</label>
            <textarea id="postContent" name="caption" rows="4" onChange={handleChange} className="w-full border-2 rounded-md px-4 py-2 leading-5 transition duration-150 ease-in-out sm:text-sm
    sm:leading-5 resize-none focus:outline-none focus:border-blue-500" placeholder="What's on your mind?"></textarea>
        </div>
        {/* <!-- File Attachment Section --> */}
        <div className="mb-6">
            <label htmlFor="fileAttachment" className="block text-gray-700 text-sm font-bold mb-2">Attach File:</label>
            <div className="relative border-2 rounded-md px-4 py-3 bg-white flex items-center justify-between hover:border-blue-500 transition duration-150 ease-in-out">
                <input id="fileAttachment" name="picture" onClick={()=> widgetRef.current.open()} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span className="ml-2 text-sm text-gray-600">Choose a file</span>
                </div>
                <span className="text-sm text-gray-500">Max file size: 5MB</span>
            </div>
        </div>
        {/* <!-- Submit Button and Character Limit Section --> */}
        <div className="flex items-center justify-between">
            <button type="submit" className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue text-white py-2 px-4 rounded-md transition duration-300 gap-2"> Post <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" id="send" fill="#fff">
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
                </svg>
            </button>
            <span className="text-gray-500 text-sm">Max 280 characters</span>
        </div>
    </form>
</div>
  )
}

export default PostsCard