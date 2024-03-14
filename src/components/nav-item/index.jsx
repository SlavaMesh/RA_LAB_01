import React from 'react'

export default function NavItem({text=''}) {
  return (
    <div>
        <span className='h-6 w-full pr-2  text-grey-dark hover:text-lavender cursor-pointer text-Montserrat-SemiBold text-base  font-semibold'>{text}</span>
    </div>
  )
}
