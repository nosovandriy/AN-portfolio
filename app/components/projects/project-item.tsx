import Image from 'next/image'
import Link from 'next/link'
import { Project } from 'types';

const ProjectItem: React.FC<Project> = ({ title, image, tech, link, alt }) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
      <Image
        className='rounded-xl group-hover:opacity-10'
        src={image}
        alt={alt}
        width={900}
        height={600}
      />
      <div className='hidden group-hover:block absolute'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <p className='w-56 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            Open project
          </p>
        </Link>
      </div >
    </div >
  )
}

export default ProjectItem
