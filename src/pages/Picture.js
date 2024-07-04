import React from "react";
import { urlFor } from '../imageUrl';
import {Link} from 'react-router-dom'



function Picture({item,source}) {
  let linkUrl;
  switch (source) {
    case 'events':
      linkUrl = `/events/${item.id}`;
      break;
    case 'portraits':
      linkUrl = `/portraits/${item.id}`;
      break;
    case 'portfolio':
      linkUrl = `/portfolio/${item.id}`;
      break;
    case 'brand-photography':
      linkUrl = `/brand-photography/${item.id}`;
      break;
    default:
      linkUrl = `/portfolio/${item.id}`; // Fallback URL
  }

  return (
    <Link to ={{ pathname: linkUrl, state: { source }}}>
      <img 
        className = ' shadow lg:rounded-lg'
        src={urlFor(item.picture).url()}
        alt={item.name}
      />
    </Link>
  );
}

export default Picture;
