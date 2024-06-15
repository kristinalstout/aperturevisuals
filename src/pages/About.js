import React, {useContext} from 'react';

import Walking from '../img/home/walking.jpg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'

import { CursorContext } from '../context/CursorContext';



const About = () => {
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
    className = 'container mx-auto h-full relative'>
      <div className = 'flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className = 'flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src = {Walking} alt = ''/>
        </div>
        <motion.div 
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1,y:0}}
        exit = {{opacity:0,y:'-80%'}}
        transition = {transition1}
        className = 'flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className = 'h1'>Hi, I'm Mike</h1>
          <p className = 'mb-12 max-w-sm'>
            I'm a photographer based in Southern Maryland.
            <br/>
            <br/>
            I enjoy working with people who want to capture special moments and create memories for a lifetime.
            <br/>
            <br/>
            My services include solo or family portraits, professional headshots, event coverage, and brand photography. Take a look at my portfolio to see what I've been working on recently!
            <br/>
            <br/>
            Take care
          </p>
          <Link to = {'/portfolio'} className = 'btn'> 
            View my work
          </Link>
        </motion.div>
      </div>
      <br/>
      <br/>
    </div>
  </motion.section>
  )
};

export default About;
