import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Calvert from '../pages/Calvert'
import Portraits from '../pages/Portrait'
import StreetPhotography from '../pages/StreetPhotography'
import Events from '../pages/Events'
import Services from '../pages/Services'
// import Pictures from '../pages/GetPictures'

import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation()
  return (
  <AnimatePresence initial={true} mode = 'wait'>
    <Routes key = {location.pathname} location = {location}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio />}/>
      <Route path='/portraits' element={<Portraits/>}/>
      <Route path='/calvert' element={<Calvert/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/street-photography' element={<StreetPhotography/>}/>
      <Route path='/services' element = {<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path = '/pictures' element={<Pictures/>}/> */}
    </Routes>
  </AnimatePresence>
  );
};

export default AnimRoutes;
