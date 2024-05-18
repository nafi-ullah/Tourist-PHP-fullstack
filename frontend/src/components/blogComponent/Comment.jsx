import React from 'react'

const CommentCard = ({profilepic, fullname, timestamp, comment}) => {
  return (
    <div className='border-2 border-slate-200 rounded-lg'>
        <article className="p-6 text-base bg-white rounded-lg ">
    <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                <img
                    className="mr-2 w-10 h-10 rounded-full"
                    src={profilepic}
                    alt="Michael Gough"/>{fullname}</p>
            <p className="text-sm text-gray-600 "><div>{timestamp}</div></p>
        </div>
        <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 "
            type="button">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
            <span className="sr-only">Comment settings</span>
        </button>
        {/* <!-- Dropdown menu --> */}
        <div id="dropdownComment1"
            className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow ">
            <ul className="py-1 text-sm text-gray-700 "
                aria-labelledby="dropdownMenuIconHorizontalButton">
                <li>
                    <a href="#"
                        className="block py-2 px-4 hover:bg-gray-100 ">Edit</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 px-4 hover:bg-gray-100 ">Remove</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 px-4 hover:bg-gray-100 ">Report</a>
                </li>
            </ul>
        </div>
    </footer>
    <p className="text-gray-500 ">{comment}</p>
    <div className="flex items-center mt-4 space-x-4">
      
    </div>
</article></div>
  )
}

export default CommentCard