import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDownloading } from "react-icons/md";

export const About = () => {
  return (
    <div className="w-full h-full lg:h-screen p-2 flex items-center py-16 relative">
      <span id="about" className="absolute top-[-50px] lg:top-0"></span>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          I am a Front-end Developer seeking new professional opportunities.
          <br /> <br />
          My skills include JavaScript, HTML, CSS, TypeScript, React, NextJs and
          other necessary software programs, and I am always eager to learn new
          technologies.
          <br /> <br />
          While I specialize in front-end development, I am flexible and can
          quickly learn new technology stacks as needed. I believe in choosing
          the best tool for the job rather than relying on a single programming
          language.
          <br /> <br />
          If you have any opportunities that match my skill set and experience,
          I would be thrilled to hear from you. Thank you for your
          consideration.
          <br /> <br />
          <Link
            href="/[AndriyNosov]FrontendDeveloper.pdf"
            download={true}
            target={"_blank"}
            className="flex items-center gap-3"
          >
            <p className="py-2 text-[#5651e5] cursor-pointer text-xl">
              MY RESUME
            </p>
            <MdDownloading
              size={"24px"}
              color={"#5651e5"}
              className="animate-bounce"
            />
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex shrink-0 items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/about.jpg"
            width={1200}
            height={1000}
            className="rounded-xl"
            alt="my photo"
          />
        </div>
      </div>
    </div>
  );
};
