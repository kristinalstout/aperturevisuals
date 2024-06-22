import React, {useContext, useEffect, useState, useRef} from 'react';
import Colors from '../img/home/colors.jpg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import { urlFor } from '../imageUrl';

import { fetchData} from '../fetchData'
import HomePicture from './HomePicture'
import { CursorContext } from '../context/CursorContext';

const Home = () => {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const [home, setHome] = useState([]);

  const query = `*[_type == "home"]{picture,title,byline}[0]`

  useEffect(() => {
    fetchData(query).then((data) => {
      if (data && data.picture){
        data.pictureUrl = urlFor(data.picture).url()}
        setHome(data)
      })
  }, []);
// ln 29 : url(${home.pictureUrl})
// ln 42 :             {home.title}
// ln 47 : {home.byline}
  return (
    <section
      className="section overflow-auto w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${Colors})` }}
    >
      <div className="container mx-auto lg:ml-8 px-8 w-1/2 lg:w-full md:w-3/4 left-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={transition1}
          onMouseEnter = {mouseEnterHandler}
          onMouseLeave = {mouseLeaveHandler}
          className="w-full pt-36 pb-14 lg:max-w-auto text-center lg:items-start z-10 left-0 flex items-center flex-col justify-center"
        >
          <h1 className="h1 text-white text-opacity-80 lg:text-opacity-70 flex text-center lg:text-left mb-4 tracking-normal">
            Aperture Visuals
          </h1>
          <p className="text-white text-opacity-70 lg:text-opacity-80 text-center lg:text-left mb-4 lg:mb-12 font-primary text-[26px] lg:text-[36px]">
            one of a kind storytelling
          </p>
          <Link to="/Contact" className="btn bg-[#120604] bg-opacity-80 text-white text-opacity-90 mb-[30px] text-center">
            schedule services
          </Link>
        </motion.div>
      </div>
    </section>
      )
};

export default Home;
