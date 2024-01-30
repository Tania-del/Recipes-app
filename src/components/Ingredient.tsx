import React, { FC } from 'react'
import { IIngredient } from '../store/types'


const Ingredient: FC<IIngredient> = ({ ingredient, measure }) => {
    
  return (
   <li className="opacity-1 transform-none">
  <figure className="border-[1px] border-violet rounded bg-grayRgba max-w-[176px] mx-0 my-auto flex flex-col items-center h-full">
    <img className="object-cover w-full h-full block" src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt={ingredient}/>
    <figcaption className="flex flex-nowrap items-center justify-center bg-violet text-white px-[0.3em] py-[0.25em] min-h-[44.88px] overflow-hidden w-full text-center font-bold capitalize tracking-tighttest text-925">
      {measure} &nbsp; {ingredient}
    </figcaption>
  </figure>
</li>
  )
}

export default Ingredient

// flex flex-nowrap items-center justify-center text-925 text-center capitalize font-bold tracking-tighttest text-white bg-violet px-[0.3em] py-[0.35em] min-h-[36px] h-auto'