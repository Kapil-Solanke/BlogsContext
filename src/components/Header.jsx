import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {GiNightSleep} from 'react-icons/gi'
const Header = () => {
    const{blackMode,setBlackMode}=useContext(AppContext);
  return (
    <div className={`w-full flex justify-around items-center border-b-2  py-4 ${blackMode?"bg-[#acb3c0] text-black":"bg-[#161D29] text-[#b0b4c3]"} `}> 
      <header className='text-center' >
        <h1 className='text-3xl font-bold uppercase'>Blogs</h1>
      </header>
      <div>
        <button onClick={()=>setBlackMode(!blackMode)} className={`rounded-md  px-4 py-2  ${blackMode?"shadow-[inset_-2px_-2px_0px_#FFFFFF] ":"shadow-[inset_-2px_-2px_0px]"}  `}>
            <GiNightSleep></GiNightSleep>
        </button>
      </div>
    </div>
  )
}

export default Header
