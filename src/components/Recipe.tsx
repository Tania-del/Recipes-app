import React, { ReactElement, ReactNode, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch } from '../store/store';
import { getRecipeById, selectErrorRecipes, selectIsLoadingRecipes, selectSelectedRecipe } from '../store/recipesSlice';
import { useSelector } from 'react-redux';
import { useCustomNavigate } from '../hooks/useCustomNavigate';
import LinkOrButton from './LinkOrButton';
import { IIngredient } from '../store/types';
import Header from './Header';
import Ingredient from './Ingredient';
import Underline from './Underline';
import { replaceYoutubeLink } from '../utils/replaceYouTubeLink';
import { View } from '../icons';
import BackButton from './BackButton';

type NavigationButtons = {
  title: string;
  link: string;
  icon: ReactNode;
 }

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
  
  const { mealImg, meal, category, video = '/', area, ingredients = [], article = '' } = recipe ?? {};
  const slicedEngredients: IIngredient[] = ingredients?.slice(0, 8);
  const youTubeLink = replaceYoutubeLink(video)
  const buttonsArr: NavigationButtons[] = [{ title: 'Video',  link: video, icon: <View /> }, { title: 'Article', link: article, icon: <View />}]

  return (
    <>
      <Header />
      <main className='pb-4'>
      {recipe &&
        <article className='mx-2 my-1 flex flex-col md:grid md:grid-cols-columns gap-4 md:grid-rows-rows '>
          <div className='grid-rows-1 '> 
            <img src={mealImg} alt={meal} title={meal} className='w-full h-full block object-cover border border-solid border-1 border-violet rounded shadow-recipe'/>
          </div>
          
          <div className='border border-solid border-1 border-violet rounded bg-clearWhite shadow-2xl p-3 gridArea'>
            <div className='flex justify-between mt-1'>
              <h2 className='text-2xl font-bold'>{meal}</h2>
              <LinkOrButton type='button' className='bg-violet text-green hover:text-white px-2.5 py-1 rounded text-sm tracking-wide max-h-7 transition-all duration-500 ease-out'
              onClick={() => navigate(`/category/${category}`)} 
              >{category}</LinkOrButton>
            </div>
            <p className='my-1 text-sm'>{area}</p>
        <Underline className='w-full h-[1px] mx-1 my-2 bg-lightGray'/>
            <h4 className='bg-violet text-white text-center py-1 mb-2 font-roboto tracking-wide'>Ingredients&nbsp;
              <span className='text-green'>{`(${slicedEngredients.length})`}</span>
              :
            </h4>
            
            <ul className='grid grid-cols-ingrCol w-full m-0 p-0 gap-1.5 '>{slicedEngredients.map(({ ingredient, measure }) => (
              <Ingredient ingredient={ingredient} measure={measure} />
            ))}</ul>
              <Underline className='w-full h-[1px] mx-1 my-2 bg-lightGray' />
              <LinkOrButton type='button'>Show instructions</LinkOrButton>

              <Underline className='w-full h-[1px] mx-1 my-2 bg-lightGray' />
            </div>
            

            {youTubeLink && <div>
              <iframe
                src={youTubeLink}
                frameBorder="0"
                title={`${meal} youtube video`}
                allow='encrypted-media'
                allowFullScreen
                className='w-full h-full border border-1 border-solid border-violet shadow-recipe'
              ></iframe>
            </div>}

            
            <div className='flex flex-row gap-2'>
              {buttonsArr.map(({ link, title, icon }) => 
                <LinkOrButton type='link' to={link} className='bg-violet text-green hover:text-white px-2.5 py-2 rounded text-sm tracking-wide max-h-7 transition-all duration-500 ease-out flex items-center ' >
                  {title}
                  &nbsp;
                  {icon}
                </LinkOrButton>
              )}
            </div>
          </ article>
      }
      {error && <p className='m-3'>No recipe to display!</p>}
      <BackButton />
      </main>
    </>
  )
}


export default SingleRecipe;
