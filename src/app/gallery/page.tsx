"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '@/components/component/navbar';

export default function Gallery() {
  const [urls, setUrls] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/get');
        console.log('get:', response);
        setUrls(response.data.objectUrls);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  const handleImageError = (index: number) => {
    if (urls) {
      // Verificar que 'urls' no sea nulo antes de operar
      const updatedUrls = [...urls];
      updatedUrls.splice(index, 1);
      setUrls(updatedUrls);
    }
  };

  return (
    <main className='bg-black'>
      <header>
        <Navbar />
      </header>
      <section className='grid grid-cols-1 gap-4 p-4 pl-9 lg:grid-cols-4 lg:pl-10 md:grid-cols-2'>
        <div className='text-white text-3xl text-center mt-28'> Cuadrito reservado para informacion y texto</div>
        <a href="https://www.instagram.com/jorgeblasquezjjbg_/">
          <img src="insta.webp" alt="Instagram" className='post w-80 h-80' />
        </a>
        {loading && <p className='text-white md:text-9xl text-6xl text-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</p>}
        {error && <p>{error}</p>}
        {urls &&
          urls.map((url, index) => (
            <img
              key={index}
              className='post w-80 h-80'
              src={url}
              alt={`Image ${index}`}
              onError={() => handleImageError(index)}
            />
          ))}
      </section>
    </main>
  );
}