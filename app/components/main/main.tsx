"use client"

import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center' >
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let&apos;s build something legendary together
          </p>
          <h1
            className='py-4 text-gray-700'
          >
            Hi, I&apos;m
            <span className='text-[#5651e5]'> Andriy</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            A Front-End Web Developer
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.
          </p>
          <div className='flex item-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300'>
              <FaGithub />
            </div>
            <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300'>
              <IoMailOpen />
            </div>
            <div className='rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300'>
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
