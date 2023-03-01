import ProjectItem from './project-item';

import { useProject } from './hook/useProject';
import SlideUp from "./SlideUp"

export const Projects = () => {
  const { projects } = useProject();
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <SlideUp offset="-300px 0px -300px 0px" key={index}>
              <ProjectItem
                title={project.title}
                image={project.image}
                link={project.link}
                tech={project.tech}
                alt={project.alt}
              />
            </SlideUp>
          ))}
        </div>
      </div>
    </div>
  );
};
