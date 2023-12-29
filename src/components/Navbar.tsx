import React from 'react'
import { About, Heart, Home } from '../icons'


export const Navbar = () => {
  const navItems = [
    {id: 1, text: 'Home', icon: <Home />},
    {id: 2, text: 'Favorites', icon: <Heart />},
    {id: 3, text: 'About Us', icon: <About />},
  ]

  return (
    <>
      <nav className='absolute top-[calc(100%+20px)] right-0 bg-violet flex-col'>
        <ul>
          {navItems.map((item) => (
            <>
              <li key={item.id} className='p-2 cursor-pointer duration-500 flex items-center gap-2 text-2xl text-white hover:text-green hover:bg-dark'>
                      {React.cloneElement(item.icon, { fill: 'currentColor', className: 'hover:fill-current' })}
                <span className='text-nowrap'>
                 {item.text}
                </span>
               </li>
            </>
          ))}
        </ul>
    </nav>
    </>
  )
}

export default Navbar;
