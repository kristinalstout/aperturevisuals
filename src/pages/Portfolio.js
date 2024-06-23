import React, {useContext, useEffect, useState, useRef} from 'react';

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';
import Picture from './Picture'
import { urlFor } from '../imageUrl';


import { fetchData} from '../fetchData'

// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const Portfolio = ({setHeaderVisible, headerVisible}) => {
    
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const [pictures, setPictures] = useState([]);
  const lastScroll = useRef(0)
  
  const query = `*[_type == "picture"]`

  useEffect(() => {
    fetchData(query).then((data) => setPictures(data));
  }, []);
  


  useEffect(() => {

    const portfolioDiv = document.getElementById('portfolio');

    const handleScroll = () => {
      const currentScroll = portfolioDiv.scrollTop
    
      if (currentScroll <= 0) {
        setHeaderVisible(true)
      }
      if (currentScroll >lastScroll.current){
        setHeaderVisible(false)
      }else if (currentScroll < lastScroll.current){
        setHeaderVisible(true)
      }

      lastScroll.current = currentScroll
    }

    portfolioDiv.addEventListener('scroll', handleScroll)
    return () => {
      portfolioDiv.removeEventListener('scroll', handleScroll)
    }
  },[])

  // add tags to backend, many to many relationship. Should portfolio show all related pictures when clicked, or just skip straight to the individual picture
  return (
    <section className ='section overflow-auto'>
      <div className = {`flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left ${headerVisible ? 'pt-36' : 'pt-0'} pb-0 lg:pb-36`} >
        <motion.div 
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'-80%'}}
        transition = {transition1}
        className = 'lg:w-1/3  sticky p-4 '>
          <h1 className = 'h1 text-center mb-4'>Portfolio</h1>
          <p className = 'mb-12  text-center'>
            Click on a photo to view the collection
          </p>
          <Link to = {'/contact'} className = 'btn mb-[30px] mx-auto lg:mx-0'> 
            Schedule a shoot
          </Link>
        </motion.div>
        <div 
        // ref = {scrollRef}
        id = 'portfolio'
        className = 'lg:w-2/3 h-screen overflow-y-scroll p-8 pt-0 lg:pt-40'>
          {/*         <div className = 'w-2/3 h-screen  p-4 grid grid-cols-2 lg:gap-2 mt-10 '>
          <div className = 'items-center'> */}
          <div className = 'flex flex-wrap -mx-2'>
            <div className = 'w-1/2 '>
              {pictures
              .filter((_,index)=>index %2 === 0)
              .map((item)=>{
                return( 
                  <div key={`item-${item.id}`} className='p-2'>
                      <Picture item = {item}/>
                    </div>
                )
              })}
            </div>
            <div className = 'w-1/2 '>
              {pictures
                .filter((_,index)=>index %2 !== 0)
                .map((item)=>{
                  return( 
                    <div key={`item-${item.id}`} className='p-2'>
                      <Picture item = {item}/>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Portfolio;
