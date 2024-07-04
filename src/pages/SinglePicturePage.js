import React, {useContext, useEffect, useState} from 'react';
import { urlFor } from '../imageUrl';
import {Link,useLocation, useParams, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';
import { usePictures } from '../context/PictureContext'

function SinglePicturePage() {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const {id} = useParams()
  const pictures = usePictures()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [singlePicture, setSinglePicture] = useState(null);
  const currentId = parseInt(id)
  const location = useLocation()
  const [source, setSource] = useState(location.state?.source || 'portfolio');

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

  const goToNextPicture = () => {
    if (!singlePicture) return;
    
    const currentCollectionName = singlePicture.collection?.name;
    const filteredPictures = pictures.filter((pic) => pic.collection?.name === currentCollectionName);
    const currentIndex = filteredPictures.findIndex((pic) => pic.id === currentId);

    if (currentIndex !== -1 && currentIndex < filteredPictures.length - 1) {
      const nextPicture = filteredPictures[currentIndex + 1];
      navigate(`/portfolio/${nextPicture.id}`, { state: { source } });
    }
  }

  const goToPreviousPicture = () => {
    if (!singlePicture) return;

    const currentCollectionName = singlePicture.collection?.name;
    const filteredPictures = pictures.filter((pic) => pic.collection?.name === currentCollectionName);
    const currentIndex = filteredPictures.findIndex((pic) => pic.id === currentId);

    if (currentIndex > 0) {
        const previousPicture = filteredPictures[currentIndex - 1];
        navigate(`/portfolio/${previousPicture.id}`, { state: { source } });
    }
  }

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
      <h1 className = 'h1'>{singlePicture.collection?.name}</h1>
      <div className = 'flex gap-x-2'>
      <button 
      onClick = {()=>goToPreviousPicture()}
      className = 'btn mb-[30px] mx-auto lg:mx-0'> 
        Previous Picture
      </button>
      <br/>
      <Link to = {`/${singlePicture.collection?.name}`} className = 'btn mb-[30px] mx-auto justify-center lg:mx-0'> 
        Back to Service
      </Link>
      <br/>
      <button 
      onClick = {()=>goToNextPicture()}
      className = 'btn mb-[30px] mx-auto lg:mx-0'> 
        Next Picture
      </button>
      </div>
    </motion.div>
    <div>
      <img className = 'lg:rounded-lg'
      src = {urlFor(singlePicture.picture).url()}
      alt = {singlePicture.name}/>
    </div>
  </div>
  </div>
      </section>
  );
}

export default SinglePicturePage;
