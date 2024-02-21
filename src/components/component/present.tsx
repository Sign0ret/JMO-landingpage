"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar } from '@/components/component/navbar';
import Link from 'next/link';

interface MiComponenteProps {
  estiloPersonalizado?: string; 
}

export const Present: React.FC<MiComponenteProps> = ({ estiloPersonalizado }) => {
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
    <section className='h-full max-h-2/3' style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
      <div>
        <header>
          <Navbar />
        </header>
        <div className={`clase-comun ${estiloPersonalizado} column items-center justify-center h-1/2 max-h-1/2`}>
          {/* <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Conozcámonos más.</h1> */}
          <div className='flex justify-center items-center flex-col sm:flex-row'>
            <div className='column m-5'>
              <a href="https://www.instagram.com/jmo_arquitectos/" className='justify-center items-center'>
                <img src="insta.webp" alt="Instagram" className='post w-60 h-60 align-middle border border-myGray' />
              </a>
              <div className='text-myWhite text-center flex-column'>
                <p>visita nuestro instagram</p>
                <Link href='https://www.instagram.com/jmo_arquitectos/' className='text-sm text-myBone'>@jmo_arquitectos</Link>
              </div>
            </div>
            <div className='column m-5'>
              <a href="https://www.instagram.com/jmo_arquitectos/" className='justify-center items-center'>
                <img src="/alberca.PNG" alt="Instagram" className='post w-60 h-60 align-middle' />
              </a>
              <div className='text-myWhite text-center flex-column'>
                <p>visita nuestros proyectos</p>
                <Link href='https://obra.jmoarquitectos.com/projects' className='text-sm text-myBone'>obra.jmoarquitectos.com/projects</Link>
              </div>
            </div>
          </div>
          
        </div>
        
        
      </div>
    </section>
  
    
  
    
  );
};

//Mejor estilo
// max-w-[800px] mt-[-400px] w-full h-screen mx-auto text-left absolute flex-col justify-center pl-2 z-[-2]