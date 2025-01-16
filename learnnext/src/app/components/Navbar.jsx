import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center  bg-transparent fixed  w-full z-20 p-5'>
      <Image src={logo} className='w-44' alt='image logo' />
      <ul className='flex items-center gap-4 bg-white text-black py-3 px-5 rounded-xl '>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
        <li>home</li>
      </ul>
      <a href="" className="bg-slate-700 text-white py-2 px-3  border rounded-md">enquire now</a>
    </div>
  )
}

export default Navbar