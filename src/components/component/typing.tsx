"use client";
import { TypePhase, useTypedSuperpower } from "./useTypedSuperpower";
import cn from 'classnames'
import Image from "next/image";
const superpowers = ['la construcción', 'el diseño', 'lo artístico']

export const Typing = () => {
    const {typedSuperpower, selectedSuperpower, phase} = useTypedSuperpower(superpowers)
    return(
        <section>
            <Image src={'/jmo_escaleras.PNG'} alt="JMO arquitectos" fill />
            <h2 className='flex flex-col lg:block text-center py-24 text-5xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl'>
                <span className='mb-4 lg:mb-0 text-myWhite'>nuestra especialidad es</span>{' '}
                <span className={cn('text-mySkin', {['end-cursor']: phase !== TypePhase.Deleting, ['blinking']: phase === TypePhase.Pausing, })} aria-label={selectedSuperpower}>
                    {typedSuperpower}
                </span>
            </h2>

            <div className='relative overflow-hidden max-w-screen-lg mx-auto p-8 rounded-md'>
                <div className='text-myBone relative z-10 hover:bg-opacity-70 transition-all duration-300 text-center'>
                    <p className="px-5">
                        Somos un <span className='text-myWhite'>despacho de arquitectura</span> especializado en el <span className='text-myWhite'>diseño</span> y <span className='text-myWhite'>construcción</span> de espacios personalizados.
                    </p>
                    <p className="px-5">
                        En JMO buscamos crear proyectos innovadores y acogedores con una alta calidad.
                    </p>
                </div>
            </div>

        </section>
    );
       
        
};