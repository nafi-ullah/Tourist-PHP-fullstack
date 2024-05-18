import React from 'react'
import DashboardLayout from '../components/DashboardComp/DashboardLayout'
import DashProfileCard from '../components/DashboardComp/DashProfileCard'
import PostsCard from '../components/DashboardComp/PostsCard'
import CountryQuery from '../components/DashboardComp/CountryQuery'

const Dashboard = () => {
  return (
    <div className='bg-[#F4F2EE]'>
     
        <div className="fixed  w-1/4 gap-4 m-5 flex justify-end">
            <DashProfileCard/>
           
        </div>
        <div className="w-full m-1  flex justify-center">
          {/* <div className='w-1/3 h-full '></div> */}
          <div className='w-2/5 pr-5 pb-5 pl-5'>
          <DashboardLayout/>
          </div>
          <div className="fixed w-1/4 postion right-0 gap-4 m-5 ">
            {/* <CountryQuery/> */}
            <PostsCard />
        </div>



        
        </div>
    </div>
  )
}

export default Dashboard