import React from 'react'
import DashProfileCard from './DashProfileCard'
import PostsCard from './PostsCard'
import PostContentCard from './PostContentCard'

const DashboardLayout = () => {
  return (
    
   <div>
   
      
        
            <div className="gap-4 p-5 h-full overflow-y-auto">
                <PostContentCard />
                <PostContentCard />
                <PostContentCard />
                <PostContentCard />
                <PostContentCard />
                <PostContentCard />
            </div>
 

        </div>

  
  )
}

export default DashboardLayout