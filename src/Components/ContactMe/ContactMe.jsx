import { fas } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

function ContactMe() {
    const [Email,setEmail]=useState(false)
    function copyEmail(email){
       setEmail(true)
       navigator.clipboard.writeText(email).then(()=>{
           setEmail(true)
           setTimeout(()=>setEmail(false),2000)
       })
    }
        return (
        <>
          <div className='w-3/4 mx-auto '>
            <div className='grid grid-cols-12'>
                <div className='col-span-6'>
                       <div class="text-sm font-normal text-purple-950 flex items-center w-fit px-2  my-4   text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800">
                  
                  <i className='fa fa-phone fa-sm me-2'></i>  Contact

                  
                </div>
                <p className='text-purple-950 text-2xl font-bold'>Let’s build something great.</p>
                <p className='text-purple-950 my-2'>I usually reply within 24h.</p>
                <div className='my-2 ms-2'>
                    <div className='flex  items-center justify-between w-3/4'> 
                        <p className='text-s text-gray-500'>Email</p>
                        {
                            Email?
                            <p className='text-s bg-gray-300 rounded-2xl  px-2 py-1'>!Copied</p>:
                            <p  onClick={()=>copyEmail("fm5130357@gmail.com")} className='text-s bg-gray-300 rounded-2xl  px-2 py-1'><i className='fa fa-copy'></i></p>
                        }
                        
                    </div>
                   <input  type='text' value="fm5130357@gmail.com" readOnly disabled></input>
                </div>
                </div>
                <div className='col-span-6'>
                    
                </div>
            </div>
          </div>
        </>
    )
}

export default ContactMe
