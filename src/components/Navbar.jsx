import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
       <header className='relative z-[1]'>
        <div className='flex items-center justify-between  font-medium h-[5.375rem] m-auto left-0 right-0 absolute max-w-[calc(100%-4rem)]'>
          <div  >
            <img className='h-8 lg:h-10 ml-0' src='/images/logo.jpg' alt='Logo'/>
          </div>
          <div >
              <select className='m-4 py-1 px-8 bg-black text-white ' name="LanguageSelect" id="">
                <option lang='tr' label='Türkçe' value="tr-TR">Türkçe</option>
                <option lang='en' label='English' value="en-TR">Türkçe</option>
              </select>
              <Link to='/login'>
                <button className='text-white bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded cursor-pointer'>Sign In</button>
              </Link>
          </div>
        </div>
       </header>
    </>
  );
}


