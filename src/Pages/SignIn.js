import React, { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Authentication from './Authentication';
const Sign = () => {

  const [formData,setFormData]=useState({
    email:'',
    password:''
  });
  const {email,password}=formData;

  //for eye button when we click on this it should show us password vice versa
const [showPassword,setShowPassword]=useState(true);
  
  return (
   <>
  <div className='flex justify-center items-center mt-[20%]'>
     <div className='bg-grey-200 w-[100%]'>
      <form className='m-auto '>

        <input className='border border-green-500 w-[400px] ' placeholder='email'type='email' id='email'  value={email} onChange={function(e){
setFormData({...formData,email:e.target.value,[e.target.id]:e.target.value})
        }}/>
        <div className='mt-10'>
        <input className='border border-green-500 w-[400px]'type={showPassword?'password':'text'} id='password' placeholder='Password'  value={password} onChange={function(e){
setFormData({...formData,password:e.target.value,[e.target.id]:e.target.value})
        }}/>
      {showPassword?
      <AiFillEye className='text-2xl' onClick={function(){
        setShowPassword(!showPassword)
       }}/>:
        <AiFillEyeInvisible className='text-2xl' onClick={function(){
        setShowPassword(!showPassword)
       }}/>}
        </div>
      </form>

      <Link to='/signUp' className='text-2xl m-4' > Dont have an account ,create one</Link>
      <Link to='/forgotPassword ' className='text-2xl m-4'>Forgot Password</Link>
      <button className='px-10 py-2 border'>Log in</button>
      <Authentication/>
     </div>
    
  </div>

   </>
  )
}
//visit unsplash for images 
//install react-icons for icons

export default Sign