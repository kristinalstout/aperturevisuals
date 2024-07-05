import React, {useContext, useEffect, useState, useRef} from 'react';
//import { CursorContext } from '../context/CursorContext';
import {Link, useParams, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import {fetchData} from '../fetchData'

import Picture from './Picture'
import { usePictures } from '../context/PictureContext'



// Add <Link to = '/ferriswheel'/> etc. to the portfolio pictures, opens to new page for portfolio

const Portrait = ({setHeaderVisible, headerVisible}) => {

  //const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const pictures = usePictures()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState(null);

  // const query = `*[_type == "picture" && collection._ref == '6e378c25-8ce0-422c-bf95-8e7ba3736193']`

  // useEffect(() => {
  //   loadPictures(query)
  // },[loadPictures,query]);


  const lastScroll = useRef(0)
  const scrollUpThreshold = 50
  const scrollUpDistance = useRef(0)

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

  useEffect(() => {
    if (pictures.length > 0) {
      const collectionPics = pictures.filter((pic)=>pic.collection?.name ==='portraits')
      setCollections(collectionPics)
      setLoading(false);
    }
}, [pictures]);

if (loading) {
    return console.log('Loading...')
}

  return (
    <section className ='section overflow-auto'>
      <div className = {`flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left ${headerVisible ? 'pt-24' : 'pt-0'} pb-0 lg:pb-36`} >
        <motion.div 
        // onMouseEnter = {mouseEnterHandler}
        // onMouseLeave = {mouseLeaveHandler}
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'-80%'}}
        transition = {transition1}
        className = 'lg:w-1/3  sticky p-4 '>
          <h1 className = 'h1 text-center mb-4'>Portraits</h1>
          <Link to = {'/contact'} className = 'btn mb-[10px] mx-auto lg:mx-0'> 
            Schedule a shoot
          </Link>
        </motion.div>
        <div 
        // ref = {scrollRef}
        id = 'portfolio'
        className = 'lg:w-2/3 h-screen overflow-y-scroll p-8 pt-0 lg:pt-48'>
          {/*         <div className = 'w-2/3 h-screen  p-4 grid grid-cols-2 lg:gap-2 mt-10 '>
          <div className = 'items-center'> */}
          <div className = 'flex flex-wrap -mx-2'>
            <div className = 'w-1/2 '>
              {collections
              .sort((a,b)=>a.id - b.id)
              .filter((_,index)=>index %2 === 0)
              .map((item)=>{
                return( 
                  <div key={`item-${item.id}`} className='p-2'>
                      <Picture item = {item} source='portraits'/>
                    </div>
                )
              })}
            </div>
            <div className = 'w-1/2 '>
              {collections
                .filter((_,index)=>index %2 !== 0)
                .map((item)=>{
                  return( 
                    <div key={`item-${item.id}`} className='p-2'>
                      <Picture item = {item} source='portraits'/>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Portrait;