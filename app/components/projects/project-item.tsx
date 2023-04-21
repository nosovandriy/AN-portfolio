"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Project } from "types";

import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const ProjectItem: React.FC<Project> = ({
  title,
  image,
  tech,
  link,
  gitHub,
  alt,
  description,
  scroll,
}) => {
  const [scrollPage, setScrollPage] = useState(false);

  return (
    <div className="p-5 lg:p-10 gap-10 flex flex-col lg:flex-row items-center justify-center w-full shadow-xl shadow-gray-400 rounded-xl">
      <div className="rounded-xl lg:w-1/2 overflow-hidden h-[250px] sm:h-[400px]">
        <Link href={link} target="_blank" rel="noreferrer noopener">
          <Image
            className=" hover:cursor-pointer"
            src={image}
            alt={alt}
            width={900}
            height={4800}
            loading="eager"
            style={{
              transform: scrollPage
                ? `translateY(${scroll})`
                : "translateY(0%)",
              transition: "transform 8s ease-in-out",
            }}
            onMouseEnter={() => setScrollPage(true)}
            onMouseLeave={() => setScrollPage(false)}
          />
        </Link>
      </div>
      <div className="lg:w-1/2 w-full">
        <h2 className="mb-6 text-3xl">{title}</h2>
        <p className="mb-6 text-justify">{description}</p>
        <div className="flex gap-2 mb-10 justify-center w-full flex-wrap">
          {tech.map((item, index) => (
            <div
              key={index}
              className="rounded-md shadow-lg shadow-grey-400 p-3 text-[#5651e5]"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-10">
          <Link
            href={gitHub}
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer hover:text-[#5651e5] text-lg flex gap-1"
          >
            Code
            <BsGithub size={"24px"} />
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer hover:text-[#5651e5] text-lg flex gap-1"
          >
            Link
            <FiExternalLink size={"24px"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
