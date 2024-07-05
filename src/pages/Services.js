import React, { useEffect, useState, useContext, useRef } from 'react';
import {fetchData} from '../fetchData';
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import ServiceCard from './ServiceCard'

//import { CursorContext } from '../context/CursorContext';
import {Link, useParams, useNavigate} from 'react-router-dom'

const Services = ({setHeaderVisible, headerVisible}) => {
  //const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
const [pictures, setPictures] = useState([]);

const navigate = useNavigate()
const [loading, setLoading] = useState(true);
const [collections, setCollections] = useState(null);

const lastScroll = useRef(0)
const scrollUpThreshold = 50
const scrollUpDistance = useRef(0)

const query = `*[_type == "service"]{
  picture,type,description,collection->{name}
}`

useEffect(() => {
  fetchData(query).then((data) => setPictures(data));

});

useEffect(() => {
  
  const portfolioDiv = document.getElementById('portfolio');
  if (portfolioDiv) { // Check if the element exists
    const handleScroll = () => {
      const currentScroll = portfolioDiv.scrollTop;
      const maxScroll = portfolioDiv.scrollHeight - portfolioDiv.clientHeight;

      if (currentScroll <= maxScroll) {
        if (currentScroll <= 0) {
          setHeaderVisible(true);
          scrollUpDistance.current = 0; // Reset scroll up distance
        } else if (currentScroll > lastScroll.current) {
          setHeaderVisible(false);
          scrollUpDistance.current = 0; // Reset scroll up distance
        } else if (currentScroll < lastScroll.current) {
          scrollUpDistance.current += lastScroll.current - currentScroll;
          if (scrollUpDistance.current >= scrollUpThreshold) {
            setHeaderVisible(true);
          }
        }
      }
      lastScroll.current = currentScroll;
    };

    portfolioDiv.addEventListener('scroll', handleScroll);
    return () => {
      portfolioDiv.removeEventListener('scroll', handleScroll);
    };
  }
});


  return (
  <motion.section
  id = 'portfolio'
  initial = {{opacity:0, y:'100%'}} 
  animate = {{opacity:1, y:0}}
  exit = {{opacity:0, y:'100%'}}
  transition = {transition1}
  className='section overflow-auto'>
    <div

    // onMouseEnter = {mouseEnterHandler}
    // onMouseLeave = {mouseLeaveHandler}  
    className = {` container mx-auto h-full relative ${headerVisible ? 'pt-40' : 'pt-0'} `}>  
  
    {pictures.map((item)=>{
            return( 
              <div key={`item-${item.type}`}>
                <ServiceCard item = {item}/>
              </div>
            )
          })}
     </div>
  </motion.section>
  )
};

export default Services;
