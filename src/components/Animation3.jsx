import React from 'react'

export default function Animation3() {
  return (
    <>
      <div className='relative flex justify-center text-white text-center h-full box-border py-[4.5rem] px-0'>
    <div className='m-auto flex flex-row items-center text-center'>
        <div className='basis-2/4  w-full z-[1] text-left p-[0.375rem] '>
            <h2 className='m-0 text-5xl  font-[900]'>Watch everywhere</h2>
            <p className='text-2xl font-normal mt-4 mx-0 mb-0'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className='basis-2/4 p-0  z-[1] '>
            <div className='relative'>
                <img className='w-full' src="./images/animation3device-pile.png" alt="Kids" />
            </div>
        </div>
    </div>
    <div className='w-full h-2  bottom-[-0.5rem] absolute bg-zinc-800'></div>
      </div>
    </>
  )
}

