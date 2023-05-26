import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className=" p-0 bg-transparent text-gray-300">
        <div className='w-full h-2  bottom-[-0.5rem]  bg-zinc-800'></div>
        <div className='py-[3.75rem] px-0 max-w-[calc(100% - 4rem)] m-auto'>
            <div className='py-3'>
                 Questions? Call
                <a className='  m-0 p-0 text-base font-normal rounded-sm ml-1 underline' href="tel:0850-390-7444">0850-390-7444</a>
            </div>
            <div className='py-3'>
                <div className='mx-0 min-w-[18.375rem] box-border grid auto-rows-auto gap-y-3'>
                    <ul className='grid m-0 px-0 py-3'>
                        <li>FAQ</li>
                        <li>Help Center</li>
                        <li>Account</li>
                        <li>Media Center</li>
                        <li>Investor Relations</li>
                        <li>Jobs</li>
                        <li>Redeem Gift Cards</li>
                        <li>Ways to Watch</li>
                        <li>Terms of use</li>
                        <li>Privacy</li>
                        <li>Cookie Preferences</li>
                        <li>Corporate Information</li>
                        <li>Contact Us</li>
                        <li>Speed Test</li>
                        <li>Legal Notices</li>
                        <li>Only on Netflix</li>
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
