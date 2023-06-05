import React from 'react'

export default function FaqCard() {
  return (
    <>
    <div className='text-white py-16 px-0'>
        <div className='flex flex-col m-auto items-center text-center max-w-[calc(80%)]'>
            <div className='basis-[50%] p-0 z-[1] w-full'>
                <h2 className='text-5xl font-[900] m-0'>Frequently Asked Questions</h2>
                <div className='my-6 mx-0'>
                    <ul className='list-none p-0 m-0 text-2xl font-normal'>
                        <li className='list-none p-0 indent-0 mx-0 mt-0 mb-2'>
                            <h3 className='flex m-0 mb-[0.0625rem] relative bg-neutral-800 text-neutral-50 transition duration-200 hover:bg-neutral-600'>
                                <button className='p-6 appearance-none box-content m-0 no-underline w-full flex items-center text-left justify-between'>
                                    <span>What is Netflix?</span>
                                    <svg className='w-10 h-10 '  xmlns="http://www.w3.org/2000/svg"  ><path  fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li className='list-none p-0 indent-0 mx-0 mt-0 mb-2'>
                            <h3 className='flex m-0 mb-[0.0625rem] relative bg-neutral-800 text-neutral-50 transition duration-200 hover:bg-neutral-600'>
                                <button className='p-6 appearance-none box-content m-0 no-underline w-full flex items-center text-left justify-between'>
                                    <span>How much does Netflix cost?</span>
                                    <svg className='w-10 h-10 '  xmlns="http://www.w3.org/2000/svg"  ><path  fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li className='list-none p-0 indent-0 mx-0 mt-0 mb-2'>
                            <h3 className='flex m-0 mb-[0.0625rem] relative bg-neutral-800 text-neutral-50 transition duration-200 hover:bg-neutral-600'>
                                <button className='p-6 appearance-none box-content m-0 no-underline w-full flex items-center text-left justify-between'>
                                    <span>Where can I watch?</span>
                                    <svg className='w-10 h-10 '  xmlns="http://www.w3.org/2000/svg"  ><path  fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li className='list-none p-0 indent-0 mx-0 mt-0 mb-2'>
                            <h3 className='flex m-0 mb-[0.0625rem] relative bg-neutral-800 text-neutral-50 transition duration-200 hover:bg-neutral-600'>
                                <button className='p-6 appearance-none box-content m-0 no-underline w-full flex items-center text-left justify-between'>
                                    <span>How do I cancel?</span>
                                    <svg className='w-10 h-10 '  xmlns="http://www.w3.org/2000/svg"  ><path  fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li className='list-none p-0 indent-0 mx-0 mt-0 mb-2'>
                            <h3 className='flex m-0 mb-[0.0625rem] relative bg-neutral-800 text-neutral-50 transition duration-200 hover:bg-neutral-600'>
                                <button className='p-6 appearance-none box-content m-0 no-underline w-full flex items-center text-left justify-between'>
                                    <span>What can I watch on Netflix?</span>
                                    <svg className='w-10 h-10 '  xmlns="http://www.w3.org/2000/svg"  ><path  fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                        <li className='list-none p-0 indent-0 mx-0 mt-0 mb-2'>
                            <h3 className='flex m-0 mb-[0.0625rem] relative bg-neutral-800 text-neutral-50 transition duration-200 hover:bg-neutral-600'>
                                <button className='p-6 appearance-none box-content m-0 no-underline w-full flex items-center text-left justify-between'>
                                    <span>Is Netflix good for kids?</span>
                                    <svg className='w-10 h-10 '  xmlns="http://www.w3.org/2000/svg"  ><path  fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path></svg>
                                </button>
                            </h3>
                        </li>
                    </ul>
                    <div className='mt-[2.85rem]'>
                      <div className='text-center box-border max-w-[61rem] py-0 px-8 my-0 mx-auto'>
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
            </div>
        </div>
        <div className='w-full h-2  bottom-[-0.5rem] absolute bg-zinc-800'></div>
    </div>
    </>
  )
}

