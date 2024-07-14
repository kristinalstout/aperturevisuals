import React, {useContext, useEffect, useState, useRef} from 'react';


import {Link} from 'react-router-dom'
// import {motion} from 'framer-motion'
// import {transition1} from '../transitions'
// import Mike1 from '../img/about/mike1.jpg'
import Mike from '../img/about/mike.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

// import { CursorContext } from '../context/CursorContext';

// Render all pictures in portfolio, then include link to pictures that are tagged with types in Services. When a picture in a tag or on the portfolio page is clicked, render page with just picture



const About = ({setHeaderVisible, headerVisible}) => {
  // const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)

  const lastScroll = useRef(0)
  const scrollUpThreshold = 50
  const scrollUpDistance = useRef(0)

  useEffect(() => {
    
    const portfolioDiv = document.getElementById('portfolio');
    if (portfolioDiv) { // Check if the element exists
      const handleScroll = () => {
        const currentScroll = portfolioDiv.scrollTop;
        const maxScroll = portfolioDiv.scrollHeight - portfolioDiv.clientHeight;
  
        if (currentScroll <= maxScroll) {
          if (currentScroll <= 0) {
            setHeaderVisible(true);
            scrollUpDistance.current = 0; // Reset scroll up distance
          } else if (currentScroll > lastScroll.current) {
            setHeaderVisible(false);
            scrollUpDistance.current = 0; // Reset scroll up distance
          } else if (currentScroll < lastScroll.current) {
            scrollUpDistance.current += lastScroll.current - currentScroll;
            if (scrollUpDistance.current >= scrollUpThreshold) {
              setHeaderVisible(true);
            }
          }
        }
        lastScroll.current = currentScroll;
      };
  
      portfolioDiv.addEventListener('scroll', handleScroll);
      return () => {
        portfolioDiv.removeEventListener('scroll', handleScroll);
      };
    }
  });
  return (
    <section 
    id = 'portfolio'
    className = 'section overflow-y-scroll'>
      <div className = 'container mx-auto relative'>
        {/* add breakpoint for md screen */}
        <div className = 'flex flex-col lg:flex-row justify-center gap-x-24 text-center lg:text-left lg:pt-32 '>
          <div className = 'flex-1 lg:max-h-max order-2 mt-10 pb-24 lg:order-none overflow-hidden'>
            <LazyLoadImage       
            className = ' shadow-lg shadow-black lg:rounded-lg'
            src = {Mike} 
            alt = ''
            effect = 'blur'
            />
          </div>
          <div className = {`flex-1 lg:pt-0 lg:w-auto flex flex-col justify-center items-center ${headerVisible ? 'pt-32 transition-top duration-700 ease-out' : 'pt-24 transition-top duration-700 ease-out'}`}>
            <h1 className = 'h1'>Hi, I'm Mike</h1>
            <p className = ' mb-12 mt-2 mx-4 lg:mx-0 lg:mt-0 max-w-sm items-center'>
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
            <Link to = {'/portfolio'} className = 'btn lg:rounded-lg'> 
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
