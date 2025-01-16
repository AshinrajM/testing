import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center  bg-transparent fixed  w-full z-20 py-8 px-10'>
      <Image src={logo} className='w-44' alt='image logo' />
      <ul className='flex items-center gap-5 bg-white text-black p-1 rounded-xl '>
        <a className='bg-blue-500  rounded-lg py-2 px-4 text-sm text-white '>Home</a>
        <a className=' py-1 px-4 text-md'>International</a>
        <a className=' py-1 px-4 text-md'>home</a>
        <a className=' py-1 px-4 text-md'>home</a>
        <a className=' py-1 px-4 text-md'>home</a>
        <a className=' py-1 px-4 text-md'>home</a>

      </ul>
      <a href="" className="bg-slate-700 text-white py-2 px-3  border-2 border-rose-700 rounded-xl">Enquire now</a>

    </div>
  )
}

export default Navbar