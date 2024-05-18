import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashProfileCard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); // State to manage loading status
    const { userid } = location && location.state;

    const goToProfile = (event) => {
        navigate("/profile", {
            state: { userid },
        });
    };

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
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mb-4">
            {/* <!-- Banner Profile --> */}
            <div className="relative">
                <img src={userData.coverpic} alt="Banner Profile" className="w-full rounded-t-lg" />
                <img src={userData.profilepic} alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white"/> 
            </div>
            {/* <!-- User Info with Verified Button --> */}
            <div className="flex items-center mt-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mt-7">{userData.fullname}</h2>
                </div>
                <h4 className="text-sm font-bold text-gray-800 mt-7">@{userData.username}</h4>
            </div>
            {/* <!-- Bio --> */}
            <p className="text-gray-700 mt-2">{userData.bio}</p>
            {/* <!-- Social Links --> */}
            <div className="w-full flex justify-center mt-4 space-x-4">
                <button onClick={goToProfile}>
                    <div className="text-blue-500 hover:underline"> View Profile </div>
                </button>
            </div>
        </div>
    );
};

export default DashProfileCard;
