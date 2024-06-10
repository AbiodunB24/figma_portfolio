import React from 'react'
import './Touch.css'
import facebook from '../assets/icons8_facebook_f_48px 1.svg'
import twitter from '../assets/icons8_twitter_48px 1.svg'
import instagram from '../assets/icons8_instagram_old_60px 1.svg'

const Touch = () => {
  return (
    <div className=' text-white  mt-[-120px] pb-[100px] h-cover bg-black'>
        <div className='flex-col items-center justify-center mt-[100px] pt-[100px]' action="">
            <p className='touch  '>GET IN TOUCH
            <hr className=' h-1 w-[100px] bg-green-900 mt-2 border-none ' />
            </p>
            <h2 className='touch__text flex items-center justify-center pt-6'>Take a look at my exclusive stock photos at these awesome</h2> <h2 className='touch__text flex items-center justify-center'>marketplaces. You won’t be disappointed! </h2>
            
        </div>
        <div className='form gap-4  pt-[100px] text-[#858585] '>
                <input className='w-[644px] h-[83px] placeholder:pl-9 pl-9'   required placeholder='Name*' type="text" />
                <input className='w-[644px] h-[83px] placeholder:pl-9 pl-9'  required placeholder='Email*' type="text" />
                <input className='w-[644px] h-[83px] placeholder:pl-9 pl-9'   placeholder='Subject' type="text" />
                <textarea className='w-[644px] h-[312px] placeholder:pl-9 placeholder:pt-6 pl-9 '  required placeholder='Message*' type="text" />
                <button className='submit__button bg-green-700 rounded-md py-[23px] px-[81px]  '>SUBMIT</button>
                
            </div>
            <div className=''>
            <div className='flex items-center  justify-center'>
            <hr className='w-[1032px]  mt-[50px]' />
            </div>
            <div className='flex justify-center mt-9 gap-3'>
                <img className='w-[24px]' src={facebook} alt="" />
                <img className='w-[24px]' src={twitter} alt="" />
                <img className='w-[24px]' src={instagram} alt="" />
            </div>
            <div className='flex justify-center gap-9 mt-3'>
                <h1 className="Cyberphym text-white">Cyberphym<span className="photography">Photography</span></h1>
                <h1 className='photography'>© 2020 Privacy — Terms</h1>
                </div>
            </div>
          
        </div>
  )
}

export default Touch