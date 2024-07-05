import React, {useContext, useEffect, useState, useRef} from 'react';
import { urlFor } from '../imageUrl';
import {Link, useParams, useNavigate} from 'react-router-dom'
import { fetchData} from '../fetchData'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
//import { CursorContext } from '../context/CursorContext';
import { usePictures } from '../context/PictureContext'




function SinglePicturePage() {
    //const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
    const {id} = useParams()
    const pictures = usePictures()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const [singlePicture, setSinglePicture] = useState(null);
    const currentId = parseInt(id)

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
        const nextId = currentId + 1;
        navigate(`/portfolio/${nextId}`)
        const foundPicture = pictures.find((pic) => pic.id === nextId);
}

const goToPreviousPicture = () => {
  const nextId = currentId - 1;
  navigate(`/portfolio/${nextId}`)
  const foundPicture = pictures.find((pic) => pic.id === nextId);
}


    //  const collectionQuery = `*[_type == "picture" && collection->name == ${pictures.collection._ref}] | order(_createdAt asc)`
    //     // Check if the nextId exists in pictureList
    //     if (pictureId.includes(nextId)) {
    //       navigate(`/portfolio/${nextId}`);
    //     } else {
    //       console.log(`Picture with id ${nextId} does not exist`);
    //     }
    //   };
      // const goToPreviousPicture = () => {


      //   const previousId = currentId - 1;
    
      //   // Check if the nextId exists in pictureList
      //   if (pictureId.includes(previousId)) {
      //     navigate(`/portfolio/${previousId}`);
      //   } else {
      //     console.log(`Picture with id ${previousId} does not exist`);
      //   }
      // };

      // if (!pictures) {
      //   return console.log('loading');
      // }


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
      <h1 className = 'h1'>{singlePicture.collection?.name}</h1>
      <div className = 'flex gap-x-2'>
      <button 
      onClick = {()=>goToPreviousPicture()}
      className = 'btn mb-[30px] mx-auto lg:mx-0'> 
        Previous Picture
      </button>
      <br/>
      <Link to = {'/portfolio'} className = 'btn mb-[30px] mx-auto lg:mx-0'> 
        Back to portfolio
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