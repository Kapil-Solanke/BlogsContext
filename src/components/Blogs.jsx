import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';


const Blogs = () => {
    //consume
    const {posts,loading,blackMode} = useContext(AppContext);
  return (
    <div className={` w-full mt-0 flex item-center justify-center ${blackMode?"bg-[#acb3c0] text-black":"bg-[#161D29] text-[#6E727F]"}  `}>
    <div className={`w-11/12 max-w-[670px] sm:w-full min-h-fit py-8 flex flex-col gap-y-7  mb-[70px]  justify-center items-center    `}>
    {
        loading ? 

        (<Spinner />) : 

        (   
            posts.length === 0 ? 
            (<div>
                <p>No Post Found</p>
            </div>) : 
            (posts.map( (post) => (
                <div key={post.id} className={` ${blackMode?"bg-[#acb3c0] text-black":"bg-[#161D29] text-[#6E727F]"} `}>
                    <p className={`font-bold text-2xl ${blackMode?"text-richblack-800":"text-richblack-50"}  `} >{post.title}</p>
                    <p className='text-sm mt-[4px]'>
                        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category} </span>
                    </p>
                    <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                    <p className='text-md mt-[14px]'>{post.content}</p>
                    <div className='flex gap-x-3'>
                        {post.tags.map( (tag, index) => {
                            return <span key={index} className={` ${blackMode?"text-caribbeangreen-800":"text-caribbeangreen-300"}  underline font-bold text-xs mt-[5px]`}>{` #${tag}`}</span>
                        } )}
                    </div>
                </div>
            ) ))
        ) 
    }
      
    </div>
    </div>
  )
}

export default Blogs
