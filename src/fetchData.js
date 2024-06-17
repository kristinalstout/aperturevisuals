import { client } from './client';
import {useEffect, useState} from 'react'

export const fetchData = async (query) => {
    try {
      const data = await client.fetch(query);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
