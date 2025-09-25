import React from 'react'

const form = () => {
  return (
    <div className=' container mx-auto mt-20 w-300 h-170 bg-zinc-100 flex flex-col items-center gap-15 border rounded-lg'>
        <div className="bg-linear-to-t from-sky-500 to-indigo-500 w-full h-40 flex  items-center justify-center">
            <h1 className='text-5xl font-bold text-white'>News You Can Trust</h1>
        </div>
        <div className="flex flex-col gap-7 items-center justify-center ">
            <h1 className='text-4xl font-bold'>Stay Up to date with the latest!!</h1>
            <h1 className='text-3xl font-semibold'>Subscribe to our webpage for more such news at you fingertips</h1>
            <input className='text-3xl  bg-blue-200 px-20 py-5 rounded-xl' type="text"  placeholder='you@example.com'/>
            <button className=' bg-linear-to-t from-sky-500 to-indigo-500 px-20 py-6 text-2xl rounded-[25px] font-bold text-white'>Subscribe Now</button>
            <h1 className='text-2xl font-semibold'>We value your privacy</h1>
        </div>

    </div>
  )
}

export default form