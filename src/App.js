import React from 'react';
import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes';
import {BrowserRouter as Router} from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"

import {motion} from 'framer-motion'


const App = () => {
  return (
  <>
  <Router>
    <Header/>
    <AnimRoutes/>
    <SpeedInsights />
  </Router>
  </>)
};

export default App;
