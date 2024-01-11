import React from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  const { recipeId } = useParams();

  console.log(recipeId);
  
  return (
    <div>
      recipe page
    </div>
  )
}

export default Recipe
