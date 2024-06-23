import React, {useEffect, useState} from "react";
import { urlFor } from '../imageUrl';
import {Link} from 'react-router-dom'



function HomePicture({item}) {

  return (
    <div >
    <div className = 'max-w-[250px] lg:max-w-[640px] h-[200px] lg:h-[340px]  overflow-hidden'>
              <Link to ={`/${item.name}`}>
             <div key={`item-${item.name}`} className = 'w-full h-full flex justify-center items-center'>
                <img
                  className = 'object-cover h-full w-full aspect-auto hover:scale-110 transition-all duration-500'
                    src={urlFor(item.picture).url()}
                    alt={item.name}
                  />
                </div>
              </Link>
            </div>
            </div>
  );
}

export default HomePicture;