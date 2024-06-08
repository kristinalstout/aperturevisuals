import React, {useContext} from 'react';
import WomanImg from '../img/about/woman.png'
import Still from '../img/about/still.jpg'
import KrisCherryBlossom from '../img/portfolio/portrait/krischerryblossom.jpg'
import Shirt from '../img/portfolio/event/shirt.jpg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'

import { CursorContext } from '../context/CursorContext';



const Services = () => {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  return (
  <motion.section 
  initial = {{opacity:0, y:'100%'}} 
  animate = {{opacity:1, y:0}}
  exit = {{opacity:0, y:'100%'}}
  transition = {transition1}
  className='section overflow-auto'>
    <div   
    onMouseEnter = {mouseEnterHandler}
    onMouseLeave = {mouseLeaveHandler}  
    className = 'container mx-auto h-full relative '>
      <div className = 'flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className = 'flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src = {KrisCherryBlossom} alt = ''/>
        </div>
        <motion.div 
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1,y:0}}
        exit = {{opacity:0,y:'-80%'}}
        transition = {transition1}
        className = 'flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className = 'h1'>Portraits</h1>
          <p className = 'mb-12 max-w-sm'>
            Words words words
            <br/>
            <br/>
            words words words
          </p>
          <Link to = {'/portraits'} className = 'btn'> 
            View my work
          </Link>
        </motion.div>
      </div>
      <div className = 'flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>

        <motion.div 
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1,y:0}}
        exit = {{opacity:0,y:'-80%'}}
        transition = {transition1}
        className = 'flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className = 'h1'>Events</h1>
          <p className = 'mb-12 max-w-sm'>
            Words words words
            <br/>
            <br/>
            words words words
          </p>
          <Link to = {'/events'} className = 'btn'> 
            View my work
          </Link>
        </motion.div>        
        <div className = 'flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src = {Shirt} alt = ''/>
        </div>
      </div>
      
    </div>
    
  </motion.section>
  )
};

export default Services;
