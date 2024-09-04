import React from 'react';
import { useState } from 'react';
import { close , logo , menu } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
  const [ toggle , setToggle] = useState(false);
  return (
    
      <nav className='w-full flex py-6 justify-between items-center navbar '>
        <img src={logo} alt='hoobank' className='w-[124] h-[32px]'></img>
        <ul className='list-none sm:flex hidden justify-end items-center mr-0'>
           {navLinks.map((nav, index) => (
           <li
            key={nav.id} 
            className={`font-poppins font-normal cursor-pointer 
                        text-[16px] text-white
                         ${index === navLinks.lenght-1 ? 'mr-0' : 'mr-10'} `} 
           >
            <a href={`#${nav.id}`} >   {nav.title}   </a>
             
            </li>
        ))}
         </ul>
         <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={  toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain white" 
          onClick={() => setToggle((prev) => !prev)}>

          </img>

          <div 
          className={` ${ toggle ? 'flex' : 'hidden'} p-6 top-20 right-0 mx-4 bg-black-gradient 
                            my-2 min-w-[140px] rounded-xl sidebar`}>

         
             <ul className='list-none flex-col justify-end items-center mr-0'>
                {navLinks.map((nav, index) => (
                <li
                key={nav.id} 
                className={`font-poppins font-medium cursor-pointer 
                        text-[16px] 
                         ${index === navLinks.lenght-1 ? 'mr-0' : 'mb-4'} `} 
              >
             <a href={`#${nav.id}`} >   {nav.title}   </a>
             
            </li>
        ))}
         </ul>
         </div>
         </div>

      </nav>
    
  )
}

export default Navbar
