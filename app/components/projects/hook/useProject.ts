import { Project } from 'types';

export function useProject(): {
  projects: Project[];
} {
  const projects = [
    {
      title: 'Ukrainets website',
      projectScreen: '/../public/assets/projects/ukrainets.png',
      alt: 'Ukrainets website',
      link: 'https://www.ukrainets.in.ua/',
      tech: 'NextJS, HTML, CSS, Tailwind',
    },
    {
      title: 'Portfolio website',
      projectScreen: '/../public/assets/projects/portfolio.png',
      alt: 'Portfolio website',
      link: '/',
      tech: 'NextJS, HTML, CSS, Tailwind',
    },
    {
      title: 'Todos app',
      projectScreen: '/../public/assets/projects/todos.png',
      alt: 'Todos app website',
      link: 'https://nosovandriy.github.io/react_todo-app-with-api/',
      tech: 'React, HTML, CSS',
    },
    {
      title: 'React Route Table',
      projectScreen: '/../public/assets/projects/people.png',
      alt: 'React Route People Table',
      link: 'https://nosovandriy.github.io/react_people-table-advanced/',
      tech: 'React, HTML, CSS',
    },
    {
      title: 'JS Employees Table',
      projectScreen: '/../public/assets/projects/employees.png',
      alt: 'Bakery website',
      link: 'https://nosovandriy.github.io/layout_creativeBakery/',
      tech: 'JavaScript, HTML, CSS',
    },
    {
      title: 'Bakery website',
      projectScreen: '/../public/assets/projects/bakery.png',
      alt: 'Bakery website',
      link: 'https://nosovandriy.github.io/layout_creativeBakery/',
      tech: 'HTML, CSS',
    },
    {
      title: 'Dia website',
      projectScreen: '/../public/assets/projects/dia.png',
      alt: 'Dia website',
      link: 'https://nosovandriy.github.io/layout_dia/',
      tech: 'HTML, CSS',
    },
    {
      title: 'Miami website',
      projectScreen: '/../public/assets/projects/miami.png',
      alt: 'Miami website',
      link: 'https://nosovandriy.github.io/layout_miami/',
      tech: 'HTML, CSS',
    },
  ];

  return { projects };
}
