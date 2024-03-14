import React, { Children } from 'react'

export const Description = ({children}) => {
  return (
    <div className='mt-[36px] xl:mt-[85px] md:w-[446px] md:h-[106px] xl:h-[114px] xl:mb-0 text-grey-dark'>
      <hr className='h-1 w-[25px] bg-lavender border-0'/>
      <div className='mt-6 mb-[28px] h-[64px] w-[290px] md:w-[446px] whitespace-normal xl:whitespace-pre-line xl:mb-14 md:Montserrat-Regular text-sm md:text-xl text-grey-dark '>
        {children}
      </div>
    </div>
  )
}
