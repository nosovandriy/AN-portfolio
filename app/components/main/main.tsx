"use client";

import Link from "next/link";
import { IconContext } from "react-icons";
import { Link as AnchorLink } from "react-scroll/modules";
import { SlArrowDown } from "react-icons/sl";

import { iconContacts } from "contacts";

export const Main = () => {
  return (
    <section id="home">
      <div className="w-full h-screen text-center animate-fadeIn animation-delay-2">
        <div className="relative max-w-[1240px] w-full h-full flex flex-col mx-auto p-2 flex justify-center items-center">
          <div>
            <p className="uppercase text-sm tracking-widest text-gray-600">
              Let&apos;s work together to build something legendary!
            </p>
            <h1 className="py-4 text-gray-700">
              Hi, I&apos;m
              <span className="text-[#5651e5]">&nbsp;Andriy</span>
            </h1>
            <h1 className="py-2 text-gray-700">A Front-End Developer</h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              My purpose as a Front-End developer is to create effective and
              user-friendly websites that satisfy customers needs
            </p>
            <div className="flex item-center justify-between max-w-[330px] m-auto py-4">
              {iconContacts.map((iconContact, index) => (
                <Link
                  key={index}
                  href={iconContact.title}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300"
                >
                  <IconContext.Provider
                    value={{ color: "#5651e5", size: "25px" }}
                  >
                    {iconContact.icon}
                  </IconContext.Provider>
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute bottom-16">
            <a href="/#about" className="text-[#5651e5]">
              <SlArrowDown
                size={35}
                className="animate-bounce"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
