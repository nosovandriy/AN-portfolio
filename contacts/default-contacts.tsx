import { FaLinkedinIn, FaGithub, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';

export const defaultContacts = {
  linkedIn: 'https://www.linkedin.com/in/andriy-nosov/',
  facebook: 'https://www.facebook.com/AndriyNosov/',
  gitHub: 'https://github.com/nosovandriy',
  telegram: 'https://t.me/NosovAndriy',
};

export const iconContacts = [
  {
    title: defaultContacts.linkedIn,
    icon: <FaLinkedinIn />,
  },
  {
    title: defaultContacts.gitHub,
    icon: <FaGithub />,
  },
  {
    title: defaultContacts.telegram,
    icon: <FaTelegramPlane />,
  },
  {
    title: defaultContacts.facebook,
    icon: <FaFacebookF />,
  },
];

