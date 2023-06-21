import React, { useState } from 'react'
import {  useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Header = () => {
    const location=useLocation();

    function underLine(route){
     if(route===location.pathname){
      return(true)
     }
    }

  return (
    <>
    <div className='border px-[100px]'>
        <div className='flex justify-between items-center'>
            <div><img alt='logo' className='h-14' src='https://static.vecteezy.com/system/resources/previews/003/092/544/original/e-commerce-logo-with-pointer-and-shopping-bag-free-vector.jpg'/></div>
            <div className='flex gap-6'>
                <Link to='/' className={`border-b-4 py-4 border-b-transparent ${underLine('/') && 'border-b-pink-700'}`}>Home</Link>
                <Link to='/profile' className={`border-b-4 py-4 border-b-transparent ${underLine('/profile') && 'border-b-pink-700'} `}>Profile</Link>
                <Link to='signIn' className={`border-b-4 py-4 border-b-transparent ${underLine('/signIn') && 'border-b-pink-700'} `}>Sign in</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header