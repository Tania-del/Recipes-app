import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '../store/store';
import { getRecipeById, selectErrorRecipes, selectIsLoadingRecipes, selectSelectedRecipe } from '../store/recipesSlice';
import { useSelector } from 'react-redux';
import { useCustomNavigate } from '../hooks/useCustomNavigate';
import LinkOrButton from './LinkOrButton';
import { IIngredient } from '../store/types';
import Header from './Header';
import Ingredient from './Ingredient';


const SingleRecipe = () => {
  const { recipeId } = useParams();
  const dispatch = useAppDispatch();
  const recipe = useSelector(selectSelectedRecipe);
  const { back } = useCustomNavigate();
  const loading = useSelector(selectIsLoadingRecipes)
  const error = useSelector(selectErrorRecipes);
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if (recipeId) {
      dispatch(getRecipeById(recipeId));
    }
  }, [recipeId, dispatch]);
  
  const { mealImg, meal, category, video = '/', area, ingredients = [] } = recipe ?? {};
  const slicedEngredients: IIngredient[] = ingredients?.slice(0, 8);
    
  
  return (
    <>
      <Header />
      {recipe &&
        <div className='mx-2 my-1 flex flex-col md:grid md:grid-cols-columns gap-4 '>
          <div>
            <img src={mealImg} alt={meal} className='w-full h-full block object-cover border border-solid border-1 border-violet rounded shadow-recipe'/>
          </div>
          
          <div className='border border-solid border-1 border-violet rounded bg-clearWhite shadow-2xl p-3'>
            <div className='flex justify-between mt-1'>
              <h2 className='text-2xl font-bold'>{meal}</h2>
              <LinkOrButton type='button' className='bg-violet text-green hover:text-white px-2.5 py-1 rounded text-sm tracking-wide max-h-7 transition-all duration-500 ease-out'
              onClick={() => navigate(`/category/${category}`)} 
              >{category}</LinkOrButton>
            </div>
            <p className='my-1'>{area}</p>
            {/* <LinkOrButton type='link' to={video}>Video</LinkOrButton> */}
            <div className='w-full h-[1px] mx-1 my-2 bg-lightGray'></div>
            <h4>Ingredients&nbsp;
              <span>{`(${slicedEngredients.length}):`}</span>
            </h4>
            <ul className='grid grid-cols-13 w-full'>{slicedEngredients.map(({ ingredient, measure }) => (
              <Ingredient ingredient={ingredient} measure={measure} />
            ))}</ul>
          </div>
          <div></div>
          <div></div>
        </div >
      }
      {error && <p className='m-3'>No recipe to display!</p>}
    </>
  )
}


export default SingleRecipe;
