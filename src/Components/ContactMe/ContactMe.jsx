import { fas } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import{z} from 'zod'

import { zodResolver } from '@hookform/resolvers/zod';
function ContactMe() {
    const [Email,setEmail]=useState(false)
    const [Loading,setLoading]=useState(false)
    const [Phone,setPhone]=useState(false)
    const scheme=z.object({
    name:z.string().nonempty("Name is required").min(3,"Name must be at least 3 characters"),
    email:z.email().nonempty("Email is required").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Please enter valid email"),
    message:z.string().nonempty("Message is required"),
   })
    function copyEmail(email){
       navigator.clipboard.writeText(email).then(()=>{
           setEmail(true)
           setTimeout(()=>setEmail(false),2000)
       })
    }
    const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
    "name": "",
    "email":"",
    "message":"",
    },
    resolver:zodResolver(scheme)
   })
    function copyPhone(email){
      
       navigator.clipboard.writeText(email).then(()=>{
           setPhone(true)
           setTimeout(()=>setPhone(false),2000)
       })
    }
    async function sendMail(values){
     setLoading(true)
    const res = await fetch("https://formsubmit.co/ajax/fm5130357@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    setLoading(false)
    console.log(data);
    if(data.success){
        console.log(150)
    }
    
    }
        return (
        <>
           <div  id='contact' className='my-20 px-4'>
            <p className=' text-3xl lg:text-5xl  text-center text-purple-950 font-bold'>Contact Me</p>
            <div className='grid p-10 grid-cols-12 gap-2 my'>
               
                <div className='md:col-span-6 col-span-12 p-6 bg-purple-200/30 backdrop-blur-2xl shadow-lg rounded-2xl'>
                       <div class="text-sm font-normal text-purple-950 flex items-center w-fit px-2  my-4   bg-white rounded-lg shadow-sm ">
                  
                  <i className='fa fa-phone fa-sm me-2'></i>  Contact

                  
                </div>
                <p className='text-purple-950 md:text-2xl text-sm font-bold'>Let’s build something great.</p>
                <p className='text-purple-950 my-2 md:text-sm text-xs'>I usually reply within 24h.</p>
                <div className='my-2 ms-2'>
                    <div className='flex  items-center justify-between w-full md:w-3/4'> 
                        <p className='text-s text-gray-500'>Email</p>
                        {
                            Email?
                            <p className='text-s bg-gray-300 rounded-2xl  px-2 py-1'>!Copied</p>:
                            <p  onClick={()=>copyEmail("fm5130357@gmail.com")} className='text-s bg-gray-300 rounded-2xl  px-2 py-1'><i className='fa fa-copy'></i></p>
                        }
                        
                    </div>
                   <input  type='text' className=' text-xs md:text-mds' value="fm5130357@gmail.com" readOnly disabled></input>
                </div>
                 <div className='my-2 ms-2'>
                    <div className='flex  w-full md:w-3/4 items-center justify-between'> 
                        <p className='text-s text-gray-500'>Phone</p>
                        {
                            Phone?
                            <p className='text-s bg-gray-300 rounded-2xl  px-2 py-1'>!Copied</p>:
                            <p  onClick={()=>copyPhone("01005230670")} className='text-s bg-gray-300 rounded-2xl  px-2 py-1'><i className='fa fa-copy'></i></p>
                        }
                        
                    </div>
                   <input  type='text'className=' text-xs md:text-mds'  value="01005230670" readOnly disabled></input>
                </div>
                 <div className='my-2 ms-2'>
    
                        <p className='text-s text-gray-500'>Location</p>
                        <p className=' text-xs md:text-md'>Qalyubia,El-Khanka</p>
                   
                </div>
                </div>
                    <div className='md:col-span-6 p-6 col-span-12   shadow-md rounded-2xl '>
                         <form onSubmit={handleSubmit(sendMail)}>
                            <div>
                               <label htmlFor='name' className='text-sm text-purple-950'>Your Name</label>
                               <input id="name"  name='name' type="text" {...register('name')} placeholder='ex: Fatma Mourad' className='w-full py-1 px-3 border-1 mt-1 border-gray-500 rounded-2xl'></input>
                               {errors.name&&<p className='text-sm text-red-600 ms-5'>{errors.name.message}</p>}
                            </div>
                              <div className='my-2'>
                               <label htmlFor='email' className='text-sm text-purple-950'>Email</label>
                               <input id="email"  name='email' type="text" {...register('email')} placeholder='ex:Fatma120@gmail.com' className='w-full py-1 px-3 border-1 mt-1 border-gray-500 rounded-2xl'></input>
                                {errors.email&&<p className='text-sm text-red-600 ms-5'>{errors.email.message}</p>}
                            </div>

                            <div className='my-2'>
                               <label htmlFor='message' className='text-sm text-purple-950'>Message</label>
                               <textarea id="message"  name='message' type="text" {...register('message')} placeholder='Message' className='w-full py-1 px-3 border-1 mt-1 border-gray-500 rounded-2xl'></textarea>
                                {errors.message&&<p className='text-sm text-red-600 ms-5'>{errors.message.message}</p>}
                            </div>
            { !Loading?<button type='submit' className='p-1 bg-purple-800/50 red-500 w-full rounded-2xl'>Send Message</button>:
            <button  className='p-1 bg-purple-800/50 red-500 w-full rounded-2xl cursor-none'><i className='fa-solid fa-spinner fa-spin'></i></button>}
                              
                         </form>
                </div>
            </div>
            </div>
         
        </>
    )
}

export default ContactMe
