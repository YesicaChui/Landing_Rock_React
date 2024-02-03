import React from 'react'
import imgBanner from "../assets/header.jpg"
// import "./Banner.css"
const Banner = () => {
  return (
    <div className='relative  h-[250px] text-center  flex flex-col justify-center mb-4'>

      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]  bg-center bg-cover brightness-[60%] " style={{ backgroundImage: `url(${imgBanner}) ` }}>
      </div>
      <p className='text-4xl text-white font-[600]'>One Page Wonder</p>
      <p className='text-xl  text-white '>Will Rock Your Socks Of</p>
    </div>
  )
}

export default Banner