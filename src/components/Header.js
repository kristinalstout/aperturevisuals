import React, {useContext} from 'react';

import Socials from './Socials'
import Logo from '../img/header/logo.svg'
import RoughLogo from '../img/header/roughlogo.jpg'
import MobileNav from './MobileNav'
import {Link} from 'react-router-dom'

import { CursorContext } from '../context/CursorContext';

const Header = () => {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)

  return <header className='fixed w-full 
  px-[30px] lg:px-[100px] 
  z-30 h-[100px] lg:h-[140px] 
  flex items-center'>
    <div 
    className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      <Link  
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        to={'/'} className = 'max-w-[75px]'>
         <img src={RoughLogo} alt=''/>
      </Link>
      <nav className='hidden xl:flex gap-x-12 font-semibold'>
        <Link 
         onMouseEnter = {mouseEnterHandler}
         onMouseLeave = {mouseLeaveHandler}
         to={'/'} className=' hover:text-primary transition'>
          Home
        </Link>
        <Link 
         onMouseEnter = {mouseEnterHandler}
         onMouseLeave = {mouseLeaveHandler}
         to={'/about'} className=' hover:text-primary transition'>
          About
        </Link>
        <Link 
         onMouseEnter = {mouseEnterHandler}
         onMouseLeave = {mouseLeaveHandler}
         to={'/portfolio'} className=' hover:text-primary transition'>
          Portfolio
        </Link>
        <Link
          onMouseEnter = {mouseEnterHandler}
          onMouseLeave = {mouseLeaveHandler}
          to = {'/services'} className =' hover:text-primary transition'>
            Services
          </Link>
        <Link 
         onMouseEnter = {mouseEnterHandler}
         onMouseLeave = {mouseLeaveHandler}
         to={'/contact'} className=' hover:text-primary transition'>
          Contact
        </Link>
      </nav>   
      <Socials/>
      <MobileNav />
    </div> 
 
    </header>
};

export default Header;
