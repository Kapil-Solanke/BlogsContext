import React, { useContext } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import { AppContext } from '../context/AppContext'

const TagPage = () => {
    const location=useLocation()
    const {blackMode}=useContext(AppContext)
    const navigation =useNavigate();
    const tag=location.pathname.split('/').at(-1)
  return (
    <div className={`w-full h-full min-h-screen min-w-screen  flex flex-col gap-8   items-center ${blackMode?"bg-[#acb3c0] text-black":"bg-[#161D29] text-[#b0b4c3]"}`}>
        <Header/>
        <div className=" flex flex-row gap-2 justify-center items-center ">
        <h2 className={`rounded-md mt-3   px-4 py-2  ${
              blackMode
                ? "shadow-[inset_-2px_-2px_0px_#FFFFFF] "
                : "shadow-[inset_-2px_-2px_0px]"
            }  `}>
          Blogs Tagged <span>#{tag}</span>
        </h2>
        <div>
          <button
            onClick={() => navigation(-1)}
            className={`rounded-md mt-3   px-4 py-2  ${
              blackMode
                ? "shadow-[inset_-2px_-2px_0px_#FFFFFF] "
                : "shadow-[inset_-2px_-2px_0px]"
            }  `}>
            Back
          </button>
        </div>
      </div>
        <Blogs/>
        <Pagination/>

    </div>
  )
}

export default TagPage