import React, {useContext} from 'react';

import Socials from './Socials'

import RoughLogo from '../img/file.png'
import MobileNav from './MobileNav'
import {Link} from 'react-router-dom'

// import { CursorContext } from '../context/CursorContext';

const Header = ({headerVisible}) => {

  // const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)

// bg-[#120604] bg-opacity-50
  return <header className={`fixed w-full 
  px-[30px] lg:px-[100px] 
  z-30 h-[100px] lg:h-[120px] 
  flex items-center text-white bg-white bg-opacity-20 text-inherit shadow-lg text-opacity-80 ${headerVisible ? 'top-0 transition-top duration-400 ease-out' : '-top-80 transition-top duration-400 ease-out'}`}>
    <div 
    className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      <Link  
        // onMouseEnter = {mouseEnterHandler}
        // onMouseLeave = {mouseLeaveHandler}
        to={'/'} className = 'max-w-[50px] lg:max-w-[75px]'>
         <img 
         className = 'rounded-full'
         src={RoughLogo} alt=''/>
      </Link>
      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <Link to={'/'} className=' hover:text-primary transition'>
          Home
        </Link>
        <Link to={'/about'} className=' hover:text-primary transition'>
          About
        </Link>
        <Link to={'/portfolio'} className=' hover:text-primary transition'>
          Portfolio
        </Link>
        <Link to = {'/services'} className =' hover:text-primary transition'>
            Services
          </Link>
        <Link to={'/contact'} className=' hover:text-primary transition'>
          Contact
        </Link>
      </nav>   

    </div> 
      <Socials/>
      <MobileNav/>
    </header>
};

export default Header;
