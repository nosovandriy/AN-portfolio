import { Project } from "types";

export function useProject(): {
  projects: Project[];
} {
  const projects = [
    {
      title: "Cheesecake store",
      image: "/assets/projects/cheesecake.webp",
      description:
        "This is an e-commerce shop that has been built using technologies like NextJS, Tailwind, and Redux toolkit. This framework has integrated Image Optimization, handy Routing, and SSR which improves performance and SEO. Also, I applied Tailwind, Redux toolkit, and Axios. I implemented the ability to receive order data in the Telegram bot and integrated the Google Analytics service.",
      alt: "Cheese cake store",
      link: "https://nahirna-cake.com.ua/",
      gitHub: "https://github.com/nosovandriy/nahirna-cake-store",
      tech: ["NextJS", "HTML", "CSS", "Tailwind", "Redux", "Axios"],
      scroll: "-69%",
    },
    {
      title: "Ukrainets website",
      image: "/assets/projects/ukrainets.webp",
      description:
        "Ukrainets is a website that provides all information about a shipping company, along with the ability for customers to request a callback. Built-in Next.js and CSS(SASS), this website offers a modern and user-friendly experience. In addition, we have implemented a feature that allows the owner to receive information about customers' orders in the e-mail.",
      alt: "Ukrainets website",
      link: "https://www.ukrainets.in.ua/",
      gitHub: "https://github.com/nosovandriy/ukrainets",
      tech: ["NextJS", "HTML", "CSS", "SCSS"],
      scroll: "-86%",
    },
    {
      title: "Todos app",
      image: "/assets/projects/todos.webp",
      description:
        "The Todo web app is a modern and intuitive task management application built using React, HTML, CSS, SCSS, and REST API. It provides features such as task creation, editing, and deletion, due dates and labels, search and filtering, and different views. With its user-friendly interface and seamless performance, it's a reliable tool for users to stay organized and manage their tasks efficiently.",
      alt: "Todos app website",
      link: "https://nosovandriy.github.io/react_todo-app-with-api/",
      gitHub:
        "https://github.com/nosovandriy/react_todo-app-with-api/tree/develop",
      tech: ["React", "HTML", "CSS", "SCSS", "REST API"],
      scroll: "0%",
    },
    {
      title: "Dia website",
      image: "/assets/projects/dia.webp",
      description:
        "The landing website for Strategic Agency is a visually appealing and responsive web platform built with HTML, CSS, and SCSS. It showcases the agency's services, expertise, and value proposition with compelling content, visuals, and call-to-action buttons. The website aims to engage potential clients and build credibility through testimonials and relevant information about the agency's team and portfolio.",
      alt: "Dia website",
      link: "https://nosovandriy.github.io/layout_dia/",
      gitHub: "https://github.com/nosovandriy/layout_dia/tree/develop",
      tech: ["HTML", "CSS", "SCSS"],
      scroll: "-74%",
    },
    {
      title: "Bakery website",
      image: "/assets/projects/bakery.webp",
      description:
        "The bakery website is a visually appealing and responsive web platform built with HTML, CSS, and SCSS. It showcases the bakery's products, services, and promotions with enticing visuals and provides a seamless browsing experience across different devices.",
      alt: "Bakery website",
      link: "https://nosovandriy.github.io/layout_creativeBakery/",
      gitHub: "https://github.com/nosovandriy/layout_dia/tree/develop",
      tech: ["HTML", "CSS", "SCSS"],
      scroll: "-80%",
    },
    {
      title: "React Route Table",
      image: "/assets/projects/people.webp",
      description:
        "The React Route Table app is a modern web application built with React, TypeScript, HTML, CSS, React Router, and Rest-API.  The app utilizes React Router for dynamic routing, making it easy for users to navigate between different sections and efficiently manage their data.",
      alt: "React Route People Table",
      link: "https://nosovandriy.github.io/react_people-table-advanced/",
      gitHub: "https://github.com/nosovandriy/nahirna-cake-store",
      tech: ["React", "TS", "HTML", "CSS", "React Router", "Rest-API"],
      scroll: "0%",
    },
    {
      title: "JS Employees Table",
      image: "/assets/projects/employees.webp",
      description:
        "The JS Employees Table is a web application built with JavaScript, HTML, CSS, and SCSS. It provides a user-friendly interface for managing employee data in a tabular format. Users can add, edit, and delete employee records.",
      alt: "JS Employees Table",
      link: "https://nosovandriy.github.io/js_employees_table_DOM/",
      gitHub:
        "https://github.com/nosovandriy/js_employees_table_DOM/tree/develop",
      tech: ["JS", "HTML", "CSS", "SCSS"],
      scroll: "0%",
    },
    {
      title: "Miami website",
      image: "/assets/projects/miami.webp",
      description:
        "The landing website for Miami Best Real Estate is a visually appealing and responsive web platform built with HTML, CSS, and SCSS. It showcases the agency's expertise and unique offerings in Miami's real estate market, providing a seamless browsing experience across different devices. The website features high-quality visuals and concise information, enticing potential clients to explore further and search for properties.",
      alt: "Miami website",
      link: "https://nosovandriy.github.io/layout_miami/",
      gitHub: "https://github.com/nosovandriy/layout_miami/tree/develop",
      tech: ["HTML", "CSS", "SCSS"],
      scroll: "-80%",
    },
  ];

  return { projects };
}
