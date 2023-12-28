import React from 'react'
import Search from './Search'
import { Navbar } from './Navbar'

const Header = () => {
  return (
    <div className='bg-violet flex justify-between p-3'>
      <Search />
      <Navbar />
    </div>
  )
}

export default Header
