import React from 'react'
import { Back } from '../icons'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

  const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    };

  return (
      <button className='flex items-center gap-2 border-2 border-violet rounded px-3 py-2  mx-4 mt-4 bg-transparent cursor-pointer fill-violet text-violet hover:fill-white hover:text-white hover:bg-violet hover:scale-105 duration-500'
      onClick={handleBack}
      >
          <Back />
          <p className='uppercase text-base'>Go back</p>
   </button>
  )
}

export default BackButton
