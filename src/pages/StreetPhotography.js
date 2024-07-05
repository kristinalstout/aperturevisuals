import React, {useContext, useEffect, useState} from 'react';
import {fetchData} from '../fetchData';
import Picture from './Picture'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
//import { CursorContext } from '../context/CursorContext';

// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const DC = ({pictures}) => {

  //const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)


  // const query = `*[_type == "picture" && collection._ref == '6f8e9bac-0ae2-4316-807d-340c532ad174']`

  // useEffect(() => {
  //   loadPictures(query)
  // },[loadPictures,query]);

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
        // onMouseEnter = {mouseEnterHandler}
        // onMouseLeave = {mouseLeaveHandler}
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
        <div className = 'grid grid-cols-2 lg:gap-2'>
          {pictures.map((item)=>{
            return( 
              <div key={`item-${item.name}`}>
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

export default DC;
