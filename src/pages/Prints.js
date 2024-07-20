import React, {useContext, useEffect, useState, useRef} from 'react';
//import { CursorContext } from '../context/CursorContext';
import {Link, useParams, useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'
import {fetchData} from '../fetchData'

import PrintCard from './PrintCard'
import { usePictures } from '../context/PictureContext'

const Prints = ({setHeaderVisible, headerVisible}) => {

    const [pictures,setPictures] = useState([])
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);
    const filters = [
        {
            name: 'Architecture',
            id: '1',
            type: 'print-architecture',
        },
        {
            name:'Nature',
            id: '2',
            type: 'print-nature',
        }
    ]
    const lastScroll = useRef(0)
    const scrollUpThreshold = 50
    const scrollUpDistance = useRef(0)
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [filteredPictures, setFilteredPictures] = useState([]);
    const query = `*[_type == "print"]{
        picture,name,id,description,sizes[]{size,price},collection->{name,display}
        }`

    useEffect(() => {
        fetchData(query).then((data) => setPictures(data));
    },[query]);

    useEffect(() => {
        if (pictures.length>0){
                setFilteredPictures(pictures);  
        }
    }, [pictures]);

    useEffect(() => {
        if (isCheck.length === 0) {
            setFilteredPictures(pictures);
        } else {
            setFilteredPictures(
                pictures.filter(picture => isCheck.includes(picture.collection?.name))
            )
        }
    }, [isCheck,pictures]);

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        if (isCheckAll) {
          setIsCheck([]);
        }else{
            setIsCheck(filters.map(filter =>filter.type))
        }
      };

    const handleClick = e => {
        const {name, checked} = e.target;
        if (checked){
            setIsCheck([...isCheck,name])

            if (isCheck.length + 1 === filters.length) {
                setIsCheckAll(true);
            }
        }else{
            setIsCheck(isCheck.filter((item)=>item !== name))
            setIsCheckAll(false)
        }
    };

    useEffect(() => {
        if (pictures.length > 0) {
            setLoading(false);
        }
    }, [pictures]);

    if (loading) {
        return console.log('Loading...')
    }

  return (
    <section className ='section overflow-auto'>
      <div className = {`flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left ${headerVisible ? 'pt-32 transition-top duration-700 ease-out' : 'pt-0 transition-top duration-700 ease-out'} pb-0 lg:pb-36`} >
        <motion.div
        initial = {{opacity:0, y:'-80%'}} 
        animate = {{opacity:1, y:0}}
        exit = {{opacity:0, y:'-80%'}}
        transition = {transition1}
        className = 'lg:w-1/3  sticky p-4 '>
            <h1 className = 'h1 text-center mb-4'>Shop</h1>
            <div className ='text-center'>
                <div>
                    <input 
                        type = "checkbox"
                        id = 'selectAll'
                        name = 'selectAll'
                        value = 'selectAll'
                        checked = {isCheckAll}
                        onChange = {handleSelectAll}
                    />
                    All
                </div>
                {filters.map(({type, name, id},index) =>{
                    return(
                        <div key={id}>
                            <input 
                                type = "checkbox"
                                id = {id}
                                name = {type}
                                value = {name}
                                onChange = {handleClick}
                                checked = {isCheck.includes(type)}
                            />
                            <label htmlFor={id}>{name}</label>
                        </div>
                    )
                })}
            </div>
          {/* <Link to = {'/contact'} className = 'btn mb-[10px] mx-auto lg:mx-0'> 
            Schedule a shoot
          </Link> */}
        </motion.div>
        <div 
        id = 'brand'
        className = 'lg:w-2/3 h-screen overflow-y-scroll p-8 pt-0  lg:pt-48'>
          {/*         <div className = 'w-2/3 h-screen  p-4 grid grid-cols-2 lg:gap-2 mt-10 '>
          <div className = 'items-center'> */}
          <div className = 'flex flex-wrap  -mx-2 pb-24'>
            <div className = 'w-1/2 '>
                {filteredPictures
                    .sort((a,b)=>a.id - b.id)
                    .filter((_,index)=>index %2 === 0)
                    .map((item)=>{
                        return( 
                            <div key={`item-${item.id}`} className='p-2'>
                                <PrintCard item = {item} source='brand-photography'/>
                            </div>
                        )
                    })
                }
            </div>
            <div className = 'w-1/2 '>
                {filteredPictures
                    .sort((a,b)=>a.id - b.id)
                    .filter((_,index)=>index %2 !== 0)
                    .map((item)=>{
                        return( 
                            <div key={`item-${item.id}`} className='p-2'>
                                <PrintCard item = {item} source='brand-photography'/>
                            </div>
                        )
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Prints;