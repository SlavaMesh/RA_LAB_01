import React, { useState } from 'react'

import logo from "../../../src/images/Send.svg" 

const borderStyles = 'border-[3px] border-[#CABFFD]'

export const Button = ({text, error}) => {
  const [clicked, setClicked] = useState(false)
  return (
    <div>
      <button 
      className= {`flex items-center justify-center Montserrat-SemiBold text-sm md:text-base w-[140px] h-[40px] md:w-[188px] md:h-[50px] rounded-full  ${clicked && borderStyles} bg-lavender text-white hover:bg-[#6C2BD9]  disabled:bg-grey-light disabled:text-grey-dark disabled:cursor-not-allowed`} 
      disabled={error}
      onClick={() => setClicked(!clicked)}>
        {text ? text: 'Get in touch'} <img className='pl-3 fill-white' src={logo} />
      </button>
    </div>
  )
}
