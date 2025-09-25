import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
function Userdetails() {
    const navigate = useNavigate();
    const goback =()=>{
        navigate("/user");
    }
    const {name} = useParams();
  return (
    <>
    
    <h1 className='text-2xl font-bold bg-blue-200 py-3 px-5 mt-5'>{name}</h1>
     <div className='container mx-auto   bg-purple-100 mt-10 px-10 py-20'>
    <p className=' text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eos tempora laborum repudiandae cumque ducimus? In omnis ea impedit iusto et numquam neque accusamus voluptatibus hic unde? Quaerat, blanditiis! Nesciunt, assumenda a pariatur expedita non alias excepturi eveniet facere provident voluptate repellendus minima esse cupiditate aliquam deserunt harum illo unde.</p>
    <button onClick={goback} className='bg-zinc-200 border-1 rounded-md px-5 py-3 ml-150 '>Go Back</button>
   </div> </>
  

  )
}

export default Userdetails