import { Project } from 'types';

export function useProject(): {
  projects: Project[];
} {
  const projects = [
    {
      title: 'Ukrainets website',
      image: '/assets/projects/ukrainets.png',
      // image: require('@image/projects/ukrainets.png'),
      alt: 'Ukrainets website',
      link: 'https://www.ukrainets.in.ua/',
      tech: 'NextJS, HTML, CSS, Tailwind',
    },
    {
      title: 'Cheese cake store',
      image: '/assets/projects/cheesecake.png',
      alt: 'Cheese cake store',
      link: '/',
      tech: 'NextJS, HTML, CSS, Tailwind',
    },
    {
      title: 'Todos app',
      image: '/assets/projects/todos.png',
      alt: 'Todos app website',
      link: 'https://nosovandriy.github.io/react_todo-app-with-api/',
      tech: 'React, HTML, CSS',
    },
    {
      title: 'Dia website',
      image: '/assets/projects/dia.png',
      alt: 'Dia website',
      link: 'https://nosovandriy.github.io/layout_dia/',
      tech: 'HTML, CSS',
    },
    {
      title: 'Bakery website',
      image: '/assets/projects/bakery.png',
      alt: 'Bakery website',
      link: 'https://nosovandriy.github.io/layout_creativeBakery/',
      tech: 'HTML, CSS',
    },
    {
      title: 'React Route Table',
      image: '/assets/projects/people.png',
      alt: 'React Route People Table',
      link: 'https://nosovandriy.github.io/react_people-table-advanced/',
      tech: 'React, HTML, CSS',
    },
    {
      title: 'JS Employees Table',
      image: '/assets/projects/employees.png',
      alt: 'Bakery website',
      link: 'https://nosovandriy.github.io/layout_creativeBakery/',
      tech: 'JavaScript, HTML, CSS',
    },
    {
      title: 'Miami website',
      image: '/assets/projects/miami.png',
      alt: 'Miami website',
      link: 'https://nosovandriy.github.io/layout_miami/',
      tech: 'HTML, CSS',
    },
  ];

  return { projects };
}
