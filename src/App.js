import React, {useContext,useEffect,useState, useCallback} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import {motion} from 'framer-motion'
//import { CursorContext } from './context/CursorContext';

import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes';
import { fetchData} from './fetchData'
import Footer from './components/Footer'

const App = () => {

  //const{cursorVariants, cursorBG } = useContext(CursorContext)
  // const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(true)
  // const [showUp, setShowUp] = useState(false)
  const [pictureId, setPictureId] = useState([])
  // const [pictures,setPictures] = useState([])
  const idQuery = `*[_type == "picture"]{id}`


  useEffect(() => {
    fetchData(idQuery).then((data) => 
      setPictureId(data.map(item => item.id)))
},[idQuery])

  // const loadPictures = useCallback(async() => {
  //   const data = await fetchData(`*[_type == "picture"]`)
  //   setPictures(data)
  //   // fetchData(query).then((data) => setPictures(data));
  // });

  // useEffect(() => {
  //   loadPictures();
  // }, [loadPictures]);


  return (
  <>
  <Router>
    <Header headerVisible = {headerVisible}/>
    <AnimRoutes  setHeaderVisible = {setHeaderVisible} headerVisible={headerVisible} pictureId = {pictureId}/>
    <SpeedInsights />
  </Router>
  {/* <motion.div 
  variants = {cursorVariants}
  animate = {cursorBG}
  className = ' w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'>

  </motion.div> */}
  </>)
};

export default App;
