import React, {useContext} from 'react';
import Colors from '../img/home/colors.jpg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'


import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)

  return (
  <motion.section 
   initial = {{opacity:0, y:'-50%'}} 
   animate = {{opacity:1, y:0}}
   exit = {{opacity:0, y:'-50%'}}
   transition = {transition1}
   className='section overflow-auto'>
    <div className = 'container mx-auto h-full relative '>
      <div className = 'flex flex-col justify-center'>
        <motion.div 
        initial = {{opacity:0, y:'-50%'}} 
        animate = {{opacity:1,y:0}}
        exit = {{opacity:0,y:'-50%'}}
        transition = {transition1}
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        className = 'w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className = 'h1 text-white text-opacity-60'>
            Aperture Visuals
          </h1>
          <p className = 'text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 text-slate-200 text-opacity-80'>
            one of a kind storytelling
          </p>
          <Link to ={'/Contact'} className = 'btn mb-[30px]'>schedule services</Link>
        </motion.div>
        <div className = 'flex justify-end max-h-96 lg:max-h-max'>
          <motion.div 
          initial = {{scale:0}} 
          animate = {{scale:1}}
          exit = {{scale:0}}
          transition = {transition1}
          className = 'relative lg::-right-40 overflow-auto '>
            <img src = {Colors} alt =''/>
          </motion.div>
        </div>

      </div>
    </div>
    </motion.section>
  )
};

export default Home;
