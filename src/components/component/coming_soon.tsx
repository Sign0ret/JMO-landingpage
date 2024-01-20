"use client";
import { TypePhase, useTypedSuperpower } from "./useTypedSuperpower";
import cn from 'classnames'

const superpowers = ['En Construccion...', 'Coming Soon...', 'Developing...']

export const ComingSoon = () => {
    const {typedSuperpower, selectedSuperpower, phase} = useTypedSuperpower(superpowers)
    return(
        <div className="transition-all duration-300">
            <span className={cn('text-black font-bold md:text-6xl sm:text-5xl text-4xl max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center md:text-left absolute justify-center pl-10 z-[-2]', {['end-cursor']: phase !== TypePhase.Deleting, ['blinking']: phase === TypePhase.Pausing, })} aria-label={selectedSuperpower}>
            {typedSuperpower}
            </span>
        </div>
    );
};