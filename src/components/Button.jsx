import React from 'react'

const Button = () => {
  return (
    <button type='button'
      className={`
    py-4 px-6  mt-10
    bg-blue-gradient 
    font-poppins font-medium 
    text-[18px] text-primary outline-none 
    rounded-[5px]
    transition-element
    hover:scale-90`}>
      Get Started
    </button>
  )
}

export default Button