import * as React from 'react'
import Image from 'next/image'

import Link from 'next/link'

import { FaBars, FaTimes, FaGit, FaLinkedin, FaYoutube, FaMedium } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export const Navbar = () => {
  const [nav, setNav] = React.useState(false)

  const handleMenuToggle = () => setNav(!nav)

  return (
    <div className='fixed w-full h[80px] flex justify-between items-center p-4 bg-black text-gray-100 z-50'>
      <Link href='/' className='hover:cursor-pointer'>
        <Image
          className='bg-slate-200 rounded-full'
          src='/jons-logo.png'
          alt='jonathanSanchez.dev'
          width={50}
          height={37}
          priority
        />
      </Link>

      {/* hamburger  */}
      <div onClick={handleMenuToggle} className='z-10'>
        {!nav ? (
          <FaBars size={25} className=' text-slate-500 hover:text-red-600 hover:scale-110 duration500 cursor-pointer' />
        ) : (
          <FaTimes size={20} className='hover:text-red-600 duration-300 cursor-pointer' />
        )}
      </div>

      {/* Menu */}
      <div
        className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center pt-40'}>
        <ul>
          <li className='py-6 text-4xl hover:text-red-600 hover:ml-[-10px] duration-300'>
            <Link href='/#top' onClick={() => setNav(false)}>
              HOME
            </Link>
          </li>
          <li className='py-6 text-4xl hover:text-red-600 hover:ml-[-10px] duration-300'>
            <Link href='/#about' onClick={() => setNav(false)}>
              ABOUT
            </Link>
          </li>
          <li className='py-6 text-4xl hover:text-red-600 hover:ml-[-10px] duration-300'>
            <Link href='/#skills' onClick={() => setNav(false)}>
              SKILLS
            </Link>
          </li>
          {/* <li className='py-6 text-4xl hover:text-red-600 hover:ml-[-10px] duration-300'>
            <Link href='/work' onClick={() => setNav(false)}>
              WORK
            </Link>
          </li> */}
          <li className='py-6 text-4xl hover:text-red-600 hover:ml-[-10px] duration-300'>
            <Link href='tutorials' onClick={() => setNav(false)}>
              TUTORIALS
            </Link>
          </li>
          <li className='py-6 text-4xl hover:text-red-600 hover:ml-[-10px] duration-300'>
            <Link href='/#contact' onClick={() => setNav(false)}>
              CONTACT ME
            </Link>
          </li>
        </ul>
      </div>

      {/* social icons  */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900'>
            <a
              href='https://www.linkedin.com/in/jonathansanchez199/'
              target='_blank'
              className='flex justify-between items-center w-full text-gray-500'
              rel='noreferrer'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900'>
            <a
              href='https://github.com/jonathans199'
              className='flex justify-between items-center w-full text-gray-500'
              rel='noreferrer'
              target='_blank'>
              Github <FaGit size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900'>
            <a
              href='https://www.youtube.com/@jonsthewebguy'
              className='flex justify-between items-center w-full text-gray-500'
              rel='noreferrer'
              target='_blank'>
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900'>
            <a
              href='https://medium.com/@jonathans199'
              className='flex justify-between items-center w-full text-gray-500'
              rel='noreferrer'
              target='_blank'>
              Medium <FaMedium size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900'>
            <a
              href='mailto:jonathans199@gmail.com'
              className='flex justify-between items-center w-full text-gray-500'
              rel='noreferrer'
              target='_blank'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-900'>
            <a
              href='#'
              className='flex justify-between items-center w-full text-gray-500'
              rel='noreferrer'
              target='_blank'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}