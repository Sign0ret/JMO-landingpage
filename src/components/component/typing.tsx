"use client";
import { TypePhase, useTypedSuperpower } from "./useTypedSuperpower";
import cn from 'classnames'

const superpowers = ['la construcción', 'el diseño', 'lo artístico']

export const Typing = () => {
    const {typedSuperpower, selectedSuperpower, phase} = useTypedSuperpower(superpowers)
    return(
        <h2 className='flex flex-col lg:block text-center py-24 text-5xl tracking-tight'>
            <span className='mb-4 lg:mb-0 text-myWhite'>nuestra especialidad es</span>{' '}
            
            <span className={cn('text-mySkin', {['end-cursor']: phase !== TypePhase.Deleting, ['blinking']: phase === TypePhase.Pausing, })} aria-label={selectedSuperpower}>
                {typedSuperpower}
            </span>
        </h2>
    );
};