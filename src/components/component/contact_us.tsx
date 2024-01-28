'use client';
import React, { useState, ChangeEvent } from 'react'

export default function Contact_us() {
    const [data, setData] = useState({name:"", email:"", phone:"", message:""});
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name] : value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
    }

  return (
    <main className='bg-slate-100 h-screen p-1 m-0 font-[Poppins] box-border'>
        
        <form className='block bg-white shadow-lg hover:shadow-2xl duration-300 m-10 mx-auto max-w-[600px] max-h-[700px] p-10 ' method='post' onSubmit={handleSubmit}>
            <h1 className='text-4xl'>Contactanos<span className='text-gray-300'> aquí</span></h1>
            <input className='flex flex-col w-full m-2.5 mx-auto bg-gray-100 p-2 border border-slate-300' type="text" name='name' id='' onChange={handleChange} value={data.name} placeholder='Nombre Completo' />
            <input className='flex flex-col w-full m-2.5 mx-auto bg-gray-100 p-2 border border-slate-300' type="email" name='email' id='' onChange={handleChange} value={data.email} placeholder='Correo Electronico'/>
            <input className='flex flex-col w-full m-2.5 mx-auto bg-gray-100 p-2 border border-slate-300' type="tel" name='phone' id='' onChange={handleChange} value={data.phone} placeholder='Numero de Telefono'/>
            <textarea className='flex flex-col w-full m-2.5 mx-auto bg-gray-100 p-2 border border-slate-300' name="message" id="" cols={30} rows={10} onChange={handleChange} value={data.message} placeholder='Describa el motivo de contacto'/>
            <button className='bg-black border-2 text-white hover:bg-gray-200 hover:text-black hover:border-black duration-200 px-4 py-2 md:w-auto' type='submit'>Enviar</button>
        </form>
        
    </main>
  )
}
