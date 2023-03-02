"use client"

import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classNames from 'classnames';

import { Logo } from './logo';
import { IconItems } from '@iconItems';
import { MenuItems } from '@nav-bar/menuItems';

export const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navigationShadow, setNavigationShadow] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavigationShadow(true);
      } else {
        setNavigationShadow(false);
      }
    }

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <header className={classNames('fixed w-full h-20 z-[100] bg-[#ecf0f3] dark:bg-stone-900 dark:border-b dark:border-stone-600 ', { 'shadow-xl': navigationShadow })}>
      <div className='flex justify-between items-center w-full h-full px-6 md:px-12 2xl:px-28'>
        <Logo handleShowMobileMenu={handleShowMobileMenu} />
        <ul className='hidden md:flex'>
          <MenuItems className={'ml-10 text-sm uppercase hover:border-b'} />
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
            ? 'fixed left-0 top-0 w-[85%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-6 ease-in duration-500 flex flex-col'
            : 'fixed left-[-110%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Logo handleShowMobileMenu={handleShowMobileMenu} />

              <div
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer border-b border-gray-300 my-4'
                onClick={handleShowMobileMenu}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'></div>
          </div>
          <div className='flex flex-col flex-grow'>
            <ul className='uppercase'
            >
              <MenuItems className={'py-3 text-sm'} onClick={handleShowMobileMenu} />
            </ul>
          </div>
          <div>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <IconItems />
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}
