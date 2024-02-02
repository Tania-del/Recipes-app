import React from 'react'
import Title from './Title';
import Header from './Header';
import { useSelector } from 'react-redux';
import { selectFavoritesRecipes } from '../store/recipesSlice';
import Filter from './Filter';
import { motion } from 'framer-motion'
import SingleMeal from './SingleMeal';
import Underline from './Underline';

export const Favorites = () => {
  const favorites = useSelector(selectFavoritesRecipes);
  console.log(favorites);
  
  return (
    <>
    <Header />
    <main className='max-w-[1140px] pb-4 mr-auto ml-auto'>
      <section>
          <Title favorites={favorites} />
          <Filter />
          {favorites.length > 0 ? (
            <ul className='grid gap-2 grid-cols-favoriteCol '>
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
                  <SingleMeal meal={meal} id={id} img={mealImg} />
                  <Underline className="w-full h-[1px] mx-1 my-2 bg-lightGray" />
                </motion.li>
              ))}
            </ul>
          ) : 
            (<p>You haven't added any favorite recipes yet...</p>)
        } 
      </section>
    </main>
    </>
  )
}

export default Favorites;
