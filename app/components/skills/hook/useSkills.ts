interface Skill {
  title: string;
  link: string;
  alt: string;
}


export function useSkills()
: {
  skills: Skill[];
}
 {
  const skills = [
    {
      title: 'HTML',
      link: '/assets/skills/html.png',
      alt: 'HTML logo',
    },
    {
      title: 'CSS',
      link: '/assets/skills/css.png',
      alt: 'CSS logo',
    },
    {
      title: 'JavaScript',
      link: '/assets/skills/javascript.png',
      alt: 'JavaScript logo',
    },
    {
      title: 'TypeScript',
      link: '/assets/skills/ts.png',
      alt: 'TypeScript logo',
    },
    {
      title: 'React',
      link: '/assets/skills/react.png',
      alt: 'React logo',
    },
    {
      title: 'NextJS',
      link: '/assets/skills/nextjs.png',
      alt: 'NextJS logo',
    },
    {
      title: 'Tailwind',
      link: '/assets/skills/tailwind.png',
      alt: 'Tailwind logo',
    },
    {
      title: 'MUI',
      link: '/assets/skills/mui.png',
      alt: 'MUI logo',
    },
    {
      title: 'Bootstrap',
      link: '/assets/skills/bootstrap.png',
      alt: 'Bootstrap logo',
    },
    {
      title: 'SASS',
      link: '/assets/skills/sass.png',
      alt: 'SASS logo',
    },
    {
      title: 'Redux',
      link: '/assets/skills/redux.png',
      alt: 'Redux logo',
    },
    {
      title: 'GitHub',
      link: '/assets/skills/github.png',
      alt: 'GitHub logo',
    },
    {
      title: 'RTL',
      link: '/assets/skills/react-testing-library.png',
      alt: 'React Testing Library logo',
    },
    {
      title: 'Postman',
      link: '/assets/skills/postman.png',
      alt: 'Postman logo',
    },
    {
      title: 'Figma',
      link: '/assets/skills/figma.png',
      alt: 'Figma logo',
    },
    {
      title: 'Git',
      link: '/assets/skills/git.png',
      alt: 'Git logo',
    },
  ];

  return { skills };
}
