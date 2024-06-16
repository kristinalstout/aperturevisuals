// import React, {useEffect,useState} from 'react'
// import {client} from '../client'

// // export async function getPictures() {
// //     const pictures = await client.fetch('*[_type == "picture"]')
// //     return pictures
// //   }

// function GetPictures(){
//   const [pictures,setPictures] = useState([])
//   useEffect(()=>{
//     client.fetch('*[_type == "picture"]')
//     .then((res)=> res.json())
//     .then((data)=>{
//       setPictures(data)
//     })
//   },[])


// }


// return (
//   <ul className="cards">
//     {/* render a list of <Planeteer> components in here */filteredPlaneteers.map((item)=>{
//       return(<div key={`item-${item.id}`}>
//         <Picture item = {item}/>
//       </div>)
//     })}
//   </ul>
// );
// }


// <Link to='/portraits'>
// <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
//   <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Sax} alt = ''/>
// </div>         
// </Link> 
// <Link to='/events'>
// <div className = 'max-w-[250px] lg:max-w-[220px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
//   <img className = 'object-cover w-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Conversation} alt = ''/>
// </div>
// </Link>


// <Link to='/calvert'>
// <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
//   <img className = 'object-cover h-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Boat} alt = ''/>
// </div>
// </Link>
// <Link to='/street-photography'>
// <div className = 'max-w-[250px] lg:max-w-[640px] h-[187px] lg:h-[340px] bg-accent overflow-hidden'>
//   <img className = 'object-cover h-full w-full lg:h-[340px] hover:scale-110 transition-all duration-500' src = {Dc} alt = ''/>
// </div>
// </Link>