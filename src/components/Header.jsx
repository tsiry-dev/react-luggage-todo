import { BaggageClaim, Luggage } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <header className='bg-primary p-4'>
            <h1 className='text-cener flex justify-center items-center gap-4'>
                <BaggageClaim className='text-white' />
                <span className='text-4xl text-orange-950 border-b-5'>LUGGAGE TODOS</span>
                <Luggage className='text-white' />
            </h1>
        </header>
    )
}
