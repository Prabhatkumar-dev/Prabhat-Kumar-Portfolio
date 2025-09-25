import React from 'react'
import { Link ,Routes,Route } from "react-router-dom";
function User() {
  return (
    <div className='container mx-auto   bg-green-100 mt-10 px-10 py-20'>
<p className=' text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eos tempora laborum repudiandae cumque ducimus? In omnis ea impedit iusto et numquam neque accusamus voluptatibus hic unde? Quaerat, blanditiis! Nesciunt, assumenda a pariatur expedita non alias excepturi eveniet facere provident voluptate repellendus minima esse cupiditate aliquam deserunt harum illo unde.</p>
    <div className='mt-5 px-5 py-3 flex flex-col gap-3  w-fit'>
        <Link  to="/arun" className="text-2xl font-bold bg-blue-200 py-3 px-5">-) Arun</Link><button className='bg-zinc-200 border-1 rounded-md px-5 py-3 ml-150 '>Click To know More</button>
        <Link  to="/arya" className="text-2xl font-bold bg-blue-200 py-3 px-5">-) Arya</Link><button className='bg-zinc-200 border-1 rounded-md px-5 py-3 ml-150 '>Click To know More</button>
        <Link  to="/rohit" className="text-2xl font-bold bg-blue-200 py-3 px-5">-) Rohit</Link><button className='bg-zinc-200 border-1 rounded-md px-5 py-3 ml-150 '>Click To know More</button>
    </div>
    
    </div>
  )
}

export default User