import { getRandomId } from '../../../../utils/utils';

interface Skill {
  id: string;
  title: string;
  link: string;
  alt: string;
}
export function useSkills(): {
  skills: Skill[];
} {
  const skills = [
    {
      id: getRandomId(),
      title: 'HTML',
      link: '/../public/assets/skills/html.png',
      alt: 'HTML logo',
    },
    {
      id: getRandomId(),
      title: 'CSS',
      link: '/../public/assets/skills/css.png',
      alt: 'CSS logo',
    },
    {
      id: getRandomId(),
      title: 'JavaScript',
      link: '/../public/assets/skills/javascript.png',
      alt: 'JavaScript logo',
    },
    {
      id: getRandomId(),
      title: 'React',
      link: '/../public/assets/skills/react.png',
      alt: 'React logo',
    },
    {
      id: getRandomId(),
      title: 'NextJS',
      link: '/../public/assets/skills/nextjs.png',
      alt: 'NextJS logo',
    },
    {
      id: getRandomId(),
      title: 'Tailwind',
      link: '/../public/assets/skills/tailwind.png',
      alt: 'Tailwind logo',
    },
    {
      id: getRandomId(),
      title: 'Bootstrap',
      link: '/../public/assets/skills/bootstrap.png',
      alt: 'Bootstrap logo',
    },
    {
      id: getRandomId(),
      title: 'GitHub',
      link: '/../public/assets/skills/github.png',
      alt: 'GitHub logo',
    },
  
  ];

  return { skills };
}
