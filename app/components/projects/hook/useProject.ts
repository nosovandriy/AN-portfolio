import { Project } from "types";

export function useProject(): {
  projects: Project[];
} {
  const projects = [
    {
      title: `"MANOLI" parfums store`,
      image: "/assets/projects/manoli.webp",
      description:
        "Manoli Parfums store is an elegant e-commerce platform with a primary focus on mobile-first design principles. The site is built based on Next.js and NestJS frameworks. Moreover, the implementation of multilingualism thanks to i18n and next-intl allows users around the world to easily navigate and interact with our site. Engaging animations, powered by Framer-motion, create a visually stunning and immersive browsing experience for our users. Integration of the Nova Poshta API improves the delivery process, making it reliable and user-friendly for obtaining delivery addresses.",
      alt: "Art vs War gallery",
      link: "https://manoli.ua/",
      gitHub: "https://manoli.ua/",
      tech: [
        "NextJS",
        "TypeScript",
        "HTML",
        "SCSS",
        "Redux",
        "i18n",
        "Framer-motion",
        "React-hook-form",
        "Vercel",
      ],
      scroll: "-87%",
    },
    {
      title: `"Nahirna cake" store`,
      image: "/assets/projects/cheesecake.webp",
      description:
        "This is an e-commerce shop that has been built using technologies like NextJS, Tailwind, and Redux toolkit. This framework has integrated Image Optimization, handy Routing, and SSR which improves performance and SEO. Also, I applied Tailwind, Redux toolkit, and Axios. I implemented the ability to receive order data in the Telegram bot and integrated the Google Analytics service.",
      alt: "Cheese cake store",
      link: "https://nahirna-cake.com.ua/",
      gitHub: "https://github.com/nosovandriy/nahirna-cake-store",
      tech: [
        "NextJS",
        "TypeScript",
        "HTML",
        "Tailwind CSS",
        "Redux",
        "Axios",
        "Swiper",
        "Vercel",
        "Google Analytics",
        "Telegram bot",
      ],
      scroll: "-69%",
    },
    {
      title: `"Art vs War" gallery`,
      image: "/assets/projects/artvswar.webp",
      description:
        'The "Art vs War" online gallery platform is designed to facilitate the sale of paintings, with a focus on merging art and charity. The platform offers possibilities where artists can sell their paintings. Key features of the project include user registration, artist profiles for uploading and editing paintings, and secure sales transactions. This project is based on Next.js and Spring Boot frameworks, utilizing Amazon Web Services and Stripe payment service. Our team consists of a PM, frontend and backend developers, QA, and a UI/UX designer.',
      alt: "Art vs War gallery",
      link: "https://artvswar.gallery/",
      gitHub: "https://github.com/nosovandriy/art-vs-war",
      tech: [
        "NextJS",
        "TypeScript",
        "HTML",
        "SCSS",
        "Redux",
        "Axios",
        "Stripe",
        "AWS Amplify",
        "AWS Cognito",
        "Cloudinary",
        "React-hook-form",
        "Yup",
        "Swiper",
      ],
      scroll: "-79%",
    },
    {
      title: `"Ukrainets" delivery company`,
      image: "/assets/projects/ukrainets.webp",
      description:
        "Ukrainets is a website that provides all information about a shipping company, along with the ability for customers to request a callback. Built-in Next.js and CSS(SASS), this website offers a modern and user-friendly experience. In addition, we have implemented a feature that allows the owner to receive information about customers' orders in the e-mail.",
      alt: "Ukrainets website",
      link: "https://www.ukrainets.in.ua/",
      gitHub: "https://github.com/nosovandriy/ukrainets",
      tech: ["NextJS", "HTML", "CSS", "SCSS", "Swiper", "Facebook chat"],
      scroll: "-86%",
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
