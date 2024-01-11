import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../store/store';
import { getRecipeById } from '../store/recipesSlice';

const SingleRecipe = () => {
  const { recipeId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipeById(recipeId))
  }, [recipeId, dispatch])
  
  
  return (
    <div>
      recipe page
    </div>
  )
}

export default SingleRecipe;
