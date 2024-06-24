import React, {useContext, useEffect, useState, useRef} from 'react';
import { urlFor } from '../imageUrl';
import {Link, useParams, useNavigate} from 'react-router-dom'
import { fetchData} from '../fetchData'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import { CursorContext } from '../context/CursorContext';



function SinglePicturePage({pictureId}) {
    const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
    const {id} = useParams()
    const [pictures, setPictures] = useState(null);

    const navigate = useNavigate()

    const query = `*[_type == "picture" && id == ${id}]`

    useEffect(() => {
      fetchData(query).then((data) => setPictures(data[0]));
    }, []);

    const goToNextPicture = () => {
        const currentId = parseInt(id);
        const nextId = currentId + 1;
    
        // Check if the nextId exists in pictureList
        if (pictureId.includes(nextId)) {
          navigate(`/portfolio/${nextId}`);
        } else {
          console.log(`Picture with id ${nextId} does not exist`);
        }
      };
      const goToPreviousPicture = () => {
        const currentId = parseInt(id);
        const previousId = currentId - 1;
    
        // Check if the nextId exists in pictureList
        if (pictureId.includes(previousId)) {
          navigate(`/portfolio/${previousId}`);
        } else {
          console.log(`Picture with id ${previousId} does not exist`);
        }
      };

      if (!pictures) {
        return console.log('loading');
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
            <h1 className = 'h1'>{pictures.name}</h1>
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
            src = {urlFor(pictures.picture).url()}
            alt = {pictures.name}/>
          </div>
      </div>
      </div>
      <div>
      </div>
      </section>

  );
}

export default SinglePicturePage;
