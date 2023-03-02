"use client"

import Link from 'next/link';
import { IconContext } from 'react-icons';

import { iconContacts } from 'contacts';

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          © 2023 Andriy Nosov<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 sm:gap-10	mb-1">
          {iconContacts.map((iconContact, index) => (
            <Link
              key={index}
              href={iconContact.title}
              target="_blank"
              rel="noreferrer noopener"
              className='rounded-full shadow-lg shadow-grey-400 p-5 cursor-pointer hover:scale-110 easy-in duration-300'
            >
              <IconContext.Provider value={{ color: "#5651e5", size: '20px' }}>
                {iconContact.icon}
              </IconContext.Provider>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
