import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Title from './Title';
import Header from './Header';
import { useSelector } from 'react-redux';
import { getCategoryMeals, selectCategoryMeals, selectSelectedCategory } from '../store/categoriesSlice';
import { useAppDispatch } from '../store/store';
import SingleMeal from './SingleMeal';
import BackButton from './BackButton';

const CategoryMeals = () => {
    const { categoryId } = useParams();
    const dispatch = useAppDispatch()
    const category = useSelector(selectSelectedCategory);
    const meals = useSelector(selectCategoryMeals)

    useEffect(() => {
       dispatch(getCategoryMeals(category))
   }, [category, dispatch])
    
    return (
        <>
    <Header />
      <section className='max-w-[1140px] mt-0 mr-auto mb-0 ml-auto pb-4'>
                <Title categoryId={categoryId} />
                <ul className="grid gap-2 grid-cols-auto pb-4 overflow-x-hidden lg:overflow-x-visible">
                    {meals?.map(({ id, meal, img }) => (
                     <li key={id} className=" rounded cursor-pointer ">
                            <SingleMeal meal={meal} id={id} img={img} />
            </li>
                    ))}
                </ul>
                <BackButton />
    </section>
        </>
  )
}

export default CategoryMeals;
