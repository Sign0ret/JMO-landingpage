"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '@/components/component/navbar';

export default function Gallery() {
  const [urls, setUrls] = useState<Array<string> | null>(null);
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

  return (
    <main className='bg-white'>
      <header>
        <Navbar />
      </header>
      <section className='grid grid-cols-4 gap-4 p-4'>
        <div className='text-black text-3xl text-center mt-28'> Cuadrito reservado para informacion y texto</div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {urls &&
          urls.map((url, index) => (
            <img key={index} className='post w-80 h-80' src={url} alt={`Image ${index}`} />
          ))}
      </section>
    </main>
  );
}