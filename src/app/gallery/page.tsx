"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Gallery() {
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get');
        console.log('get:', response);
        setUrls(response.data.objectUrls);
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function inside useEffect

  }, []); // Empty dependency array means the effect will run once after the initial render

  return (
    <div>
      {urls && urls.map((url, index) => (
        <img key={index} className='w-1/3' src={url} alt={`Image ${index}`} />
      ))}
    </div>
  );
}
