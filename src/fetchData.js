import { client } from './client';
import {useEffect, useState} from 'react'

// export const fetchDataByComponentName = async (componentName) => {
//   const query = `*[_type == "picture" && componentName == $componentName]`;
//   const params = { componentName };

//   try {
//     const data = await client.fetch(query, params);
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
// };

export const fetchData = async (query) => {
    // const query = `*[_type == "collection"]`;
    try {
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
