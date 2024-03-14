import React from 'react'

export const Interests = ({ items = [] }) => {
    return (
        <div className='xl:basis-1/2 xl:flex-row w-[246px] h-[244px] md:w-[354px] md:h-[372px]'>
            <h3 className='text-xl md:text-2xl'>
                Interests
            </h3>
            {items.map(({logo, title, content}) => 
                <div className='flex  h-[46px] mt-[24px] md:h-[68px] md:w-[372] md:mt-[44px] xl:mt-[50px]' key={title}>
                    <div className='flex items-center justify-center border-lavender border-2 rounded-full w-[44px] h-[44px] md:w-[60px] md:h-[60px]'key={logo}>
                        <img className='w-4 h-4 md:w-6 md:h-6 fill-lavender' src={logo} alt={logo} key={logo}/>
                    </div>
                    
                    <div className='ml-4 text-sm md:w-[277px] md:text-xl font-semibold' key={title}>
                        {title}
                        <div className='pt-1 md:pt-2 text-Montserrat-Regular font-normal whitespace-normal' key={content}>
                            {content}
                        </div>
                    </div>
                </div>)}  
        </div>)
  } 
