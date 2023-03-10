export function useSkills() {
  const skills = [
    {
      category: "FUNDAMENTALS",
      skills: ["Javascript", "TypeScript", "HTML", "CSS"],
    },
    { category: "JS FRAMEWORKS", skills: ["React", "NextJS"] },
    { category: "CSS FRAMEWORKS", skills: ["SCSS", "Tailwind", "Bootstrap"] },
    {
      category: "BUILD TOOLS",
      skills: ["NPM", "Yarn", "Babel", "Redux", "MobX", "Vercel"],
    },
    {
      category: "TOOLS",
      skills: ["Git", "Github", "VS Code", "Chrome Dev", "Jira"],
    },
    { category: "OTHERS", skills: ["Figma", "SEO", "UX/UI"] },
    { category: "ALGORITHMS", skills: ["6 kyu on CodeWars"] },
    { category: "ENGLISH", skills: ["Intermediate"] },
  ];

  return { skills };
}
