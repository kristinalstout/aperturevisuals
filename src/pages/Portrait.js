import React, {useContext} from 'react';

import Nancy from '../img/portfolio/portrait/nancy.jpg'
import Sax from '../img/portfolio/portrait/sax.jpg'
import CoupleCherry from '../img/portfolio/portrait/krischerryblossom.jpg'
import NationalHarbor from '../img/portfolio/portrait/krischess.jpg'

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'

import { CursorContext } from '../context/CursorContext';

// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const Portrait = () => {

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
          <h1 className = 'h1'>Portraits</h1>
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
        // grid-cols-2 lg:gap-2 col-auto
        className = 'grid grid-cols-2 lg:gap-2'>

          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Sax} alt = ''/>
          </div>         

          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {CoupleCherry} alt = ''/>
          </div>

          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Nancy} alt = ''/>
          </div>

          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {NationalHarbor} alt = ''/>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
};

export default Portrait;