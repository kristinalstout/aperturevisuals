import React, {useContext} from 'react';

import Sax from '../img/portfolio/portrait/sax.jpg'
import CoupleCherry from '../img/portfolio/portrait/sax.jpg'
import NationalHarbor from '../img/portfolio/kristina/ferriscool.jpg'
import Orange from '../img/portfolio/street/orange.jpg'
import Boat from '../img/portfolio/calvert/boat.jpg'
import Conversation from '../img/portfolio/event/conversation.jpg'
import Couple from '../img/portfolio/misc/couple.jpg'
import Dc from '../img/portfolio/misc/dc.jpg'

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'

import { CursorContext } from '../context/CursorContext';

// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const Portfolio = () => {

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
          <h1 className = 'h1'>Portfolio</h1>
          <p className = 'mb-12 max-w-sm'>
            Click on a photo to view the collection
            <br/>
            <br/>
            
          </p>
          <Link to = {'/contact'} className = 'btn mb-[30px] mx-auto lg:mx-0'> 
            Schedule a shoot
          </Link>
        </motion.div>
        <div     
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        // grid-cols-2 lg:gap-2 col-auto
        className = 'grid grid-cols-2 lg:gap-2'>
          <Link to='/portraits'>
          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Sax} alt = ''/>
          </div>         
          </Link> 
          <Link to='/events'>
          <div className = 'max-w-[250px] lg:max-w-[220px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover w-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Conversation} alt = ''/>
          </div>
          </Link>


          <Link to='/calvert'>
          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Boat} alt = ''/>
          </div>
          </Link>
          <Link to='/street-photography'>
          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full w-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Dc} alt = ''/>
          </div>
          </Link>
         


        </div>
      </div>
    </div>
  </section>
  )
};

export default Portfolio;
