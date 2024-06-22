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
  // add tags to backend, many to many relationship. Should portfolio show all related pictures when clicked, or just skip straight to the individual picture
  return (
  <section 
  initial = {{opacity:0, y:'100%'}} 
  animate = {{opacity:1, y:0}}
  exit = {{opacity:0, y:'100%'}}
  transition = {transition1}
  className='section overflow-auto bg-backimg'>
    <div className = 'container mx-auto h-full relative'>
      <div className = ' flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8' >
        <motion.div 
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'-80%'}}
        transition = {transition1}
        className = 'flex flex-col lg:items-start '>
          <h1 className = 'h1 text-center '>Portfolio</h1>
          <p className = 'mb-12 max-w-sm text-center'>
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
        <div className = 'grid grid-cols-2 lg:gap-2 '>
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

  const query = `*[_type == "picture"]`

  useEffect(() => {
    fetchData(query).then((data) => setPictures(data));
  }, []);
  // add tags to backend, many to many relationship. Should portfolio show all related pictures when clicked, or just skip straight to the individual picture
  return (
  <section 
  initial = {{opacity:0, y:'100%'}} 
  animate = {{opacity:1, y:0}}
  exit = {{opacity:0, y:'100%'}}
  transition = {transition1}
  className='section overflow-auto'>
    <div className = 'container mx-auto relative'>
      <div className = 'flex ' >
      {/* flex flex-col lg:flex-row items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8 */}
        <motion.div 
        // 
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'-80%'}}
        transition = {transition1}
        className = 'h-screen w-1/3 sticky mt-60 flex flex-col lg:items-start'>
          {/* w-1/3 h-screen sticky top-0 bg-gray-100 p-4 */}
          {/* flex flex-col lg:items-start */}
          <h1 className = 'h1 text-center '>Portfolio</h1>
          <p className = 'mb-12 max-w-sm text-center'>
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
 {/* w-2/3 h-screen overflow-y-auto p-4 */}
        <div className = 'w-2/3 h-screen  p-4 grid grid-cols-2 lg:gap-2 mt-10 '>
          <div className = 'items-center'>
          {pictures.map((item)=>{
            return( 
              <div key={`item-${item.id}`}>
                <Picture item = {item}/>
              </div>
            )
          })}</div>
        </div>
      </div>
    </div>
  </section>
  )
};

export default Portfolio;





<div className = 'grid grid-cols-2 lg:gap-2 bg-blue-200'>

{/* grid lg:gap-2 bg-green-200 rounded-lg */}
              {pictures.map((item)=>{
                return( 
                  <div key={`item-${item.id}`}
                  className='max-w-full'>
                    {/* relative max-w-full h-auto object-cover */}
                    <img className = 'rounded-lg'
                    // max-w-full h-auto object-cover
                    src={urlFor(item.picture).url()}
                    alt={item.name}
                  />
                  </div>
                )
              })}

          </div>