import React, { useState } from 'react'

export default function Form() {

    const [num, setNum] = useState(0);
    const options = Array.from({ length: 30 }, (_, i) => i + 1);


    return (
        <div className='bg-pink-700 p-4'>
            <div>
                <h5 className='text-white text-center text-2xl mb-3'>De quoi as-tu besoin pour ce voyage ?</h5>
            </div>
            <div className='text-center'>
                <form action="" className='flex gap-2 justify-center'>
                    <select name="" id="" onChange={e => setNum(e.target.value)} className='input bg-primary'>
                        {options.map((count) => {
                            return <option key={count} value={count}>{count}</option>
                        })}
                    </select>
                    <input type="text" className="input bg-primary" placeholder='Votre bagage...' />
                </form>
            </div>
        </div>
    )
}
