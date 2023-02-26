"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image
          src="/../public/assets/logo.png"
          alt="AN web-developer logo"
          width={150}
          height={50}
          priority
        />
        <ul className='hidden md:flex'>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
          </Link>
        </ul>

        <div
          className='md:hidden'
          onClick={handleShowMobileMenu}
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className={showMobileMenu ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/60' : ''}>
        <div className={
          showMobileMenu
            ? 'fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image
                src="/../public/assets/logo.png"
                alt="AN web-developer logo"
                width={100}
                height={50}
                priority
              />
              <div
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                onClick={handleShowMobileMenu}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Project</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
          </div>
          <div className='pt-40'>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 easy-in duration-300'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 easy-in duration-300'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 easy-in duration-300'>
                <IoMailOpen />
              </div>
              <div className='rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 easy-in duration-300'>
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
