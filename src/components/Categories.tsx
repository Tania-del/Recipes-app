import React, { useEffect } from 'react'
import Title from './Title'
import { getCategories } from '../store/categoriesSlice'
import { useAppDispatch } from '../store/store'


const Categories = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

  return (
      <section>
          <Title title='Choose your favourite' category='category!' />
          <div>
              <article></article>
          </div>
      </section>
  )
}

export default Categories;
