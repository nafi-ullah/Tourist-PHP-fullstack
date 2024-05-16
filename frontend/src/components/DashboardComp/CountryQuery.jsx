import React from 'react'

const CountryQuery = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md ml-5 w-full mb-4">
    {/* <!-- Banner Profile --> */}
    Popluar Country
    
    {/* <!-- User Info with Verified Button --> */}
   
    {/* <!-- Bio --> */}
    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-green-700 bg-green-100 border border-green-300 ">
            <div className="text-s font-normal leading-none  flex-initial">Bangladesh</div>
        </div>
        <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-green-700 bg-green-100 border border-green-300 ">
            <div className="text-s font-normal leading-none  flex-initial">India</div>
        </div>
        <div className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-green-700 bg-green-100 border border-green-300 ">
            <div className="text-s font-normal leading-none  flex-initial">Pakistan</div>
        </div>
    {/* <!-- Social Links --> */}
    <div className="flex items-center mt-4 space-x-4">
        <a href="#" className="text-blue-500 hover:underline"> Twitter </a>
        <a href="#" className="text-blue-500 hover:underline"> GitHub </a>
        <a href="#" className="text-blue-500 hover:underline"> LinkedIn </a>
    </div>
</div>
  )
}

export default CountryQuery