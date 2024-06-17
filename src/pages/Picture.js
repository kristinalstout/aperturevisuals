import React, {useEffect, useState} from "react";
import { urlFor } from '../imageUrl';
import {Link} from 'react-router-dom'



function Picture({item}) {
// 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden
// flex justify-center items-center w-full h-full bg-accent
  return (
    <div >
    <div className = 'max-w-[250px] lg:max-w-[640px] h-[200px] lg:h-[340px]  overflow-hidden'>
              <Link to ={`/${item.name}`}>
             <div key={`item-${item.id}`} className = 'w-full h-full flex justify-center items-center'>
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
  // return (
  //   <div key={`item-${item.id}`} className = "flex justify-center items-center w-full h-full">
  //     <Link to ={`/${item.name}`} className="w-full h-full flex justify-center items-center">
  //       <div className="relative" style={{ width: minSize.width, height: minSize.height }}>
  //         <img
  //           className="object-contain h-full w-full hover:scale-110 transition-all duration-500"
  //           src={urlFor(item.picture).url()}
  //           alt={item.name}
  //         />
  //       </div>
  //     </Link>
  //   </div>
  // );
}

export default Picture;
