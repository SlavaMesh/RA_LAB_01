import React from 'react';
import { Title } from '../title';
import { PhotoMain } from '../photo-main/photo-main';
import {Description} from '../description';
import { Button } from '../button';

export const MainPage = () => {
  return (
    <div className='flex-column h-[568px] md:h-[520px] xl:h-[765px] md:flex md:mb-0 sm:ml-[15px] md:ml-[39px] xl:ml-[85px] relative'>
    <div className='basis-1/2 flex-row xl:pt-[162px]'>
      <Title />
      <Description>{ `Help you to create high-quality digital \nproducts that your clients will love and let \nyour business thrive` }</Description>
      <div className='sm:mt-[27px] sm:mb-0 md:mt-[44px]  xl:mt-[60px] xl:mb-[166px]'>
        <Button/>
      </div>
    </div>
    <PhotoMain />
  </div>
  )
};
