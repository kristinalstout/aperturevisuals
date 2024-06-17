import React, {useContext, useEffect, useState} from 'react';
import { CursorContext } from '../context/CursorContext';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import {fetchData} from '../fetchData'

import Picture from './Picture'



// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const Portrait = () => {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const [pictures, setPictures] = useState([]);

  const query = `*[_type == "picture" && collection._ref == '6e378c25-8ce0-422c-bf95-8e7ba3736193']`

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

export default Portrait;