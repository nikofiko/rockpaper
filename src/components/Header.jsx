import React from 'react'
import logo from '/assets/logo.svg'

const Header = () => {
  return (
    <div className='flex justify-center pt-12 px-8'>
        <div className='flex font-barlow md:justify-center items-center justify-between w-full md:gap-[337px] max-w-[691px] border-2 py-4 px-6 rounded-2xl border-gray600'>
            <div>
                <img className='w-[81px] sm:w-full' src={logo} alt="" />
            </div>
            <div className='flex flex-col items-center bg-white px-[23px] sm:px-12 py-[10px] sm:py-4 rounded-2xl'>
                <p className='font-semibold text-blue700 tracking-[2.5px] text-[10px] sm:text-base'>SCORE</p>
                <h2 className='text-[40px] sm:text-[64px] text-gray600 font-bold leading-12 sm:leading-18'>12</h2>
            </div>
        </div>
    </div>
    
  )
}

export default Header
