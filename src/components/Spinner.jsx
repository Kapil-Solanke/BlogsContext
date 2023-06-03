import React, { useContext } from 'react'
import "./Spinner.css"
import { AppContext } from '../context/AppContext'
const Spinner = () => {
  const{blackMode}=useContext(AppContext);
  return (
    <div className={` w-screen h-screen flex items-center justify-center ${blackMode?"bg-[#acb3c0] text-black":"bg-[#161D29] text-[#6E727F]"}`}>
      <div className='spinner'></div>
    </div>
  )
}

export default Spinner
