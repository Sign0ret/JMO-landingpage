import React from "react";
import { Items } from "./items";


export const ItemsContainer = () => {

  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:px-8 px-5 py-16 items-center">
      <div>
        <span className="text-xs">SUSCRÍBASE A NUESTRA LISTA DE CORREO</span>
        <div className="pb-8 pt-2">
        <input type="email" placeholder="EMAIL*" className="bg-gray-200 text-xs border-b-2 border-gray-400 pb-3 focus:outline-none pr-64 md:pr-52 lg:pr-64 sm:pr-32 transition-all duration-300" />
        </div>
        <label className="flex items-center space-x-2 cursor-pointer max-w-fit max-h-6">
          <div className="checkbox-container">
            <input type="checkbox" id="miCheckbox" className="hidden" />
            <label htmlFor="miCheckbox" className="h-5 w-5 bg-white border border-black checkbox-label"></label>
          </div>
          <span className="uppercase text-xs">Acepto los términos y condiciones de arquitectos lab&apos;s</span>
        </label>
        <div className="pt-8">
          <button className="bg-black border-2 text-white hover:bg-gray-200 hover:text-black hover:border-black duration-200 px-4 py-2 font-[Poppins] md:w-auto">
            Enviar
          </button>
        </div>
      </div>
      <div className="">
        <Items/>
      </div>
    </div>
    

  )
};

 /* Botton Styles
 text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none */