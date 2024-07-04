import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Calvert from '../pages/Calvert'
import Portraits from '../pages/Portrait'
import StreetPhotography from '../pages/StreetPhotography'
import BrandPhotography from '../pages/BrandPhotography'
import Events from '../pages/Events'
import Services from '../pages/Services'
import SinglePicturePage from '../pages/SinglePicturePage'

import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
// import { urlFor } from '../imageUrl';

// import { fetchData} from '../fetchData'

const AnimRoutes = ({setHeaderVisible, headerVisible, pictureId}) => {
  const location = useLocation()

  return (

<AnimatePresence initial={true} mode = 'wait'>
    <Routes key = {location.pathname} location = {location}>
      <Route path='/' element={<Home setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      <Route path='/about' element={<About setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      <Route path='/portfolio' element={<Portfolio  setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      <Route path='/portraits' element={<Portraits setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      <Route path = '/:source/:id' element={<SinglePicturePage pictureId = {pictureId} setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      <Route path='/calvert' element={<Calvert setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      <Route path='/brand-photography' element={<BrandPhotography setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}y/>}/>
      <Route path='/events' element={<Events setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      <Route path='/street-photography' element={<StreetPhotography setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      <Route path='/services' element = {<Services setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
      {/* <Route path="/events/:id" element={<SinglePicturePage  />} />
      <Route path="/portraits/:id" element={<SinglePicturePage  />} />
      <Route path="/brand-photography/:id" element={<SinglePicturePage />} /> */}
      <Route path='/contact' element={<Contact setHeaderVisible={setHeaderVisible} headerVisible = {headerVisible}/>}/>
    </Routes>
  </AnimatePresence>
  );
};

export default AnimRoutes;
