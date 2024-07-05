import React from "react";
import { urlFor } from '../imageUrl';
import {Link} from 'react-router-dom'


function ServiceCard({item}) {
// 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden
// flex justify-center items-center w-full h-full
  return (
    <div className = 'flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pb-16 '>
<div className='flex-1 object-fill max-h-85 max-w-full order-2 lg:order-none overflow-hidden '>
          <img
            className = 'rounded-lg shadow'
            src={urlFor(item.picture).url()}
            alt={item.type} 
          />
      </div>
      <div className='flex-1  pb-12 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className = 'h1'>
                {item.type}
            </h1>
            <p className = 'mb-12 max-w-sm'>
                {item.description}
            </p>
            <Link to = {`/${item.collection.name}`} className = 'btn mb-[10px] mx-auto lg:mx-0'>
              View {item.type}
            </Link>
          </div>
          
          </div>
    
  )

};

export default ServiceCard;
    // <div className = 'flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'
    // <div className ='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
    //     <div className = 'flex-1 object-fill max-h-85 max-w-full order-2 lg:order-none overflow-hidden'>
    //         <div key={`item-${item.id}`} className = 'w-full h-full flex justify-center items-center'>
    //             <img
    //                 className = 'object-cover h-full w-full aspect-auto hover:scale-110 transition-all duration-500'
    //                 src={urlFor(item.picture).url()}
    //                 alt={item.name}
    //               />
    //         </div>
    //         <div className = 'flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
    //             <h1 className = 'h1'>
    //                 {item.type}
    //             </h1>
    //             <p className = 'mb-12 max-w-sm'>
    //                 {item.description}
    //                 <br/>
    //                 <br/>
    //             </p>
    //             <Link to = {'/contact'} className = 'btn'> 
    //                 View my work
    //             </Link>
    //         </div>
    //     </div>
    // </div>
