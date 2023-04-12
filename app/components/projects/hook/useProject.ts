import { Project } from "types";

export function useProject(): {
  projects: Project[];
} {
  const projects = [
    {
      title: "CheeseCake store",
      image: "/assets/projects/cheesecake.webp",
      alt: "Cheese cake store",
      link: "https://nahirna-cake.com.ua/",
      tech: "NextJS, HTML, CSS, Tailwind",
    },
    {
      title: "Ukrainets website",
      image: "/assets/projects/ukrainets.webp",
      alt: "Ukrainets website",
      link: "https://www.ukrainets.in.ua/",
      tech: "NextJS, HTML, CSS, Tailwind",
    },
    {
      title: "Todos app",
      image: "/assets/projects/todos.webp",
      alt: "Todos app website",
      link: "https://nosovandriy.github.io/react_todo-app-with-api/",
      tech: "React, HTML, CSS",
    },
    {
      title: "Dia website",
      image: "/assets/projects/dia.webp",
      alt: "Dia website",
      link: "https://nosovandriy.github.io/layout_dia/",
      tech: "HTML, CSS",
    },
    {
      title: "Bakery website",
      image: "/assets/projects/bakery.webp",
      alt: "Bakery website",
      link: "https://nosovandriy.github.io/layout_creativeBakery/",
      tech: "HTML, CSS",
    },
    {
      title: "React Route Table",
      image: "/assets/projects/people.webp",
      alt: "React Route People Table",
      link: "https://nosovandriy.github.io/react_people-table-advanced/",
      tech: "React, HTML, CSS",
    },
    {
      title: "JS Employees Table",
      image: "/assets/projects/employees.webp",
      alt: "Bakery website",
      link: "https://nosovandriy.github.io/layout_creativeBakery/",
      tech: "JavaScript, HTML, CSS",
    },
    {
      title: "Miami website",
      image: "/assets/projects/miami.webp",
      alt: "Miami website",
      link: "https://nosovandriy.github.io/layout_miami/",
      tech: "HTML, CSS",
    },
  ];

  return { projects };
}
