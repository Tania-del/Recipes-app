import React from 'react'
import { useParams } from 'react-router-dom';
import Title from './Title';
import Header from './Header';
import { useSelector } from 'react-redux';
import { selectCategories, selectSelectedCategory } from '../store/categoriesSlice';

const CategoryMeals = () => {
    const { categoryId } = useParams();
    const category = useSelector(selectSelectedCategory);

console.log(category);
   
    
    return (
        <>
    <Header />
      <section>
                <Title categoryId={categoryId} />
                <ul className="grid gap-2 grid-cols-auto pb-8 overflow-x-hidden lg:overflow-x-visible">
                    
        </ul>
    </section>
        </>
  )
}

export default CategoryMeals;
