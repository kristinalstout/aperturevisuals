import React, {useContext, useState, useEffect} from 'react';

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'

//import { CursorContext } from '../context/CursorContext';
import {fetchData} from '../fetchData';
import Picture from './Picture'

const Calvert = ({pictures}) => {

  //const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)


  // const query = `*[_type == "picture" && collection._ref == '6c250f50-2338-4175-bb5a-d56cdf5290f3']`

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
          <h1 className = 'h1'>Calvert <br/> County, <br/> MD</h1>
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

export default Calvert;