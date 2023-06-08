import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


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
            (posts.map( (post,index) => <BlogDetails post={post} key={index} />))
        ) 
    }
      
    </div>
    </div>
  )
}

export default Blogs
