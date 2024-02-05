'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './index_module.css'



export default function Handle_delete() {

    /* const Modal: React.FC<ModalProps> = ({ plantillacasa, onClose }) => {
        const [deleteStatus, setDeleteStatus] = useState<string | null>(null)
        const [expectedText, setExpectedText] = useState<string | null>(null)
      
        const handleDelete = async () => {
          if (expectedText === plantillacasa.plantilla) {
            try {
              setDeleteStatus('Borrando...')
              const deleteResponse = await doEliminatePlantillaCasa(plantillacasa)
              setDeleteStatus(deleteResponse)
              if (deleteResponse === 'done') {
                window.location.href = '/plantillas'
              } else {
                setDeleteStatus('error')
              }
            } catch (error) {
              setDeleteStatus('Error subiendo el archivo: ')
            }
            onClose()
          } else {
            setDeleteStatus(debes escribir ${plantillacasa.plantilla} para poder eliminar la plantilla)
          }
        } */
      

  return (
    <div className="modaloverlay">
      <div className="modal">
        <form className='formItem'>
          <div>
            <div className='alert'>
                <div className='alert_space'><img className='image' src="/alert-circle-outline.svg" alt="alert_circle" /><p className='alert_text'>Una vez que la eliminas no la podrás recuperar</p></div>
                <div className='alert_space'><img className='image' src="/alert-circle-outline.svg" alt="alert_circle" /><p className='alert_text'>También se eliminarán 1 plantillas de pisos</p></div>
            </div>
            <br />
            <ul>
                <li className='title_ul'>Elementos a Borrar</li>
                <li className='ul_element'>Plantilla 1 con 2 plantillas de espacios</li>
                <li className='ul_element'>Plantilla 2 con 1 plantillas de espacios</li>
                <li className='ul_element'>Plantilla 3 con 4 plantillas de espacios</li>
                <li className='ul_element'>Plantilla 4 con 2 plantillas de espacios</li>
               
            </ul>
            <br />
            <p className='title'>
              Escribe <em className='resalte'>BORRAR</em> para poder borrar la plantilla
            </p>
            <p>Borrando...</p>
            <input className=''
              type="text"
              placeholder= "BORRAR"
              
              
            />
          </div>
        </form>
        <button className='actions1' >Cancel</button>
        <button className='actions2' >Eliminar</button>
      </div>
    </div>
  )
}

