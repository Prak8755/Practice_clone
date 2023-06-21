import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Authentication from './Authentication';


const ForgotPassword = () => {


const [email,setEmail]=useState('');

  
  return (
   <>
  <div className='flex justify-center items-center mt-[20%]'>
     <div className='bg-grey-200 w-[100%]'>
      <form className='m-auto '>
  
        <div className='mt-10 flex gap-6'>
        <input className='border border-green-500 w-[400px] ' placeholder='email'type='email' id='name'  value={email} onChange={function(e){
setEmail(e.target.value)
        }}/>
      
     
        </div>
      </form>

      <Link to='/signIn' className='text-2xl m-4' > have an account already?</Link>
      <Link to='/signUp' className='text-2xl m-4'>sign in</Link>
      <button className='px-10 py-2 border'>send Reset Email</button>
      <Authentication/>
     </div>
    
  </div>

   </>
  )
}
//visit unsplash for images 
//install react-icons for icons

export default ForgotPassword;