"use client";

import React from "react";
import { IconContext } from "react-icons";
import { useProject } from "./hook/useProject";
import { IconItems, IconItemsSite } from "./contactItems";

const Resume = () => {
  const { projects } = useProject();

  return (
    <IconContext.Provider
      value={{
        className:
          "hover:text-[#5651e5] cursor-pointer hover:scale-110 easy-in duration-300",
        size: "20px",
      }}
    >
      <div id="resume" className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col justify-between">
            <h2 className="text-center">Andriy Nosov</h2>
            <p className="text-center sm:text-left">Frontend Developer</p>
          </div>
          <div className="">
            <div className="flex gap-5 mt-5 sm:mt-0">
              <IconItems />
            </div>
          </div>
        </div>

        <div className="text-center py-4 text-xl font-bold tracking-wider">
          <div className="sm:block px-0">
            <p className="text-left">Ternopil, Ukraine</p>
            <p className="text-left">Ready to work remotely</p>
            <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0"></hr>
          </div>
        </div>
        <p className="py-4">
          As a Front-end Developer with six months of experience in
          Frontend development, I am currently seeking new professional
          opportunities. I have experience working with a range of technologies,
          including JavaScript, HTML, CSS, TypeScript, React, NextJs and others.
          If you have any opportunities available that match my skill set and
          experience, I would love to hear from you. Thank you for your
          consideration.
        </p>

        <div className="py-4 mt-4">
          <p className=" pb-4 uppercase text-xl tracking-widest text-[#5651e5]">
            Skills
          </p>
          <div className="flex flex-col gap-5 mb-4">
            <div className="text-left flex flex-col gap-2">
              <p>
                <span className="font-bold">FUNDAMENTALS&nbsp;:&nbsp;</span>
                Javascript | TypeScript | HTML | CSS
              </p>
              <p>
                <span className="font-bold">JS FRAMEWORKS&nbsp;:&nbsp;</span>
                React | NextJS
              </p>
              <p>
                <span className="font-bold">CSS FRAMEWORKS&nbsp;:&nbsp;</span>
                SCSS | Tailwind | Bootstrap
              </p>
              <p>
                <span className="font-bold">BUILD TOOLS&nbsp;:&nbsp;</span>NPM |
                Yarn | Babel | Redux | MobX | Vercel
              </p>
              <p>
                <span className="font-bold">TOOLS&nbsp;:&nbsp;</span>Git |
                Github | VS Code | Chrome Dev | Jira
              </p>
              <p>
                <span className="font-bold">OTHERS&nbsp;:&nbsp;</span>Figma |
                SEO | UX/UI
              </p>
              <p>
                <span className="font-bold">ALGORITHMS&nbsp;:&nbsp;</span>6 kyu
                on CodeWars
              </p>
              <p>
                <span className="font-bold">ENGLISH&nbsp;:&nbsp;</span>
                Intermediate
              </p>
              <hr className="w-full h-0.5 mx-auto bg-neutral-200 border-0"></hr>
              <p>
                <span className="font-bold">SOFT SKILLS&nbsp;:&nbsp;</span>
                Communication Skills | Patience | Self-learning | Accountability
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            Experience
          </p>
          <div>
            <p className="italic">
              <span className="font-bold italic">
                Commercial Projects (2022 - Current)
              </span>
            </p>
            <p className="py-1 italic">
              Technologies: JS, NextJS, Typescript, HTML, CSS, Tailwind
            </p>
            <ul className="list-disc list-outside py-1 leading-relaxed flex flex-col gap-1">
              {projects.commercial.map((project, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex flex-row align-bottom space-x-4">
                    <IconItemsSite
                      github={project.github}
                      link={project.link}
                    />
                    <p className="cursor-auto">{project.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="italic pt-2">
              <span className="font-bold italic">
                Training Projects (2021 - 2022)
              </span>
            </p>
            <p className="py-1 italic">
              Technologies: JS, React, Typescript, HTML, CSS
            </p>
            <ul className="list-disc list-outside py-1 leading-relaxed flex flex-col gap-1">
              {projects.training.map((project, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex flex-row align-bottom space-x-4">
                    <IconItemsSite
                      github={project.github}
                      link={project.link}
                    />
                  </div>
                  <p className="cursor-auto">{project.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="py-4 mt-7 uppercase text-xl tracking-widest text-[#5651e5]">
          Other Professional Experience
        </p>

        <div className="py-2">
          <p className="italic">
            <span className="font-bold">SE Chortkivskyi KHP (2013 ??? 2020)</span>
          </p>
          <p className="py-1 italic">Head of Sales Department</p>
          <p>
            I was involved in the trade of grains and wheat flour in Ukraine, as
            well as exporting these products to various countries around the
            world, including those in the European Union.
          </p>
        </div>

        <div className="py-2">
          <p className="italic">
            <span className="font-bold">Tetra Consulting (2010 ??? 2012)</span>
          </p>
          <p className="py-1 italic">Hardware Sales Manager</p>
          <p>
            My job responsibilities included searching for suppliers,
            procurement, and sales of computer equipment and other related
            hardware.
          </p>
        </div>

        <div className="py-2">
          <p className="italic">
            <span className="font-bold">Tetra Consulting (2007 ??? 2009)</span>
          </p>
          <p className="py-1 italic">Computer Repair Technician</p>
          <p>
            I was responsible for repairing and maintaining computer hardware.
          </p>
        </div>

        <div className="py-4 mt-4">
          <p className=" pb-4 uppercase text-xl tracking-widest text-[#5651e5]">
            EDUCATION
          </p>
          <div className="flex flex-col gap-5 mb-4">
            <div className="text-left flex flex-col gap-2">
              <p>
                <span className="font-bold">University : </span>Ternopil Ivan
                Puluj National Technical University
              </p>
              <p>Master&apos;s degree, Computer Engineering (2005 - 2010)</p>
              <p>
                <span className="font-bold">Courses : </span>Mate Academy
              </p>
              <p>Front End development (2021 - 2022)</p>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Resume;
