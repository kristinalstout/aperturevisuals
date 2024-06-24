import React from "react";
import { urlFor } from '../imageUrl';
import {Link} from 'react-router-dom'



function Picture({item}) {
  return (
    <Link to = {`/portfolio/${item.id}`}>
      <img 
        className = ' shadow lg:rounded-lg'
        src={urlFor(item.picture).url()}
        alt={item.name}
      />
    </Link>
  );
}

export default Picture;
