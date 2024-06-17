import React, { useEffect, useState, useContext } from 'react';
import {fetchData} from '../fetchData';
import KrisCherryBlossom from '../img/portfolio/portrait/krischerryblossom.jpg'
import Shirt from '../img/portfolio/event/shirt.jpg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import ServiceCard from './ServiceCard'

import { CursorContext } from '../context/CursorContext';



const Services = () => {

const [pictures, setPictures] = useState([]);

const query = `*[_type == "service"]`

useEffect(() => {
  fetchData(query).then((data) => setPictures(data));

}, []);

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
    className = 'container mx-auto h-full relative '>  
  
    {pictures.map((item)=>{
            return( 
              <div key={`item-${item.id}`}>
                <ServiceCard item = {item}/>
              </div>
            )
          })}
     </div>
     {/*   <div className = 'flex-1 object-fill max-h-85 max-w-full order-2 lg:order-none overflow-hidden'>
          <img src = {KrisCherryBlossom} alt = ''/>
    
        </div>
        <motion.div 
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1,y:0}}
        exit = {{opacity:0,y:'-80%'}}
        transition = {transition1}
        className = 'flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className = 'h1'>Portraits</h1>
          <p className = 'mb-12 max-w-sm'>
            Single & Group
            <br/>
            <br/>

          </p>
          <Link to = {'/contact'} className = 'btn'> 
            View my work
          </Link>
        </motion.div>
      </div>
      <div className = 'flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'> */}

        {/* <motion.div 
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1,y:0}}
        exit = {{opacity:0,y:'-80%'}}
        transition = {transition1}
        className = 'flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className = 'h1'>Events</h1>
          <p className = 'mb-12 max-w-sm'>
            Corporate, Group, Organizations
            <br/>
            <br/>

          </p>
          <Link to = {'/contact'} className = 'btn'> 
            View my work
          </Link>
        </motion.div>        
     */}  

  </motion.section>
  )
};

export default Services;
