import React from 'react'
import { ICategory } from '../store/types'
import { Link } from 'react-router-dom'

export const Category = ({ id, category, img }: ICategory) => {    
  return (
    <>
      <div className='border rounded-t border-violet bg-violet bg-opacity-15  '>
      <Link to="" className='transform scale-99 translate-z-0 rounded-tl-4 rounded-tr-4'>
        <img src={img} alt="" className='h-[100%] w-[100%] block' />
    </Link>
      </div>
        <h4 className='text-lg font-bold text-white p-1 bg-violet rounded-b text-center'>{category}</h4>
    </>
  )
}

export default Category;
