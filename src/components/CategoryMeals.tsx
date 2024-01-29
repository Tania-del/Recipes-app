import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Title from './Title';
import Header from './Header';
import { useSelector } from 'react-redux';
import { getCategoryMeals, selectCategoryMeals, selectErrorCategories, selectIsLoadingCategories, selectSelectedCategory } from '../store/categoriesSlice';
import { useAppDispatch } from '../store/store';
import SingleMeal from './SingleMeal';
import BackButton from './BackButton';
import {Skeleton} from '@mui/material'
import {  motion } from 'framer-motion';

const CategoryMeals = () => {
    const { categoryId } = useParams();
    const dispatch = useAppDispatch()
    const category = useSelector(selectSelectedCategory);
    const meals = useSelector(selectCategoryMeals);
    const loading = useSelector(selectIsLoadingCategories);
    const error = useSelector(selectErrorCategories);

    useEffect(() => {
        dispatch(getCategoryMeals(category))
    }, [category, dispatch]);
    
    
    console.log(meals);
    
    return (
        <>
            <Header />
            <main className='max-w-[1140px] mt-0  mb-0 mr-auto ml-auto'>
      <section className=' pb-4'>
                    <Title categoryId={categoryId} />
                    {meals.length > 0 &&
                        <ul className="grid gap-2 grid-cols-auto pb-4 overflow-x-hidden lg:overflow-x-visible">
                            {meals?.map(({ id, meal, img }, index) => (
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
                        </ul>
                        }
                    {error && <p className='m-3'>Cannot display recipes...</p>}
            </section>
            {!loading && 
                <BackButton />}
            </main>
        </>
  )
}

export default CategoryMeals;
