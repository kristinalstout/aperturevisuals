import React, {useContext} from 'react';
import {
  ImFacebook,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im'

// import { CursorContext } from '../context/CursorContext';

const Socials = () => {

  // const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)

  return (
    <div 
        // onMouseEnter = {mouseEnterHandler}
        // onMouseLeave = {mouseLeaveHandler}
        className = 'hidden xl:flex ml-24'>
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
  )
}

export default Socials;
