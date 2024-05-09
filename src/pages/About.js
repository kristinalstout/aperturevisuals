import React from 'react';
import WomanImg from '../img/about/woman.png'
import {Link} from 'react-router-dom'

const About = () => {
  return <section className='section '>
    <div className = 'container mx-auto h-full relative'>
      <div className = 'flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className = 'flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src = {WomanImg} alt = ''/>
        </div>
        <div className = 'flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className = 'h1'>About me</h1>
          <p className = 'mb-12 max-w-sm'>
            Words words words
            <br/>
            <br/>
            words words words
          </p>
          <Link to = {'/portfolio'} className = 'btn'> 
            View my work
          </Link>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
