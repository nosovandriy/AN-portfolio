import Image from 'next/image';
import { Link as AnchorLink } from "react-scroll/modules";

type Props = {
  handleShowMobileMenu: () => void;
}

export const Logo: React.FC<Props> = ({ handleShowMobileMenu }) => {
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
        src='/assets/logo.png'
        alt="Andriy Nosov web-developer logo"
        width={250}
        height={50}
        priority
      />
    </AnchorLink>
  )
}
