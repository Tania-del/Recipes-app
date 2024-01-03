import React from 'react'
import { ICategory } from '../store/types'
import { Link } from 'react-router-dom'

export const Category = ({ id, category, img }: ICategory) => {    
  return (
      <Link to="" >
      <img src={img} alt="" />
      </Link>
  )
}

export default Category
