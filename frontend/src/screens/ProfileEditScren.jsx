import React, {useState} from 'react'
import ProfileFrom from '../components/profilePageComp/ProfileEdit'
import PictureAndCover from '../components/profilePageComp/PictureAndCover'
import AboutCard from '../components/profilePageComp/AboutCard'

const ProfileEditScren = () => {
    const [showEditor, setShowEditor] = useState(false);
    const handleEditor = ()=>{
        if(showEditor){
            setShowEditor(false);
        }
        else{
            setShowEditor(true);
        }
    }

  return (
    <div className='bg-[#F4F2EE]'>
        <PictureAndCover/>
        {showEditor && <ProfileFrom/>}
        {!showEditor &&   <AboutCard/>}
        <div className='w-4/5 mb-14 flex justify-end'>
                <button onClick={handleEditor}> <div className="text-blue-500 hover:underline"> Edit Profile </div></button>
        </div>
    
    </div>
  )
}

export default ProfileEditScren