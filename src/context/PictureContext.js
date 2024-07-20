import React, { createContext, useContext, useState, useEffect } from 'react';
import {fetchData} from '../fetchData';

const PictureContext = createContext();

export const PicturesProvider = ({ children }) => {
    const [pictures, setPictures] = useState([]);



        const loadPictures = async () => {
            const response = await fetchData(`*[_type == "picture"]{
                name,
                id,
                picture,
                description,
                collection->{
                    name,
                    display
                  },
            }`);
            const data = await response;
            setPictures(data);
        };
        
        useEffect(()=>{
            loadPictures()
        },[])


    return (
        <PictureContext.Provider value={pictures}>
            {children}
        </PictureContext.Provider>
    );
};

export const usePictures = () => useContext(PictureContext);