import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../store/store';
import { getRecipeById, selectIsLoading, selectSelectedRecipe } from '../store/recipesSlice';
import { useSelector } from 'react-redux';
import { useCustomNavigate } from '../hooks/useCustomNavigate';
import LinkOrButton from './LinkOrButton';
import { IIngredient } from '../store/types';


const SingleRecipe = () => {
  const { recipeId } = useParams();
  const dispatch = useAppDispatch();
  const recipe = useSelector(selectSelectedRecipe);
  const { back } = useCustomNavigate();

  useEffect(() => {
    dispatch(getRecipeById(recipeId));
  }, [recipeId, dispatch]);

const loading = useSelector(selectIsLoading)

  // console.log(recipe);
  console.log('isLoading: ', loading);
  


  
  const { mealImg, meal, category, video = '/', area, ingredients = [] } = recipe ?? {};
  const slicedEngredients: IIngredient[] = ingredients?.slice(0, 8);
    
  return (
    <div className='mx-2 my-1 flex flex-col md:grid md:grid-cols-columns'>
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
        <h4>Ingredients&nbsp;
          <span>{`(${slicedEngredients.length}):`}</span>
         </h4>
        <ul className='grid grid-cols-13 w-full'>{slicedEngredients.map(({ ingredient, measure }) => (
          <li>
            <div className='border-[1px] border-violet rounded bg-grayRgba max-w-[176px]'>
            <img className='object-cover w-full h-full block' src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt={ingredient}></img>
            <div className='flex items-center justify-center flex-wrap text-center capitalize font-bold text-white bg-violet p-2'>
              <p>{measure}&nbsp;{ingredient}</p>
            </div>
            </div>
          </li>
        ))}</ul>
     </div>
     <div></div>
     <div></div>
    </div>
  )
}

export default SingleRecipe;
