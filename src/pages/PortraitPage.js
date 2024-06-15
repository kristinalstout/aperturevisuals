import React, {useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, filteredPlants,handleChange,setPlants}) {


  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search handleChange={handleChange}/>
      <PlantList plants={plants} filteredPlants={filteredPlants}/>
    </main>
  );
}

export default PlantPage;