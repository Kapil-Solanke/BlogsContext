import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

   const {page, handlePageChange, totalPages,blackMode} = useContext(AppContext); 

  return (
    <div className={`w-full flex justify-center items-center border-t-2 border-[#6E72] fixed bottom-0 ${blackMode?"bg-[#acb3c0] text-black":"bg-[#161D29] text-[#6E727F]"} `}>
      <div className='flex justify-between items-center w-11/12 max-w-[670px] py-2'>
      <div className='flex gap-x-2'> 
        
        { page > 1 &&
            (<button 
            className='rounded-md  px-4 py-1 shadow-[inset_-2px_-2px_0px_#FFFFFF82] '
            onClick={() => handlePageChange(page-1)}>
                Previous
            </button>)
        }

        { page < totalPages && 
                (<button 
                className='rounded-md  shadow-[inset_-2px_-2px_0px_#FFFFFF82] px-4 py-1'
                onClick={() =>handlePageChange(page+1) }>
                Next
            </button>)
        }

      </div>
       

        <p className='font-bold text-sm'>
            Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
