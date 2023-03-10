import Image from "next/image";

import { useSkills } from "./hook/useSkills";

export const Skills = () => {
  const { skills } = useSkills();
  return (
    <div className="w-full h-screen p-2 mb-3 relative">
      <span id="skills" className="absolute top-[-100px] lg:top-0"></span>
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">My Web Development Stack</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:bg-slate-300"
              key={index}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
