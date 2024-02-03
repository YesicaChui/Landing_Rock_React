import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around p-2 bg-[#343a40]'>
      <p className='text-white text-lg font-semibold'>Start Bootstrap</p>
      <div className='flex gap-5 text-white '>
        <p className='cursor-pointer hover:font-bold hover:text-lg'>Home</p>
        <p className='cursor-pointer hover:font-bold hover:text-lg'>About</p>
        <p className='cursor-pointer hover:font-bold hover:text-lg'>Services</p>
        <p className='cursor-pointer hover:font-bold hover:text-lg'>Contact</p>
      </div>
    </div>
  )
}

export default Header