import React from 'react'
import Title from './Title';
import Header from './Header';
import { useSelector } from 'react-redux';
import { removeFromFavorites, selectFavoritesRecipes } from '../store/recipesSlice';
import Filter from './Filter';
import { motion } from 'framer-motion'
import SingleMeal from './SingleMeal';
import Underline from './Underline';
import LinkOrButton from './LinkOrButton';
import { Garbage } from '../icons';
import BackButton from './BackButton';
import { useAppDispatch } from '../store/store';

export const Favorites = () => {
  const favorites = useSelector(selectFavoritesRecipes);
    const dispatch = useAppDispatch();

  

  return (
    <>
    <Header />
    <main className='max-w-[1140px] pb-4 mr-auto ml-auto'>
      <section>
          <Title favorites={favorites} />
          <Filter />
          {favorites.length > 0 ? (
            <ul className='grid w-full grid-cols-favoriteCol gap-2'>
              {favorites?.map(({ id, meal, mealImg,  }) => (
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
                  {/* <SingleMeal meal={meal} id={id} img={mealImg} /> */}
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
            (<p>You haven't added any favorite recipes yet...</p>)
        } 
        </section>
        <BackButton />
    </main>
    </>
  )
}

export default Favorites;
