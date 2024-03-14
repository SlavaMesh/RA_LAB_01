import React from 'react';
import LogoItem from '../logo';
import NavItem from '../nav-item';
import burgerMenu from '../../../src/images/burger-menu.svg'
// import { ReactComponent as LogoItem } from '../../../src/images/Logo.svg';

export const Header = ({ items = [] }) => {
  return (
    <header className='flex bg-white w-full h-16 sm:pl-[15px] md:pl-[39px] xl:pl-[85px] md:space-x-8 allign-center items-center  border-b border-grey-light'>
          <LogoItem />
          <nav className='hidden md:flex w-full md:justify-end md:pr-[39px] xl:pr-[80px] space-x-4'>
            {items.map(({text}) => <NavItem key={text} text={text} />)}
          </nav>
          <div className='flex ml-auto cursor-pointer md:hidden pr-[10px]'>
            <img src={burgerMenu} alt="menu"/>
          </div> 
    </header>
  )
}
