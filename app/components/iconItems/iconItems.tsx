"use client"

import Link from 'next/link';
import { IconContext } from 'react-icons';


import { iconContacts } from 'contacts';

export const IconItems = () => {
  return (
    <>
      {iconContacts.map((iconContact, index) => (
        <Link
          key={index}
          href={iconContact.title}
          target="_blank"
          rel="noreferrer noopener"
          className='rounded-full shadow-lg shadow-grey-400 p-4 cursor-pointer hover:scale-105 easy-in duration-300'
        >
          <IconContext.Provider value={{ color: "#5651e5", size: '25px' }}>
            {iconContact.icon}
          </IconContext.Provider>
        </Link>
      ))}
    </>
  )
}
