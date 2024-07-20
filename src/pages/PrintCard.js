import React from "react";
import { urlFor } from '../imageUrl';
import {Link} from 'react-router-dom'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


function PrintCard({item}) {
    const findMinimumPrice = (sizes) => {
        if (!sizes || sizes.length === 0) return "Sold Out";
        return Math.min(...sizes.map(size => size.price));
      };
      
  return (
    <div className = 'flex flex-col h-full items-center justify-center  text-center'>
        <div className='flex-1 object-fill max-w-full '>
        <Link to ={`/shop/${item.id}`}>
            <LazyLoadImage
                className = 'lg:rounded-lg shadow-lg shadow-black'
                src={urlFor(item.picture).url()}
                alt={item.type} 
                effect = 'blur'
            />
            </Link>
        </div>
        <div className='flex-1 text-center pb-6 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className = ''>
                {item.name}
            </h1>
            <p className = 'mb-2 max-w-sm text-center'>
                from ${findMinimumPrice(item.sizes)}
            </p>
            {/* <Link to = {`/${item.collection.name}`} className = 'btn lg:rounded-lg mb-[10px] mx-auto lg:mx-0'>
            View {item.type}
            </Link> */}
        </div>
     </div>
  )
};

export default PrintCard;