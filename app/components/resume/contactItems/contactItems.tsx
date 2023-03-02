"use client"

import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

type Props = {
  github: string;
  link: string;
}

const iconsList = [
  {
    icon: <FaPhoneAlt />,
    href: 'tel:+380679098640',
    label: 'Call me',
  },
  {
    icon: <FaTelegramPlane />,
    href: 'https://t.me/NosovAndriy',
    label: 'Send me a Telegram message',
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:nosovandriy@gmail.com',
    label: 'Send me an email',
  },
  {
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com/in/andriy-nosov-82470580/',
    label: 'Connect with me on LinkedIn',
  },
  {
    icon: <FaGithub />,
    href: 'https://github.com/nosovandriy',
    label: 'View my GitHub profile',
  },
];

export const IconItems = () => {
  return (
    <>
      {iconsList.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {item.icon}
        </Link>
      ))}
    </>
  )
}

export const IconItemsSite: React.FC<Props> = ({ github, link }) => {
  return (
    <>
      <Link
        href={github}
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsGithub />
      </Link>
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"

      >
        <BsArrowUpRightSquare />
      </Link>
    </>
  )
}
