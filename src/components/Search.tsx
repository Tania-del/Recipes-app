import React from 'react'
import { SearchSvgrepoCom } from '../icons';

export const Search = () => {
  return (
    <>
    <form action='search' className='relative bg-white rounded'>
      <input name='query' placeholder='Search recipes...' className='bg-white py-2 px-3 rounded pr-10 focus:outline-none focus:border-green focus:ring focus:ring-green w-[164px] focus:w-[215px] transition-width duration-500 ease-out font-roboto text-base'/>
      <button className='absolute top-2 right-3 outline-none'>{<SearchSvgrepoCom />}</button>
   
   </form>
      <button>grgtr</button>
    </>
  )
}

export default Search;
