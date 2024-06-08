import React, {useContext} from 'react';


import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import Orange from '../img/portfolio/street/orange.jpg'
import Steps from '../img/portfolio/street/steps.jpg' 
import Bmore from '../img/portfolio/street/bmore.jpg'
import Dark from '../img/portfolio/street/dark.jpg'
import Great from '../img/portfolio/kristina/great.jpg'
import Couple from '../img/portfolio/misc/couple.jpg'
import Dc from '../img/portfolio/misc/dc.jpg'

import { CursorContext } from '../context/CursorContext';

// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const DC = () => {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)

  return (
  <section 
  initial = {{opacity:0, y:'100%'}} 
  animate = {{opacity:1, y:0}}
  exit = {{opacity:0, y:'100%'}}
  transition = {transition1}
  className='section overflow-auto'>
    <div className = 'container mx-auto h-full relative'>
      <div className = 'flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8' >
        <motion.div 
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'-80%'}}
        transition = {transition1}
        className = 'flex flex-col lg:items-start'>
          <h1 className = 'h1'>Street <br></br>Photography</h1>
          <div className = 'flex gap-x-2'>
          <Link to = {'/contact'} className = 'btn-[#696c6d] btn mb-[30px] mx-auto lg:mx-0'> 
            Schedule a shoot
          </Link>
          <br/>
          <Link to = {'/portfolio'} className = 'btn mb-[30px] mx-auto lg:mx-0'> 
            Back to portfolio
          </Link>
          </div>
        </motion.div>
        <div     
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        className = 'grid grid-cols-2 lg:gap-2'>         
         <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Orange} alt = ''/>
          </div>          
          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full w-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Couple} alt = ''/>
          </div>
          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Steps} alt = ''/>
          </div>          

          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Bmore} alt = ''/>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
};

export default DC;
