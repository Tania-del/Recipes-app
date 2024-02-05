import React from 'react'
import { useSelector } from 'react-redux'
import { selectFavoritesRecipes } from '../store/recipesSlice'

const Filter = () => {
  const favorites = useSelector(selectFavoritesRecipes);
  console.log(favorites);
  
  
  return (
    <>
    
    </>
  )
}

export default Filter;
