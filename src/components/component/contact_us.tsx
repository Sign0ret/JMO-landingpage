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
    <main className='bg-myBackground h-screen p-1 font-[Poppins] box-border text-myWhite'>
        
        <form  className='block bg-myBackground shadow-lg hover:shadow-2xl duration-300 m-10 mx-auto max-w-[600px] max-h-[700px] px-10 py-0 ' method='post' onSubmit={handleSubmit}>
            <h1 className='text-4xl' >Contáctanos<span className='text-myBone'> aquí</span></h1>
            <input className='flex flex-col w-full m-2.5 mx-auto  p-2 border border-slate-300 hover:border-slate-600 duration-300' type="text" name='name' id='' onChange={handleChange} value={data.name} placeholder='Nombre Completo' />
            <input className='flex flex-col w-full m-2.5 mx-auto  p-2 border border-slate-300 hover:border-slate-600 duration-300' type="email" name='email' id='' onChange={handleChange} value={data.email} placeholder='Correo Electronico'/>
            <input className='flex flex-col w-full m-2.5 mx-auto  p-2 border border-slate-300 hover:border-slate-600 duration-300' type="tel" name='phone' id='' onChange={handleChange} value={data.phone} placeholder='Numero de Telefono'/>
            <textarea className='flex flex-col w-full m-2.5 mx-auto  p-2 border border-slate-300 hover:border-slate-600 duration-300' name="message" id="" cols={30} rows={10} onChange={handleChange} value={data.message} placeholder='Describa el motivo de contacto'/>
            <button className='bg-black border-2 text-white hover:bg-gray-200 hover:text-black hover:border-black duration-200 px-4 py-2 md:w-auto' type='submit'>Enviar</button>
        </form>
        
    </main>
  )
}
