import React, {useContext, useRef, useEffect} from 'react';

import Transparent from '../img/contact/transparent.png'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import Socials from '../components/Socials'
import { CursorContext } from '../context/CursorContext';
import emailjs from '@emailjs/browser'
import Mike1 from '../img/about/mike1.jpg'

const Contact = ({setHeaderVisible, headerVisible}) => {

  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
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
  className='section bg-white overflow-auto'>
    <div className = 'container mx-auto h-full'>
      <div className = {`flex flex-col lg:flex-row h-full items-center justify-start pt-36 ${headerVisible ? 'pt-24' : 'pt-0'} gap-x-8 text-center lg:text-left`}>
        <motion.div
        initial = {{opacity:0, y:'100%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'100%'}}
        transition = {transition1}
        className = 'hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
        </motion.div>
        <div 
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        className='lg:flex-1 lg:pt-32 px-4'>
          <h1 className = 'h1'>Contact Me</h1>
          <p className = 'mb-12'>Schedule a consultation and estimate today!</p>
          <form ref = {form} onSubmit = {sendEmail} className = 'flex flex-col gap-y-4'>
            <div className = 'flex gap-x-10'>
              <input 
              name = 'name'
              className = 'outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text'
              placeholder='Name'
              />
              <input 
              name = 'email'
              className = 'outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text'
              placeholder='Email'
              />
              <input 
              name = 'phonenumber'
              className = 'outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text'
              placeholder='Phone Number'
              />
            </div>
            <input 
              name = 'message'
              className = 'outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
              type='text'
              placeholder="What's your project?"
            />
            <button className = 'btn mb-[30px] mx-auto lg:mx-0 self-start'> Send it</button>

          </form>
          <div className='lg:hidden'>
           <Socials/>  
          </div>

        </div>
        <motion.div 
        onMouseEnter = {mouseEnterHandler}
        onMouseLeave = {mouseLeaveHandler}
        initial = {{opacity:0, y:'100%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'100%'}}
        transition = {{transition: transition1, duration: 1.5}}
        className = {`lg:flex-1`}>
          <img src={Mike1} alt=''/>
        </motion.div>
      </div>
      <div>

      </div>
    </div>
  </motion.section>
  )
};

export default Contact;
