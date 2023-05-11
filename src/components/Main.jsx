import React from 'react'

export default function Main() {
  return (
    <div className='w-full h-[675px] text-white'>
      <div className='w-full h-full'>
        <div className='w-full h-[675px] absolute bg-color-on-image '></div>
        <img className='w-full h-full object-cover' src="/images/hero.jpg" alt="Hero" />
    </div>
      <div className='absolute w-full top-[40%] flex  flex-col items-center text-center'>
        <div>
           <h1 className='text-5xl font-extrabold'>Unlimited movies, TV shows, and more</h1>
           <p className=' text-lg font-medium m-4 '>Watch anywhere. Cancel anytime.</p>
        </div>
        <div>
            <form action="">
                <h3 className='text-lg font-normal'>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='flex flex-row items-start text-left relative w-full m-4'>
                    <div className='flex flex-auto relative flex-wrap align-text-top w-auto '>
                        <label className='absolute block z-[1] whitespace-nowrap overflow-hidden text-slate-700 leading-6 inset-x-4 top-4' htmlFor="email-area">Email address</label>
                        <div className='fill-current  font-normal text-base p-0 min-w-[200px] w-full color text-white flex items-center text-left relative gap-0.5 leading-[100%] z-0'>
                          <input  className='w-full text-transparent leading-6 min-h-[16px] min-w-[16px] bg-transparent border-solid border-0 border-transparent' type="email" id="email-area" name="email" />
                        </div>
                    </div>
                    <button className=' flex items-center m-0 justify-center rounded cursor-pointer relative w-auto align-text-top text-2xl font-medium h-14 bg-red-600 overflow-visible hover:bg-red-700 px-3 min-h-[56px] duration-200'>
                        Get Started
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}




