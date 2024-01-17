"use client";
import { TypePhase, useTypedSuperpower } from "./useTypedSuperpower";
import cn from 'classnames'

const superpowers = ['Hotel', 'Casa', 'Cabaña', 'Edificio', 'Complejo']

export const Typing = () => {
    const {typedSuperpower, selectedSuperpower, phase} = useTypedSuperpower(superpowers)
    return(
        <h2 className='flex flex-col lg:block text-center py-12 text-5xl tracking-tight'>
            <span className='mb-4 lg:mb-0'>My superpower?</span>{' '}
            
            <span className={cn('text-sky-500', {['end-cursor']: phase !== TypePhase.Deleting, ['blinking']: phase === TypePhase.Pausing, })} aria-label={selectedSuperpower}>
                {typedSuperpower}
            </span>

        </h2>
    );
};