interface Skill {
  title: string;
  link: string;
  alt: string;
}
export function useSkills(): {
  skills: Skill[];
} {
  const skills = [
    {
      title: 'HTML',
      link: '/../public/assets/skills/html.png',
      alt: 'HTML logo',
    },
    {
      title: 'CSS',
      link: '/../public/assets/skills/css.png',
      alt: 'CSS logo',
    },
    {
      title: 'JavaScript',
      link: '/../public/assets/skills/javascript.png',
      alt: 'JavaScript logo',
    },
    {
      title: 'React',
      link: '/../public/assets/skills/react.png',
      alt: 'React logo',
    },
    {
      title: 'NextJS',
      link: '/../public/assets/skills/nextjs.png',
      alt: 'NextJS logo',
    },
    {
      title: 'Tailwind',
      link: '/../public/assets/skills/tailwind.png',
      alt: 'Tailwind logo',
    },
    {
      title: 'Bootstrap',
      link: '/../public/assets/skills/bootstrap.png',
      alt: 'Bootstrap logo',
    },
    {
      title: 'GitHub',
      link: '/../public/assets/skills/github.png',
      alt: 'GitHub logo',
    },
  
  ];

  return { skills };
}
