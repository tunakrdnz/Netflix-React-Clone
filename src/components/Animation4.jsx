import React from 'react'

export default function Animation4() {
  return (
    <>
     <div className='relative flex justify-center text-white text-center h-full box-border py-[4.5rem] px-0'>
        <div className='m-auto flex items-center text-center flex-row-reverse'>
            <div className='basis-2/4  w-full z-[1] text-left p-[0.375rem] '>
                <h2 className='m-0 text-5xl  font-[900]'>Create profiles for kids</h2>
                <p className='text-2xl font-normal mt-4 mx-0 mb-0'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
            <div className='basis-2/4 p-0  z-[1] '>
                <div className='relative'>
                    <img className='w-full' src="./images/animation4.png" alt="Kids" />
                </div>
            </div>
        </div>
        <div className='w-full h-2  bottom-[-0.5rem] absolute bg-zinc-800'></div>
     </div>
    </>
  )
}

