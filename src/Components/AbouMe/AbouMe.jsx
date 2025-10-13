import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer' 

function AbouMe() {
    const skills=["HTML","CSS","JS","BootStarp","TypeScript","Next.js","ShadCN UI","React.js","Tailwind CSS","GitHub"]
  
  const { ref, inView } = useInView({
    triggerOnce:true,
    threshold: 0.1,     
  })
  const { ref:ref1, inView:inView1} = useInView({
     triggerOnce:true,
    threshold: 0.1,     
  })

  return (
    <>
    <div>
        <p className=' text-5xl text-center text-purple-950 font-mono'>About Me</p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="p-4 rounded-lg shadow-md"
      >
    <p className=' w-3/4 mx-auto text-center text-lg mt-5 text-purple-950'>Frontend Developer specializing in React.js, Next.js, and Firebase, with hands-on experience building scalable, responsive web applications. Skilled in developing interactive dashboards, AI-integrated tools, and map-based systems, with a focus on clean code and seamless user experiences</p>
      </motion.div>

    <div className='grid grid-cols-12 gap-5'>
       <div
        className="p-4   md:col-span-6 col-span-12 rounded-lg shadow-md flex-1"
      >
        <motion.div 
          ref={ref1}
        initial={{ opacity: 0, x: -100 }}
        animate={inView1 ? { opacity: 1, x: 0 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='p-3 rounded-2xl shadow-md my-3'> 
            <p>🎯 Experience</p>
            <p className='w-full ms-5 md:text-xl text-sm'>2 years building modern web applications</p>
        </motion.div>
        
 <motion.div 
          ref={ref1}
        initial={{ opacity: 0, x: -100 }}
        animate={inView1 ? { opacity: 1, x: 0 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='p-3 shadow-md rounded-2xl my-3'> 
            <p>🎯 Specialization</p>
            <p className='w-full ms-5 md:text-xl text-sm'>ReactJs,NesxtJs</p>
        </motion.div>


         <motion.div 
          ref={ref1}
        initial={{ opacity: 0, x: -100 }}
        animate={inView1 ? { opacity: 1, x: 0 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='p-3 shadow-md my-3 rounded-2xl'> 
            <p>🎯 Focus</p>
            <p className='w-full ms-5 md:text-xl text-sm'>User Experience & Modern Web Technologies</p>
        </motion.div>


      </div>
       <div ref={ref} className="p-4  md:col-span-6 place-content-center place-items-center col-span-12 rounded-lg shadow-md flex-1"
            
      >
       
    <p className=' text-center text-purple-950'>Favorite Technologies</p>
     <div className='grid grid-cols-12  gap-3 place-content-center place-items-center'>
     {skills.map((item)=>
         <motion.p  
        initial={{ opacity: 0, x: -50 }}
        animate={inView1 ? { opacity: 1, x: 0 } : {}} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='md:col-span-3 col-span-6 md:text-lg text-sm p-2 bg-purple-200 mt-2 rounded-2xl w-full '>
            {item}
         </motion.p>
     )}
     </div>
      </div>
</div>

      </div>
    </>
  )
}

export default AbouMe
