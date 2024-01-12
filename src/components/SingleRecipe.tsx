import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../store/store';
import { getRecipeById, selectSelectedRecipe } from '../store/recipesSlice';
import { useSelector } from 'react-redux';
import { useCustomNavigate } from '../hooks/useCustomNavigate';
import LinkOrButton from './LinkOrButton';


const SingleRecipe = () => {
  const { recipeId } = useParams();
  const dispatch = useAppDispatch();
  const recipe = useSelector(selectSelectedRecipe) 
  const { back } = useCustomNavigate();

  useEffect(() => {
    dispatch(getRecipeById(recipeId))
  }, [recipeId, dispatch])


  const { mealImg, meal, category, video = '/', area,  } = recipe ?? {}
  console.log(recipe);
  
  return (
    <div className=''>
      <div>
        <img src={mealImg} alt={meal} />
      </div>
      <div>
        <div className='flex justify-between'>
          <h2>{meal}</h2>
          <LinkOrButton type='button' onClick={back}>{category}</LinkOrButton>
        </div>
        <p>{area}</p>
        {/* <LinkOrButton type='link' to={video}>Video</LinkOrButton> */}
        <div className='w-full h-[1px] mx-1 my-2 bg-lightGray'></div>
        <h4>Ingredients:</h4>
        
        <ul></ul>
     </div>
     <div></div>
     <div></div>
    </div>
  )
}

export default SingleRecipe;
