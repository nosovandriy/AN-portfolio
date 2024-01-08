"use client";

import { IconContext } from "react-icons";
import { SlArrowDown } from "react-icons/sl";
import { motion } from "framer-motion";

import { iconContacts } from "contacts";
import WaterDropGrid from "./grid/grid";
import { StepAnimation, TitleAnimation } from "utils/animation";

export const Main = () => {
  return (
    <>
      <div className="hidden xl:block z-30">
        <WaterDropGrid />
      </div>
      <section id="home">
        <div className="w-full h-screen text-center xl:text-start animate-fadeIn animation-delay-2">
          <div className="relative w-full h-full flex-col mx-auto p-2 flex justify-center items-center">
            <div className="w-fit">
              <motion.h1
                variants={TitleAnimation("y", 0, 0.5)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="py-4 text-gray-700 w-fit m-auto xl:m-0"
              >
                Hi, I&apos;m
                <span className="text-[#5651e5]">&nbsp;Andriy</span>
              </motion.h1>
              <motion.h1
                variants={TitleAnimation("x", 0, 0.5)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="py-2 text-gray-700 w-fit m-auto xl:m-0"
              >
                A Front-End Developer
              </motion.h1>

              <motion.p
                variants={TitleAnimation("x", 0, 0.5, 140)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="py-4 text-gray-600 max-w-[70%] m-auto xl:m-0"
              >
                My purpose as a Front-End developer is to create effective and
                user-friendly websites that satisfy customers needs
              </motion.p>
              <motion.p
                variants={TitleAnimation("x", 0, 0.5)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true }}
                className="uppercase text-sm tracking-widest text-gray-600 w-fit m-auto xl:m-0"
              >
                Let&apos;s work together to build something legendary!
              </motion.p>
              <div className="z-50 relative w-fit m-auto xl:m-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3, once: true }}
                  className="flex gap-10 item-center justify-between self-center content-center max-w-[300px] m-auto py-4 xl:m-0 z-50"
                >
                  {iconContacts.map((iconContact, index) => (
                    <motion.a
                      custom={index + 1}
                      variants={StepAnimation()}
                      key={index}
                      href={iconContact.title}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded-full shadow-lg shadow-grey-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300 z-50"
                    >
                      <IconContext.Provider
                        value={{ color: "#5651e5", size: "25px" }}
                      >
                        {iconContact.icon}
                      </IconContext.Provider>
                    </motion.a>
                  ))}
                </motion.div>
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
    </>
  );
};
