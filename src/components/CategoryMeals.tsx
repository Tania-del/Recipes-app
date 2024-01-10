import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Title from './Title';
import Header from './Header';
import { useSelector } from 'react-redux';
import { getCategoryMeals, selectCategoryMeals, selectSelectedCategory } from '../store/categoriesSlice';
import { useAppDispatch } from '../store/store';
import Category from './Category';
import SingleMeal from './SingleMeal';

const CategoryMeals = () => {
    const { categoryId } = useParams();
    const dispatch = useAppDispatch()
    const category = useSelector(selectSelectedCategory);
    const meals = useSelector(selectCategoryMeals)

    console.log("🚀 ~ CategoryMeals ~ meals:", meals)

    useEffect(() => {
       dispatch(getCategoryMeals(category))
   }, [category, dispatch])
    
    return (
        <>
    <Header />
      <section>
                <Title categoryId={categoryId} />
                <ul className="grid gap-2 grid-cols-auto pb-8 overflow-x-hidden lg:overflow-x-visible">
                    {meals?.map(({ id, meal, img }) => (
                     <li key={id} className=" rounded cursor-pointer ">
                            <SingleMeal meal={meal} id={id} img={img} />
            </li>
                    ))}
        </ul>
    </section>
        </>
  )
}

export default CategoryMeals;
