import React from 'react'

const AboutCard = ({fullname, email, bio, profilepic, coverpic, userid}) => {
  return (
    <div className="bg-white p-7 shadow-sm rounded-sm w-3/5 m-auto">
    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span clas="text-green-500">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </span>
        <span className="tracking-wide text-xl">Bio</span>
    </div>
    <div className='p-3'>{bio}</div>
    <div className="flex items-center space-x-2 mt-8 font-semibold text-gray-900 leading-8">
        <span clas="text-green-500">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </span>
        <span className="tracking-wide text-xl">About</span>
    </div>
    <div className="text-gray-700 text-lg">
        <div className="grid md:grid-cols-2 ">
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Full Name</div>
                <div className="px-4 py-2">{fullname}</div>
            </div>
         
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">Male</div>
            </div>
           
            
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">{email}</a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Password</div>
                <div className="px-4 py-2">********</div>
            </div>
        </div>
    </div>
    <button
        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
        Full Information</button>
</div>
  )
}

export default AboutCard