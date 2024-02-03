import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-around p-2 bg-[#343a40]'>
      <p className='text-white text-lg font-semibold'>Start Bootstrap</p>
      <div className='flex gap-5 text-white'>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Header