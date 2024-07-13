import React, {useContext, useRef, useEffect} from 'react';

import Transparent from '../img/contact/transparent.png'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import Socials from '../components/Socials'
//import { CursorContext } from '../context/CursorContext';
import emailjs from '@emailjs/browser'
import Mike1 from '../img/about/mike1.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Contact = ({setHeaderVisible, headerVisible}) => {

  //const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const form = useRef();

  const lastScroll = useRef(0)
  const scrollUpThreshold = 50
  const scrollUpDistance = useRef(0)



  useEffect(() => {

    const portfolioDiv = document.getElementById('portfolio');

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
  })

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID, 
          process.env.REACT_APP_TEMPLATE_ID, 
          form.current, 
          {publicKey: process.env.REACT_APP_PUBLIC_KEY,}
          )
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()
    };
  
  return (
  <motion.section 
  initial = {{opacity:0, y:'100%'}} 
  animate = {{opacity:1, y:0}}
  exit = {{opacity:0, y:'100%'}}
  transition = {transition1}
  id = 'portfolio'
  className='section bg-white h-screen overflow-y-scroll lg:overflow-hidden'>
    <div className = ''>
      <div className = {`flex flex-col lg:flex-row items-center justify-start ${headerVisible ? 'pt-24 transition-top duration-400 ease-out' : 'pt-0 transition-top duration-300 ease-out'} gap-x-8 lg:gap-x-24 lg:px-44 text-center lg:text-left`}>
        <motion.div
        initial = {{opacity:0, y:'100%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'100%'}}
        transition = {transition1}
        className = 'hidden lg:flex bg-[#eef7f9] absolute pt-36 shadow h-[42rem] left-0 right-0 -z-10'>
        </motion.div>
        <div className='lg:flex-1 pt-10 md:pt-2 lg:pt-2 px-4 lg:w-2/3'>
          <h1 className = 'h1'>Contact Me</h1>
          <p className = 'mb-12'>Schedule a consultation and estimate today!</p>
          <form ref = {form} onSubmit = {sendEmail} className = 'flex flex-col gap-y-4'>
            <div className = 'flex gap-x-5'>
              <input 
              name = 'name'
              className = 'outline-none border-b border-b-primary lg:rounded-lg  shadow-inner h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text'
              placeholder='Name'
              />
              <input 
              name = 'phonenumber'
              className = 'outline-none border-b border-b-primary lg:rounded-lg shadow-inner h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text'
              placeholder='Phone Number'
              />
            </div>              
            <input 
              name = 'email'
              className = 'outline-none border-b border-b-primary lg:rounded-lg shadow-inner h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text'
              placeholder='Email'
            />
            <textarea
              name = 'message'
              rows='6'
              className = 'outline-none border-b border-b-primary lg:rounded-lg shadow-inner bg-transparent font-secondary w-full pl-3 pt-3 placeholder:text-[#757879]'
              type='text'
              placeholder="What's your project?"
            />
            <button className = 'btn mb-[30px] lg:rounded-lg mx-auto lg:mx-0 self-start'> Send it</button>

          </form>
          <div className='lg:hidden'>
           <Socials/>  
          </div>
        </div>
        <motion.div 
        // onMouseEnter = {mouseEnterHandler}
        // onMouseLeave = {mouseLeaveHandler}
        initial = {{opacity:0, y:'100%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'100%'}}
        transition = {{transition: transition1, duration: 1.5}}
        className = {`lg:flex-1 pt-12 pb-24 lg:pb-12 lg:w-1/3`}>
          {/* pt-24 */}
          <LazyLoadImage
            className = 'lg:rounded-lg shadow lg:max-h-[50rem]'
            src={Mike1} 
            alt=''
            effect = 'blur'
          />
        </motion.div>
      </div>
      <div>

      </div>
    </div>
  </motion.section>
  )
};

export default Contact;
