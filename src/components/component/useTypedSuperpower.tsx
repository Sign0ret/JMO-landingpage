"use client";
import React, { useEffect, useState } from 'react';

export enum TypePhase{
    Typing,
    Pausing,
    Deleting,
}

const TYPING_INTERVAL = 150
const PAUSE_MS = 1000
const DELETING_INTERVAL = 50

export const useTypedSuperpower = (superpowers: string[]): {
    typedSuperpower: string
    selectedSuperpower: string
    phase: TypePhase
} => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [phase, setPhase] = useState(TypePhase.Typing)
    const [typedSuperpower, setTypedSuperpower] = useState('')

    useEffect(() => {
        switch (phase) {
            case TypePhase.Typing: {
                const nextTypedSuperPower = superpowers[selectedIndex].slice(
                    0,
                    typedSuperpower.length + 1
                )
        
                if(nextTypedSuperPower === typedSuperpower) {
                    setPhase(TypePhase.Pausing)
                    return
                }
        
                const timeout = setTimeout(() => {
                    setTypedSuperpower(nextTypedSuperPower)
                }, TYPING_INTERVAL)
        
                return () => clearTimeout(timeout)
            }
            case TypePhase.Deleting: {
                
                if(!typedSuperpower) {
                    const nextIndex = selectedIndex + 1
                    setSelectedIndex(superpowers[nextIndex] ? nextIndex : 0)
                    setPhase(TypePhase.Typing)
                    return
                }
                const nextRemaining = superpowers[selectedIndex].slice(
                    0,
                    typedSuperpower.length - 1
                )
                
                const timeout = setTimeout(() => {
                    setTypedSuperpower(nextRemaining)
                }, DELETING_INTERVAL)
        
                return () => clearTimeout(timeout)
            }
            case TypePhase.Pausing:
            default:
                const timeout = setTimeout(() => {
                    setPhase(TypePhase.Deleting)
                }, PAUSE_MS)
        
                return () => clearTimeout(timeout)
        }
        if (phase === TypePhase.Pausing) return

        
    }, [superpowers, typedSuperpower, selectedIndex, phase])

    return {typedSuperpower,phase, selectedSuperpower: superpowers[selectedIndex]}
}