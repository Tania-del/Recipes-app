import React from 'react'
import { SearchSvgrepoCom } from '../icons';

export const Search = () => {
  return (
    <form action='search' className='relative'>
      <input name='query' placeholder='Search recipes...' className='bg-white py-2 px-3 rounded-sm pr-10 focus:outline-none focus: border-green focus:ring focus-ring-blue' />
      <button className='absolute top-2 right-4 outline-none'>{<SearchSvgrepoCom />}</button>
   
   </form>
  )
}

export default Search;
