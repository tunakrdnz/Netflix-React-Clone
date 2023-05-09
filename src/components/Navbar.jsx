import React from 'react'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between  font-medium p-4 w-full absolute'>
        <div  >
            <img className='h-8 lg:h-10 ml-0' src='/images/logo.jpg' alt='Logo'/>
        </div>
        <div >
              <select className='m-4 py-1 px-8 bg-black text-white ' name="LanguageSelect" id="">
                <option lang='tr' label='Türkçe' value="tr-TR">Türkçe</option>
                <option lang='en' label='English' value="en-TR">Türkçe</option>
              </select>
            <button className='text-white bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded cursor-pointer'>Sign In</button>
        </div>
    </div>
  );
}


