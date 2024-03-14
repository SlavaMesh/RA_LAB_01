import React from 'react'

export const Education = ({items = []}) => {
  return (
    <div className='w-[290px] md:w-[714px] md:h-[428px] xl:pl-4 xl:basis-1/2 xl:flex-row mt-[48px] md:mt-[80px] xl:mt-0 mr-[85px] xl:mb-[100px]'>
      <h3 className='text-xl whitespace-pre md:text-2xl pb-1'>
        Education & Experience
      </h3>
      {items.map(({date, position, company}) => 
                <div className='flex pt-[40px] border-b-[1px] border-[#E5E7EB] last:border-b-0 xl:last:mb-8' key={date}>
                  <div className='w-[120px] md:w-[152px] flex pl-0 text-sm md:text-xl font-normal'>
                    {date}
                  </div>
                  <div className='pl-1 md:pl-4 text-black text-sm md:text-xl font-semibold pb-6' key={position}>
                        {position}
                        <div className='font-normal pb-[4px]' key={company}>
                            {company}
                        </div>
                  </div>
                </div>)} 
    </div>
  )
}
