import React from 'react'
import DashboardLayout from '../components/DashboardComp/DashboardLayout'
import DashProfileCard from '../components/DashboardComp/DashProfileCard'
import PostsCard from '../components/DashboardComp/PostsCard'
import CountryQuery from '../components/DashboardComp/CountryQuery'

const Dashboard = () => {
  return (
    <div>
     
        <div className="fixed w-1/5 gap-4 m-5 ">
            <DashProfileCard/>
            <PostsCard />
        </div>
        <div className="w-full m-1 ml-1/5 flex">
          <div className='w-1/5 h-full '></div>
          <div className='w-3/5 '>
          <DashboardLayout/>
          </div>
          <div className="fixed w-1/5 postion right-1 gap-4 m-5 ">
            <CountryQuery/>
           
        </div>



        
        </div>
    </div>
  )
}

export default Dashboard