import React from 'react'
import background from '../../images/unsplash_LeG68PrXA6Y.svg' 
import background2 from '../photo-main/photo-main-common.svg'
import backgroundSm from '../../images/photo_2_composite_sm.svg'
import backgroundMd from '../../images/photo_2_composite_md.svg'


export const PhotoMain = () => {
  return (
    // <div className='v-[1478px] h-full bg-auto bg-no-repeat bg-center' style={{ backgroundImage: `url(${background})` }}>
    //   <img className='mt-[65px] h-full' src="../../../src/images/photo-1.svg" alt="photo_main" />
    // </div>
    <div>
    <div className='hidden xl:flex absolute right-0 top-5 overflow-x-hidden'>
      <img className='overflow-hidden' src={background2} alt="bg" />
    </div>

    <div className='sm:hidden xl:hidden md:flex absolute right-0 bottom-16 mb-0 overflow-x-hidden'>
      <img className='overflow-hidden' src={backgroundMd} alt="bg" />
    </div>

    <div className='md:hidden absolute h-full right-0 -bottom-40 overflow-x-hidden'>
      <img className='overflow-hidden' src={backgroundSm} alt="bg" />
    </div>
    </div>
  )
}
