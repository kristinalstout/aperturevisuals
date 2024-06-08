import React, {useContext} from 'react';
import {
  ImFacebook,
  ImPinterest,
  ImInstagram,
} from 'react-icons/im'

import { CursorContext } from '../context/CursorContext';

const Socials = () => {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)

  return (
    <div 
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        className = 'hidden xl:flex ml-24'>
    <ul className = 'flex gap-x-4'>
      <li>
        <a href = 'http://www.facebook.com'
        target = '_blank'>
          <ImFacebook/>
        </a>
      </li>

      <li>
        <a href = 'https://www.instagram.com/aperturevis/'
        target = '_blank'>
          <ImInstagram/>
        </a>
      </li>      
      <li>
        <a href = 'http://www.twitter.com'
        target = '_blank'>
          <ImPinterest/>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default Socials;
