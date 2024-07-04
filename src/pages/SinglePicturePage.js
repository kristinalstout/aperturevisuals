import React, {useContext, useEffect, useState, useRef} from 'react';
import { urlFor } from '../imageUrl';
import {Link,useLocation, useParams, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';
import { usePictures } from '../context/PictureContext'

function SinglePicturePage({setHeaderVisible, headerVisible}) {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const {id} = useParams()
  const pictures = usePictures()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [singlePicture, setSinglePicture] = useState(null);
  const currentId = parseInt(id)
  let {state} = useLocation()
  let {src} = state
  // const source = location.state.src


  // console.log(src)
  const lastScroll = useRef(0)
  const scrollUpThreshold = 50
  const scrollUpDistance = useRef(0)

  useEffect(() => {

    const portfolioDiv = document.getElementById('portfolio');
    if (portfolioDiv) { // Check if the element exists
    const handleScroll = () => {
      const currentScroll = portfolioDiv.scrollTop
      const maxScroll = portfolioDiv.scrollHeight - portfolioDiv.clientHeight;

      if (currentScroll <= maxScroll) {
        if (currentScroll <= 0) {
          setHeaderVisible(true)
          scrollUpDistance.current = 0 //reset scroll up distance
        }else if(currentScroll >lastScroll.current){
          setHeaderVisible(false)
          scrollUpDistance.current = 0 //reset scroll up distance
        }else if (currentScroll < lastScroll.current){
          scrollUpDistance.current += lastScroll.current - currentScroll
          if (scrollUpDistance.current >= scrollUpThreshold) {
          setHeaderVisible(true)
          }
        }
      }
      lastScroll.current = currentScroll
    }

    portfolioDiv.addEventListener('scroll', handleScroll)
    return () => {
      portfolioDiv.removeEventListener('scroll', handleScroll)
    }
  }
  })

  useEffect(() => {
    if (pictures.length > 0) {
      const foundPicture = pictures.find((pic) => pic.id === currentId);
      setSinglePicture(foundPicture);
      setLoading(false);
    }
  }, [pictures, id]);

  if (loading) {
      return console.log('Loading...')
  }
  // console.log(source)
  const goToNextPicture = () => {
    if (!singlePicture) return;
    let filteredPictures
    if (src === 'portfolio'){
      filteredPictures = pictures
    } else {
    const currentCollectionName = singlePicture.collection?.name;
    filteredPictures = pictures.filter((pic) => pic.collection?.name === currentCollectionName);}
    // console.log(filteredPictures)
    const currentIndex = filteredPictures.findIndex((pic) => pic.id === currentId);

    if (currentIndex !== -1 && currentIndex < filteredPictures.length - 1) {
      const nextPicture = filteredPictures[currentIndex + 1];
      const newUrl = src === 'portfolio' ? `/portfolio/${nextPicture.id}`:`/${nextPicture.collection?.name}/${nextPicture.id}`
      navigate(newUrl, { state: { src } });
    }
  }

  const goToPreviousPicture = () => {
    if (!singlePicture) return;
    let filteredPictures
    if (src === 'portfolio'){
      filteredPictures = pictures
    } else {
    const currentCollectionName = singlePicture.collection?.name;
    filteredPictures = pictures.filter((pic) => pic.collection?.name === currentCollectionName);}
    // console.log(filteredPictures)
    const currentIndex = filteredPictures.findIndex((pic) => pic.id === currentId);

    if (currentIndex > 0) {
      const nextPicture = filteredPictures[currentIndex - 1];
      const newUrl = src === 'portfolio' ? `/portfolio/${nextPicture.id}`:`/${nextPicture.collection?.name}/${nextPicture.id}`
      navigate(newUrl, { state: { src } });
    }
  }

  return (
    <section 
        id = 'portfolio'
        initial = {{opacity:0, y:'100%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'100%'}}
        transition = {transition1}
    className='section overflow-x-hidden overflow-y-scroll'>
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
    {/* // className = 'flex flex-col lg:items-start' */}
      <h1 className = 'h1 text-center mb-4'>{singlePicture.collection?.name}</h1>
      <div className = 'flex gap-x-2 '>
      <button 
      onClick = {()=>goToPreviousPicture()}
      className = 'btn mb-[30px] mx-auto lg:mx-0 '> 
        Previous Picture
      </button>
      <br/>
      <Link to = {`/${singlePicture.collection?.name}`} className = 'btn mb-[30px] mx-auto justify-center lg:mx-0'> 
        Back to Service
      </Link>
      <br/>
      <button 
      onClick = {()=>goToNextPicture()}
      className = 'btn mb-[30px] mx-auto lg:mx-0 '> 
        Next Picture
      </button>
      </div>
    </motion.div>
    <div>
      <img className = {`lg:rounded-lg pb-12 ${headerVisible ? 'lg:pt-24' : 'lg:pt-0'}`}
      src = {urlFor(singlePicture.picture).url()}
      alt = {singlePicture.name}/>
    </div>
  </div>
</div>
      </section>
  );
}

export default SinglePicturePage;
