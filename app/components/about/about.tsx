import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as AnchorLink } from "react-scroll/modules";


import { defaultContacts } from 'contacts';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Skills from '../skills/skills';



const About = () => {
  return (
    <>
      <div className='max-w-[1240px] mx-auto p-2'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Andriy Nosov</h2>
          <div className='flex'>
            <a
              href={defaultContacts.linkedIn}
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href={defaultContacts.gitHub}
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div
          id='about'
          className='w-full p-2 flex items-center py-16'
        >
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
              <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
                About
              </p>
              <h2 className='py-4'>Who I Am</h2>
              <p className='py-2 text-gray-600'>
                I specialize in building mobile responsive front-end UI applications
                that connect with API’s and other backend technologies. I’m
                passionate about learning new technologies and understand there is
                more than one way to accomplish a task. Though I am most proficient
                in building front-end applications using HTML, CSS, Javascript, and
                React, I am a quick learner and can pick up new tech stacks as
                needed. I believe that being a great developer is not using one
                specific language, but choosing the best tool for the job.
              </p>
              <p className='py-2 text-gray-600'>
                I started web developement in 2013 managing multiple e-commerce
                websites on CMS platforms such as WordPress, BigCommerce, and
                Shopify. I have experience working directly with clients and taking
                mock wireframes all the way to deployed applications. In my spare
                time I run Code Commerce, a Youtube channel where I teach web
                developement and various front-end technologies.
              </p>
              <Link href='/#projects'>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                  Check out some of my latest projects.
                </p>
              </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex shrink-0 items-center justify-center hover:scale-105 ease-in duration-300'>
              <Image
                src="/../public/assets/about.jpg"
                width={1200}
                height={1000}
                className='rounded-xl'
                alt='my photo'
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <Skills />

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              INFINITE TECH
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Master (2013 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Dallas, TX
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “Code Commerce”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
