import ProjectItem from './project-item';

import { useProject } from './hook/useProject';

const Projects = () => {
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
            <ProjectItem
              key={index}
              title={project.title}
              projectScreen={project.projectScreen}
              link={project.link}
              tech={project.tech}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
