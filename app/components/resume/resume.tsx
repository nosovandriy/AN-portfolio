"use client"

import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaTelegramPlane, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { useProject } from './hook/useProject';

const Resume = () => {
  const { projects } = useProject();

  return (
    <div id='resume' className='max-w-[940px] mx-auto p-2 pt-[120px]'>
      <h2 className='text-center'>Resume</h2>
      <div className='bg-[#d0d4d6] my-4 p-4 w-full flex flex-col sm:flex-row justify-between items-center'>
        <div className='flex flex-col justify-between'>
          <h2 className='text-center'>Andriy Nosov</h2>
          <p className='text-center sm:text-left'>Frontend Developer</p>
        </div>
        <div className=''>
          <div className='flex mt-5 sm:mt-0'>
            <a
              href='https://t.me/NosovAndriy'
              target='_blank'
              rel='noreferrer'
            >
              <FaPhoneAlt size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://t.me/NosovAndriy'
              target='_blank'
              rel='noreferrer'
            >
              <FaTelegramPlane size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://t.me/NosovAndriy'
              target='_blank'
              rel='noreferrer'
            >
              <FaEnvelope size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://www.linkedin.com/in/andriy-nosov-82470580/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/nosovandriy'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </div>

      <div className='text-center py-4 text-xl font-bold tracking-wider'>
        <div className='sm:block px-0'>
          <p className='text-left'>Ternopil, Ukraine</p>
          <p className='text-left'>Ready to work remotely</p>
          <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0"></hr>
        </div>
      </div>
      <p className='py-4'>
        As a Junior Software Developer with six months of experience in Frontend development, I am currently seeking new professional opportunities.
        I have experience working with a range of technologies, including JavaScript, HTML, CSS, TypeScript, React, NextJs and others. If you have any opportunities available that match my skill set and experience, I would love to hear from you. Thank you for your consideration.
      </p>

      {/* Skills */}
      <div className='py-4 mt-4'>
        <p className=' pb-4 uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
        <div className='flex flex-col gap-5 mb-4'>
          <div className='text-left flex flex-col gap-2'>
            <p><span className='font-bold'>FUNDAMENTALS : </span>Javascript | TypeScript | HTML | CSS</p>
            <p><span className='font-bold'>JS FRAMEWORKS : </span>React | NextJS</p>
            <p><span className='font-bold'>CSS FRAMEWORKS : </span>SCSS | Tailwind | Bootstrap</p>
            <p><span className='font-bold'>BUILD TOOLS : </span>NPM | Yarn | Babel | Redux | MobX, Vercel</p>
            <p><span className='font-bold'>TOOLS : </span>Git | Github | VS Code | Chrome Dev, Jira</p>
            <p><span className='font-bold'>OTHERS : </span>Photoshop | Figma | SEO | UX/UI</p>
            <p><span className='font-bold'>ALGORITHMS : </span>6 kyu on CodeWars</p>
            <p><span className='font-bold'>ENGLISH : </span>Intermediate</p>
            <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0"></hr>
            <p>
              <span className='font-bold'>SOFT SKILLS : </span>
              Communication Skills | Patience | Self-learning | Accountability | Setting Up Projects
            </p>
          </div>
        </div>
      </div>

      <div>
        <IconContext.Provider value={{ className: 'hover:text-[#5651e5] cursor-pointer', size: '20px' }}>
          <p className='py-4 uppercase text-xl tracking-widest text-[#5651e5]'>Experience</p>
          {/* Experience */}
          <div>
            <p className='italic'>
              <span className='font-bold italic'>
                Commercial Projects (2022 - Current)
              </span>
            </p>
            <p className='py-1 italic'>Technologies: JS, NextJS, Typescript, HTML, CSS, Tailwind</p>
            <ul className='list-disc list-outside py-1 leading-relaxed'>
              {projects.commercial.map((project, index) => (
                <li
                  key={index}
                  className='flex gap-3'
                >
                  <p>{project.title}</p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub />
                    </Link>
                    <Link href={project.link}
                      target="_blank">
                      <BsArrowUpRightSquare />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className='italic pt-2'>
              <span className='font-bold italic'>
                Training Projects (2021 - 2022)
              </span>
            </p>
            <p className='py-1 italic'>Technologies: JS, React, Typescript, HTML, CSS</p>
            <ul className='list-disc list-outside py-1 leading-relaxed'>
              {projects.training.map((project, index) => (
                <li
                  key={index}
                  className='flex gap-3'
                >
                  <p>{project.title}</p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub />
                    </Link>
                    <Link href={project.link}
                      target="_blank">
                      <BsArrowUpRightSquare />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </IconContext.Provider>
      </div>

      <p className='py-4 mt-7 uppercase text-xl tracking-widest text-[#5651e5]'>Other Professional Experience</p>

      {/* Experience */}
      <div className='py-2'>
        <p className='italic'>
          <span className='font-bold'>SE Chortkivskyi KHP (2013 – 2020)</span>
        </p>
        <p className='py-1 italic'>Head of Sales Department</p>
        <p>
          I was engaged in selling grain and wheat flour in Ukraine and exporting to the countries of the European Union and other countries around the world.
        </p>
      </div>

      <div className='py-2'>
        <p className='italic'>
          <span className='font-bold'>Tetra Consulting (2010 – 2012)</span>
        </p>
        <p className='py-1 italic'>Hardware Sales Manager</p>
        <p>I was engaged in ordering and selling computer equipment</p>
      </div>

      <div className='py-2'>
        <p className='italic'>
          <span className='font-bold'>Tetra Consulting (2007 – 2009)</span>
        </p>
        <p className='py-1 italic'>Computer Repair Technician</p>
        <p>I repaired and serviced computer equipment</p>
      </div>

      {/* EDUCATION */}
      <div className='py-4 mt-4'>
        <p className=' pb-4 uppercase text-xl tracking-widest text-[#5651e5]'>EDUCATION</p>
        <div className='flex flex-col gap-5 mb-4'>
          <div className='text-left flex flex-col gap-2'>
            <p><span className='font-bold'>University : </span>Ternopil State 'Ivan Pul'uj' Technical University (2005 - 2010)</p>
            <p><span className='font-bold'>Courses : </span>Mate Academy (2021-2022)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume