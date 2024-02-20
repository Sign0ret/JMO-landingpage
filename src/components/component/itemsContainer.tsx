'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { Items } from "./items";
import { PostEmail } from "@/app/api/postEmail";

export const ItemsContainer = () => {
  const [email, setEmail] = useState<string>('');
  const [isChecked, setIsChecked] = useState(false);

  const postEmail = async () => {
    try {
      const response = await PostEmail(email);
      console.log('postEmail:', response);
      // Reset email input after successful submission if needed
      setEmail('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleButtonClick = () => {
    // Check if both email is completed and checkbox is checked
    if (email.trim() !== '' && isChecked) {
      postEmail();
    } else {
      // Handle case where either email is not completed or checkbox is not checked
      console.log('Please complete the email and accept terms.');
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:px-8 px-5 py-16 items-center bg-myBackground text-myWhite">
      <div className=''>
        <span className="text-xs">SUSCRÍBASE A NUESTRA LISTA DE CORREO</span>
        <div className="pb-8 pt-2">
          <input
            type="email"
            placeholder="EMAIL*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-myBackground text-xs border-b-2 border-gray-400 pb-3 focus:outline-none pr-4 md:pr-52 lg:pr-64 sm:pr-32 transition-all duration-300 text-myBlack"
          />
        </div>
        <label className="flex items-center space-x-2 cursor-pointer max-w-fit max-h-6">
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="miCheckbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="hidden"
            />
            <label htmlFor="miCheckbox" className="h-5 w-5 bg-myBlack border border-white checkbox-label"></label>
          </div>
          <span className="uppercase text-xs">Acepto los términos y condiciones de arquitectos lab&apos;s</span>
        </label>
        <div className="pt-8">
          <button
            className="bg-black border-2 text-white hover:bg-gray-200 hover:text-black hover:border-black duration-200 px-4 py-2 font-[Poppins] md:w-auto"
            onClick={handleButtonClick}
          >
            Enviar
          </button>
        </div>
      </div>
      <div className="">
        <Items />
      </div>
    </div>
  );
};
