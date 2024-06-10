import React from 'react'
import './Exclusive.css'
import behance from '../assets/icons8_behance_96px 1.svg'
import vimeo from '../assets/icons8_vimeo_96px 1.svg'
import pinterest from '../assets/icons8_pinterest_96px 1.svg'
import tumblr from '../assets/icons8_tumblr_96px 1.svg'
import basketball from '../assets/icons8_basketball_80px 1.svg'
import bg from '../assets/Rectangle 49.png'
import ellipse from '../assets/Ellipse 10.svg'
import quote from '../assets/icons8_quote_left_60px 1.svg'

const Exclusive = () => {
  return (
    <div className=' h-cover'>
        <div>
        <p className='exclusive mt-[750px] '>EXCLUSIVE CONTENTS
            <hr className='text-green-700 h-1 w-[100px] bg-green-900 mt-2 ' /></p>
            <h2 className='exclusive__text flex items-center justify-center   '>
            Take a look at my exclusive stock photos at these awesome</h2> <h2 className=' exclusive__text flex items-center justify-center'>marketplaces. You won’t be disappointed!
            </h2>
            <div className='flex items-center justify-center gap-[120px] mt-7'>
                <img className='w-[100px]' src={behance} alt="" />
                <img className='w-[100px]' src={vimeo} alt="" />
                <img className='w-[100px]' src={tumblr} alt="" />
                <img className='w-[100px]' src={pinterest} alt="" />
                <img className='w-[100px]' src={basketball} alt="" />
            </div>
            <div className='image__container mt-[100px]' >
                <img className='h-[534px] w-[1440px]  overflow-hidden' src={bg} alt="" />
                <div className=' overlay text-white flex items-center justify-center bg-[#319873] h-[90px] rounded-full w-[90px] mt-[-105px]'>
                    <img className='flex items-center justify-center' src={quote} alt="" />
                    </div>
                   <div className='overlay text-white mt-[40px]'>
                   <p className=' overlay__text'>Photography is the only language that can be </p> 
                    <p className='overlay__text flex items-center justify-center'>understood anywhere in the world.</p>
                    <p className='overlay__bruno flex items-center justify-center mt-8'>-Bruno Babey</p>
                   </div>
            </div>
        </div>
            
      
    </div>
  )
}

export default Exclusive