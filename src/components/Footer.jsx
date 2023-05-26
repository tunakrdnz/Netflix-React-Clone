import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className=" p-0 bg-transparent text-gray-300">
        <div className='w-full h-2  bottom-[-0.5rem]  bg-zinc-800'></div>
        <div className='py-[3.75rem] px-0 max-w-[80%] m-auto'>
            <div className='py-3'>
                 Questions? Call
                <a className='  m-0 p-0 text-base font-normal rounded-sm ml-1 underline' href="tel:0850-390-7444">0850-390-7444</a>
            </div>
            <div className='py-3'>
                <div className='mx-0 min-w-[18.375rem] box-border grid grid-flow-row gap-y-3'>
                    <ul className='grid  md:grid-cols-3 sm:grid-cols-2 m-0 px-0 py-3 box-border gap-y-3 leading-[1.3125rem] min-w-[18.375rem] cursor-pointer'>
                        <li className='underline'>FAQ</li>
                        <li className='underline' >Help Center</li>
                        <li className='underline'>Account</li>
                        <li className='underline'>Media Center</li>
                        <li className='underline'>Investor Relations</li>
                        <li className='underline' >Jobs</li>
                        <li className='underline'>Redeem Gift Cards</li>
                        <li className='underline'>Ways to Watch</li>
                        <li className='underline'>Terms of use</li>
                        <li className='underline'>Privacy</li>
                        <li className='underline'>Cookie Preferences</li>
                        <li className='underline'>Corporate Information</li>
                        <li className='underline'>Contact Us</li>
                        <li className='underline'>Speed Test</li>
                        <li className='underline'>Legal Notices</li>
                        <li className='underline'>Only on Netflix</li>
                    </ul>
                </div>
            </div>
            <div>
              Language Selection
            </div>
            <p className='text-[0.875rem] m-0 px-0 py-3'>Netflix Turkey</p>
        </div>
      </footer>
    </>
  )
}
