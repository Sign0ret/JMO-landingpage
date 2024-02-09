'use client'

import React, { useState } from 'react'
import { BlockCarrusel } from './new_carrusel'
import './container_carr.css';

export default function Container_carr() {

    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    };

  return (
    <div className="modalOverlay">
      <div className="modal">
        <form>
          <div className="formItem">
            <h4>Titulo del Producto</h4>
            <input
              type="text"
              placeholder="Titulo del Producto"
              value="Titulo del Producto"
              onChange={handleChange}
            />
          </div>
          <p>conjunto: Algun Conjunto</p>
          <p>calidad: Alguna Calidad</p>
          <p>Algun Provedor</p>
          
          <div className="formItem">
            <p>Alguna Unidad:</p>
            <input
              type="number"
              placeholder="Unidades Compradas"
              value="Unidades Compradas"
              onChange={handleChange}
            />
          </div>
          <div className="formItem">
            <p>Precio por Unidad:</p>
            <input
              type="number"
              placeholder="PrecioXUnidad"
              value="PrecioXUnidad"
              onChange={handleChange}
            />
          </div>

          <div className="formItem">
            <p>Total Compra:</p>
            <p>Muchas</p>
          </div>
          <div className="formItem">
            <p>Total Venta:</p>
            <p>Muchas Mas</p>
          </div>
          <div className="formItem">
            <p>Pago Actual</p>
            <input
              type="text"
              placeholder="No tanto"
              value="No tanto"
              onChange={handleChange}
            />
          </div>
            <div>
                <p>Fotos Previas:</p>
                
                <div>
                    {/* Render content only if filesFotosOld is not empty */}
                    <BlockCarrusel alto={300} ancho={300}/>
                    
                    <div>
                        Lugar donde se eliminan las imagenes 
                        <button>Delete</button>
                    </div>
                    
                </div>
                
                <p>Fotos Nuevas:</p>
                <div className="actions">
                    <button className="actions1">
                    Cancelar
                    </button>
                    <button type="submit" className="actions2">
                    Actualizar
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
  )
}

