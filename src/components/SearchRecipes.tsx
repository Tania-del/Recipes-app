import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import { selectErrorRecipes, selectIsLoadingRecipes, selectSearchedRecipes } from '../store/recipesSlice'
import Title from './Title'
import { motion } from "framer-motion";
import { Skeleton } from '@mui/material'
import SingleMeal from './SingleMeal'
import BackButton from './BackButton'


export const SearchRecipes = () => {
    const searchedRecipes = useSelector(selectSearchedRecipes);
    const loading = useSelector(selectIsLoadingRecipes);
    const error = useSelector(selectErrorRecipes);

    console.log(searchedRecipes);
    
 return (
        <>
            <Header />
            <main className='max-w-[1140px] mt-0  mb-0 mr-auto ml-auto'>
      <section className=' pb-4'>
                <Title  />
                {searchedRecipes ?
                    <ul className="grid gap-2 grid-cols-auto pb-4 overflow-x-hidden lg:overflow-x-visible">
                        {searchedRecipes?.map(({ id, meal, img }, index) => (
                            <motion.li key={id} className=" rounded cursor-pointer"
                                initial={{ x: 100, y: 100, opacity: 0 }}
                                animate={{ x: 0, y: 0, opacity: 1 }}
                                exit={{ x: -100, y: -100, opacity: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {loading ? <Skeleton variant='rectangular' width='full' height={200} /> :
                                    <SingleMeal meal={meal} id={id} img={img} />}
                            </motion.li>
                        ))}
                    </ul> : <p className='m-3'>Cannot display recipes...</p>}
            </section>
            {!loading && 
                <BackButton />}
            </main>
        </>
  )
}

export default SearchRecipes
