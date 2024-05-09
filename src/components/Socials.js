import React from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
} from 'react-icons/im'

const Socials = () => {
  return <div className = 'hidden xl:flex ml-24'>
    <ul className = 'flex gap-x-4'>
      <li>
        <a href = 'http://www.facebook.com'
        target = '_blank'>
          <ImFacebook/>
        </a>
      </li>
      <li>
        <a href = 'http://www.twitter.com'
        target = '_blank'>
          <ImTwitter/>
        </a>
      </li>
      <li>
        <a href = 'https://www.instagram.com/aperturevis/'
        target = '_blank'>
          <ImInstagram/>
        </a>
      </li>
    </ul>
  </div>
};

export default Socials;
