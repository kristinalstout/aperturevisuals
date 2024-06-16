
import React, { useEffect, useState, useContext } from 'react';

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import Picture from './Picture'

import { CursorContext } from '../context/CursorContext';
import { fetchData} from '../fetchData'

// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const Events = () => {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const [pictures, setPictures] = useState([]);

  const query = `*[_type == "picture" && collection._ref == '88e7e31e-ec4c-4099-bca7-294d199888a6']`

  useEffect(() => {
    fetchData(query).then((data) => setPictures(data));
    
  }, []);

  // useEffect(() => {
  //   const fetchMainPicture = async () => {
  //     const query = `*[_type == "picture" && collection == 'events']`;

  //     try {
  //       const data = await client.fetch(query);
  //       setMainPicture(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchMainPicture();
  // }, []);

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
          <h1 className = 'h1'>Events</h1>
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
        {/* <div     
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        // grid-cols-2 lg:gap-2 col-auto
        className = 'grid grid-cols-2 lg:gap-2'>
          {mainPicture.map((item)=>{
           return( 
            <Link to ={`/${item.type}`}>
           <div key={`item-${item.type}`}>
            <img
          src={urlFor(item.picture).width(200).url()}
          alt={item.type}
          className="card__image"
        />
          </div></Link>)
  })} */}
     
          {/* <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Conversation} alt = ''/>
          </div>         

          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Run} alt = ''/>
          </div>

          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Stretch} alt = ''/>
          </div>

          <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
            <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Shirt} alt = ''/>
          </div> */}

        {/* </div> */}
      </div>
    </div>
  </section>
  )
};

export default Events;