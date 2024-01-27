import React from 'react'
import { Link } from 'react-router-dom'
import { ISingleMeal } from '../store/types'
import { useSelector } from 'react-redux'
import { selectLoading } from '../store/categoriesSlice'
import { Skeleton } from '@mui/material'
import { motion } from 'framer-motion'

const SingleMeal = ({ meal, id, img }: ISingleMeal) => {
    const loading = useSelector(selectLoading);

    return (
        <motion.div className='bg-pink p-3 transition ease-out transform hover:scale-103 hover:shadow-4xl duration-200 rounded'
         
            initial={{ y: 1, opacity: 0 }}
            animate={{ y: 100, x: 40, opacity: 1 }}
            
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
        >
            <div className='rounded-t  bg-opacity-15 mb-[-5px] transform scale-99 translate-z-0 rounded-tl-4 rounded-tr-4'>
                {loading ? <Skeleton variant='rectangular'  width='full' height={200}/> :
                    <Link to={`/recipes/${id}`} >
                        {loading  ?   <Skeleton variant='rectangular'  width='full' height={200}/> :  <img src={img} alt="" className='w-full h-full block border-x border-t-[1px] rounded' /> }
                       
                    </Link>}
      </div>

            <h4 className='text-base capitalize font-bold flex text-center items-center leading-tight justify-center text-white bg-violet rounded-b p-0.3em min-h-14'>{meal}</h4>
            
      </motion.div>
  )
}

export default SingleMeal;
