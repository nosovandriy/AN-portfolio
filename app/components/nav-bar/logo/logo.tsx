import Image from 'next/image';

type Props = {
  handleShowMobileMenu: () => void;
}

export const Logo: React.FC<Props> = ({ handleShowMobileMenu }) => {
  return (
    <a
      href={'/'}
      className='w-40 sm:w-48 lg:w-full cursor-pointer'
      onClick={handleShowMobileMenu}
    >
      <Image
        src='/assets/logo.png'
        alt="https://andriynosov.com/"
        width={250}
        height={50}
        priority
      />
    </a>
  )
}
