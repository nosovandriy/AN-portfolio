"use client";

import { AnimatedText } from "@animated-text/animated-text";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdDownloading } from "react-icons/md";

import { ImageAnimation, MainAnimation, TitleAnimation } from "utils/animation";

export const About = () => {
  const text1 = `I am a Front-end Developer seeking new professional opportunities.`;
  const text2 = `My skills include JavaScript, HTML, CSS, TypeScript, React, NextJs and other necessary software programs, and I am always eager to learn new technologies.`;
  const text3 = `While I specialize in front-end development, I am flexible and can quickly learn new technology stacks as needed.`;
  const text4 = `If you have any opportunities that match my skill set and experience, I would be thrilled to hear from you. Thank you for your consideration.`;

  return (
    <div className="w-full h-full lg:h-screen p-2 flex items-center py-16 relative overflow-hidden">
      <span id="about" className="absolute top-[-50px] lg:top-0"></span>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <motion.p
            variants={MainAnimation()}
            initial="initial"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="uppercase text-xl tracking-widest text-[#5651e5]"
          >
            About
          </motion.p>
          <motion.h2
            variants={MainAnimation("x", 100)}
            initial="initial"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="py-4"
          >
            Who I Am
          </motion.h2>
          <AnimatedText once text={text1} el="span" />
          <AnimatedText once text={text2} el="span" />
          <AnimatedText once text={text3} el="span" />
          <AnimatedText once text={text4} el="span" />
          <Link
            href="/[AndriyNosov]FrontendDeveloper.pdf"
            download={true}
            target={"_blank"}
            className="flex items-center gap-3 border-1 border-[#5651e5] border-solid w-full h-20"
          >
            <motion.div
              variants={MainAnimation("x", 100)}
              initial="initial"
              whileInView="visible"
              className="rounded-md shadow-lg shadow-grey-400 p-3 text-[#5651e5] border-[1px] border-[#5651e5] border-solid w-full h-14 flex items-center gap-3 justify-center md:max-w-xs hover:scale-105 ease-in duration-300"
            >
              <p className="py-2 text-[#5651e5] cursor-pointer text-xl">
                MY RESUME
              </p>
              <MdDownloading
                size={"24px"}
                color={"#5651e5"}
                className="animate-bounce"
              />
            </motion.div>
          </Link>
        </div>
        <motion.div
          variants={ImageAnimation()}
          initial="initial"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex shrink-0 items-center justify-center hover:scale-105 ease-in duration-300"
        >
          <Image
            src="/assets/about.jpg"
            width={1200}
            height={1000}
            className="rounded-xl"
            alt="my photo"
          />
        </motion.div>
      </div>
    </div>
  );
};
