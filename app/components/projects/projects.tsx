import ProjectItem from './project-item';
import { useProject } from './hook/useProject';
import SlideUp from "./SlideUp"

export const Projects = () => {
  const { projects } = useProject();
  return (
    <div className='relative'>
      <span id='projects' className='absolute top-[-50px] lg:top-[-100px]'></span>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div>
          {projects.map((project, index) => (
            <SlideUp offset="-300px 0px -150px 0px" key={index}>
              <ProjectItem
                title={project.title}
                image={project.image}
                link={project.link}
                gitHub={project.gitHub}
                tech={project.tech}
                alt={project.alt}
                description={project.description}
                scroll={project.scroll}
              />
            </SlideUp>
          ))}
        </div>
      </div>
    </div>
  );
};
