"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { StepAnimation } from "utils/animation";
import { useSkills } from "./hook/useSkills";

export const Skills = () => {
  const { skills } = useSkills();
  return (
    <div className="w-full h-full min-h-[100vh] p-2 mb-3 relative">
      <span id="skills" className="absolute top-[-100px]"></span>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">My Web Development Stack</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              custom={index + 1}
              variants={StepAnimation()}
              className="p-4 lg:p-6 flex border-gray-300 border-[1px] justify-center items-center shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-slate-300"
              key={index}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center items-center">
                <div className="flex justify-center items-center">
                  <Image
                    src={skill.link}
                    width={64}
                    height={64}
                    alt={skill.alt}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
