"use client"

import Image from 'next/image';
import { Link as AnchorLink } from "react-scroll/modules";
import logo from '@image/logo.png';


type Props = {
  handleShowMobileMenu: () => void;
}

const Logo: React.FC<Props> = ({ handleShowMobileMenu }) => {
  return (
    <AnchorLink
      spy={true}
      smooth={true}
      to={'home'}
      offset={-30}
      duration={500}
      className='w-40 sm:w-48 lg:w-full cursor-pointer'
      onClick={handleShowMobileMenu}
    >
      <Image
        // src={logo}
        src='/assets/logo.png'
        alt="Andriy Nosov web-developer logo"
        width={250}
        height={50}
        priority
      />
    </AnchorLink>
  )
}

export default Logo
