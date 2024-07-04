import React from 'react';


import {Link} from 'react-router-dom'
// import {motion} from 'framer-motion'
// import {transition1} from '../transitions'
// import Mike1 from '../img/about/mike1.jpg'
import Mike from '../img/about/mike.jpg'

// import { CursorContext } from '../context/CursorContext';

// Render all pictures in portfolio, then include link to pictures that are tagged with types in Services. When a picture in a tag or on the portfolio page is clicked, render page with just picture



const About = () => {
  // const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  return (
    <section className = 'section overflow-y-scroll'>
      <div className = 'container mx-auto relative'>
        {/* add breakpoint for md screen */}
        <div className = 'flex flex-col lg:flex-row justify-center gap-x-24 text-center lg:text-left lg:pt-60 '>
          <div className = 'flex-1 max-h-96 lg:max-h-max order-2 mt-10  mb-10 pb-8 lg:order-none'>
            <img src = {Mike} alt = ''/>
          </div>
          <div className = 'flex-1 pt-40 lg:pt-0 lg:w-auto flex flex-col justify-center items-center'>
            <h1 className = 'h1'>Hi, I'm Mike</h1>
            <p className = ' mb-12 mt-2 lg:mt-0 max-w-sm items-center'>
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
          </div>
        </div>
      </div>
    </section>
  // <motion.section 
  // initial = {{opacity:0, y:'100%'}} 
  // animate = {{opacity:1, y:0}}
  // exit = {{opacity:0, y:'100%'}}
  // transition = {transition1}
  // className='section overflow-auto '>
  //   <div   
  //   onMouseEnter = {mouseEnterHandler}
  //   onMouseLeave = {mouseLeaveHandler}  
  //   className = 'container mx-auto h-full relative'>
  //     <div className = 'flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
  //       <div className = 'flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
  //         <img src = {Walking} alt = ''/>
  //       </div>
  //       <motion.div 
  //       initial = {{opacity:0, y:'-80%'}} 
  //       animate = {{opacity:1,y:0}}
  //       exit = {{opacity:0,y:'-80%'}}
  //       transition = {transition1}
  //       className = 'flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
  //         <h1 className = 'h1'>Hi, I'm Mike</h1>
  //         <p className = 'mb-12 max-w-sm'>
  //           I'm a photographer based in Southern Maryland.
  //           <br/>
  //           <br/>
  //           I enjoy working with people who want to capture special moments and create memories for a lifetime.
  //           <br/>
  //           <br/>
  //           My services include solo or family portraits, professional headshots, event coverage, and brand photography. Take a look at my portfolio to see what I've been working on recently!
  //           <br/>
  //           <br/>
  //           Take care
  //         </p>
  //         <Link to = {'/portfolio'} className = 'btn'> 
  //           View my work
  //         </Link>
  //       </motion.div>
  //     </div>
  //     <br/>
  //     <br/>
  //   </div>
  // </motion.section>
  )
};

export default About;
