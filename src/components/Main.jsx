import React from 'react'

export default function Main() {
  return (
    <div className='w-full h-[675px] text-white min-h-[43.75rem] pt-[9.875rem] px-0 pb-16'>
      <div className='w-full h-full absolute left-0 top-0'>
        <div className='w-full h-full relative overflow-hidden'>
          <img className='w-full h-full object-cover ' src="https://assets.nflxext.com/ffe/siteui/vlv3/76c10fc9-7ccd-4fbf-bc59-f16a468921ca/57efc9c1-3482-467a-8a78-42c2a0114ad3/TR-en-20230529-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Hero" />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        </div>
      </div>
      <div className='absolute w-full top-[40%] flex  flex-col items-center text-center mx-auto'>
        <div>
           <h1 className='text-5xl font-extrabold'>Unlimited movies, TV shows, and more</h1>
           <p className=' text-2xl font-medium mt-4 mx-0 mb-0 '>Watch anywhere. Cancel anytime.</p>
        </div>
        <div className='mt-6 mx-0 mb-0'>
          <div className='text-center box-border max-w-5xl py-0 px-8 my-0 mx
          ,-auto'>
              <form action="">
                           <h3 className='text-xl font-normal'>Ready to watch? Enter your email to create or restart your membership.</h3>
                           <div className='flex flex-row items-start text-left relative w-full mt-4 mx-auto mb-0 max-w-[36.625rem]'>
                            <div className='flex flex-auto relative flex-wrap align-text-top w-auto '>
                             <label className='absolute block z-[1] whitespace-nowrap overflow-hidden text-slate-300 leading-6 inset-x-4 top-4' htmlFor="email-area">Email address</label>
                             <div className='fill-current  font-normal text-base p-0 min-w-[200px] w-full color text-white flex items-center text-left relative gap-0.5 leading-[100%] z-0'>
                             <input  className='w-full text-transparent leading-6 min-h-[16px] min-w-[16px] bg-transparent border-solid border-0 border-transparent pt-6 px-4 pb-2' type="email" id="email-area" name="email" />
                             <div className='border-[1px] border-solid rounded bg-neutral-900 border-neutral-700 absolute flex items-center justify-center left-0 right-0 top-0 bottom-0 z-[-1] text-transparent'></div>
                        </div>
                    </div>
                    <button className=' flex items-center m-0 ml-2 justify-center rounded cursor-pointer relative w-auto align-text-top text-2xl font-medium h-14 bg-red-600 overflow-visible hover:bg-red-700 py-3 px-6 min-h-[56px] duration-200'>
                        Get Started
                    </button>
                </div>
              </form>
          </div>
        </div>
      </div>
      <div className='w-full h-2  bottom-[-0.5rem] absolute bg-zinc-800'></div>
    </div>
  )
}




