import React from 'react'

export default function Main() {
  return (
    <div className='w-full h-[675px] text-white'>
      <div className='w-full h-full'>
        <div className='w-full h-[675px] absolute bg-neutral-950/30  backdrop-brightness-50 '></div>
        <img className='w-full h-full object-cover' src="/images/hero.jpg" alt="Hero" />
      </div>
      <div>
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <div>
            <form action="">
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div>
                    <div>
                        <label htmlFor="email-area">Email address</label>
                        <input type="email" id="email-area" name="email" />
                    </div>
                    <button>
                        Get Started
                        <span>
                            <svg></svg>
                        </span>
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}




