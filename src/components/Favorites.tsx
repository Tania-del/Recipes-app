import React from 'react'
import Title from './Title';
import Header from './Header';
import { useSelector } from 'react-redux';
import { removeFromFavorites, selectFavoritesRecipes, selectIsLoadingRecipes } from '../store/recipesSlice';
import { motion } from 'framer-motion'
import SingleMeal from './SingleMeal';
import Underline from './Underline';
import LinkOrButton from './LinkOrButton';
import { Garbage } from '../icons';
import BackButton from './BackButton';
import { useAppDispatch } from '../store/store';
import { useSearchParams } from 'react-router-dom';


export const Favorites = () => {
  const favorites = useSelector(selectFavoritesRecipes);
  const dispatch = useAppDispatch();
  const loading = useSelector(selectIsLoadingRecipes);
  const [searchParams, setSearchParams] = useSearchParams();
  const favoriteCategory = searchParams.get('category');
  const filteredFavorites = favoriteCategory ? favorites.filter((item) => favoriteCategory === item.category.toLowerCase()) : favorites;
  

  return (
    <>
    <Header />
    <main className='max-w-[1140px] pb-4 mr-auto ml-auto' >
      <section>
          <Title favorites={favorites} />
          {favorites.length > 0 &&
            <div className='flex items-center justify-start flex-wrap bg-lightViolet text-clearWhite text-925 tracking-tight gap-2  border-y-4 border-double border-gray px-4 py-1.5' >
              <p className=''>Filter by category:</p>
              <ul className='flex gap-2 items-center flex-wrap'>
                {favoriteCategory && <li onClick={() => {
                  const params = ('')
                  setSearchParams(params, { 'replace': true })
                }
                } className='text-black bg-secondary tracking-05 rounded-2xl  border border-violet px-3 py-1  hover:border-darkGreen hover:bg-green hover:text-black transition-all duration-300 cursor-pointer'>All</li>}
                {favorites?.map((item, index) => <li key={index} onClick={() => {
                  const params = ({ 'category': item.category.toLowerCase() })
                  setSearchParams(params, { 'replace': true })
                }
                }
                  className={`text-black tracking-05 rounded-2xl border px-3 py-1 transition-all duration-300 cursor-pointer ${favoriteCategory && item.category.toLowerCase() === favoriteCategory.toLowerCase()
                      ? 'border-violet text-clearWhite bg-violet'
                      : ' bg-secondary  hover:border-darkGreen hover:bg-green hover:text-black '
                    }`}>{item.category}</li>)}
              </ul>
            </div>}

          { filteredFavorites.length > 0 ? (
            <ul className='grid w-full grid-cols-favoriteCol gap-2'>
              {( filteredFavorites).map(({id, meal, mealImg}) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <div className='p-3 bg-pink'>
                    <SingleMeal meal={meal} id={id} img={mealImg} className='bg-none' />
                    <Underline className="w-full h-[1px]  my-2 bg-lightGray" />
                    <LinkOrButton type='button' className='bg-red border-2 border-red rounded flex items-center justify-center gap-1 text-clearWhite cursor-pointer p-1  w-full hover:shadow-favorite hover:scale-103 transition-all duration-200' onClick={() => dispatch(removeFromFavorites(id))} >
                      <p className='tracking-tight'>Remove</p>
                      <Garbage />
                    </LinkOrButton>
                  </div>
                </motion.li>
              ))}
            </ul>
          ) : 
            (<p className='px-3 pt-8'>You haven't added any favorite recipes yet...</p>)
        } 
        </section>
        {!loading && <BackButton />} 
    </main>
    </>
  )
}

export default Favorites;
