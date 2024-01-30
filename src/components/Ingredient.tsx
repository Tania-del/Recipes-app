import React, { FC } from 'react'
import { IIngredient } from '../store/types'


const Ingredient: FC<IIngredient> = ({ ingredient, measure }) => {
    
  return (
     <li>
                <div className='border-[1px] border-violet rounded bg-grayRgba max-w-[176px]'>
                  <img className='object-cover w-full h-full block' src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`} alt={ingredient}></img>
                  <div className='flex items-center justify-center flex-wrap text-center capitalize font-bold text-white bg-violet p-2'>
                    <p>{measure}&nbsp;{ingredient}</p>
                  </div>
                </div>
              </li>
  )
}

export default Ingredient
