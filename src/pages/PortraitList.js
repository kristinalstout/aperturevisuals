import React from "react";
import PlantCard from "./PlantCard";

function PortraitList({plants,filteredPlants}) {
  return (
    <ul className="cards">
      {filteredPlants.map((plant)=>{
      return<PlantCard key={plant.id} plant={plant}/>
    })/* render PlantCards components in here */}</ul>
  );
}

export default PortraitList;
