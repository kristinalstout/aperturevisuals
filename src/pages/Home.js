import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import { urlFor } from '../imageUrl';
import {
  ImFacebook,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im'

import { fetchData} from '../fetchData'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
//import { CursorContext } from '../context/CursorContext';

const Home = () => {
  //const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const [home, setHome] = useState([]);

  const query = `*[_type == "home"]{picture,title,byline}[0]`

  useEffect(() => {
    fetchData(query).then((data) => {
      if (data && data.picture){
        data.pictureUrl = urlFor(data.picture).url()}
        setHome(data)
      })
  });
// ln 29 : url(${home.pictureUrl})
// ln 42 :             {home.title}
// ln 47 : {home.byline}
  return (
    <section
      className="section overflow-auto w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${home.pictureUrl})` }}
    >
      <div className="container mx-auto lg:ml-8 px-8 w-1/2 lg:w-full md:w-3/4 left-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          // onMouseEnter = {mouseEnterHandler}
          // onMouseLeave = {mouseLeaveHandler}
          className="w-full pt-36 pb-14 lg:max-w-auto text-center lg:items-start z-10 left-0 flex items-center flex-col justify-center"
        >
          <h1 className="h1 text-white text-opacity-80 lg:text-opacity-70 flex text-center lg:text-left mb-4 tracking-normal">
            {home.title}
          </h1>
          <p className="text-white text-opacity-70 lg:text-opacity-80 text-center lg:text-left mb-4 lg:mb-12 font-primary text-[26px] lg:text-[36px]">
            {home.byline}
          </p>
          <Link to="/Contact" className="btn lg:rounded-lg bg-[#120604] bg-opacity-80 text-white text-opacity-90 mb-[30px] text-center">
            schedule services
          </Link>
          <div 
        // onMouseEnter = {mouseEnterHandler}
        // onMouseLeave = {mouseLeaveHandler}
        className = 'text-white items-center text-xl lg:hidden'>
    <ul className = 'flex gap-x-4'>
      <li>
        <a href = 'https://www.facebook.com/profile.php?id=61559648666254'
        target = '_blank'
        rel='noreferrer'>
          <ImFacebook/>
        </a>
      </li>

      <li>
        <a href = 'https://www.instagram.com/aperturevis/'
        target = '_blank'
        rel='noreferrer'>
          <ImInstagram/>
        </a>
      </li>      
      {/* <li>
        <a href = 'http://www.twitter.com'
        target = '_blank'
        rel='noreferrer'>
          <ImPinterest/>
        </a>
      </li> */}
    </ul>
  </div>
        </motion.div>
      </div>
    </section>
      )
};

export default Home;
