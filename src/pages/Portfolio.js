import React, {useContext, useEffect, useState, useRef} from 'react';

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';
import Picture from './Picture'


import { fetchData} from '../fetchData'

// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const Portfolio = () => {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const [pictures, setPictures] = useState([]);

  const query = `*[_type == "collection"]`

  useEffect(() => {
    fetchData(query).then((data) => setPictures(data));
  }, []);

  


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
        {/* <div     
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler} */}
 {/* grid-cols-2 lg:gap-2 col-auto */}
        <div className = 'grid grid-cols-2 lg:gap-2'>
          {pictures.map((item)=>{
            return( 
              <div key={`item-${item.id}`}>
                <Picture item = {item}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </section>
  )
};

export default Portfolio;
