import React from 'react'
import { Link } from 'react-router-dom'
import { ISingleMeal } from '../store/types'

const SingleMeal = ({ meal, id, img }: ISingleMeal) => {
    return (
        <div className='bg-pink p-3 transition ease-out transform hover:scale-103 hover:shadow-4xl duration-200 rounded'>
      <div className='rounded-t  bg-opacity-15 mb-[-5px] transform scale-99 translate-z-0 rounded-tl-4 rounded-tr-4'>
          <Link to={`/recipes/${id}`} >
                <img src={img} alt="" className='w-full h-full block border-x border-t-[1px] rounded' />
          </Link>
      </div>
              <h4 className='text-base capitalize font-bold flex text-center items-center leading-tight justify-center text-white  bg-violet rounded-b p-2 min-h-14 tracking-wider'>{meal}</h4>
      </div>
  )
}

export default SingleMeal;
