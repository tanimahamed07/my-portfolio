import React from "react";
import { HiBadgeCheck } from "react-icons/hi"; // npm install react-icons
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        {/* --- Top Section: Technologies (Tech Stack Icons) --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Technologies</h2>
          <span className="text-gray-500">My Tech Stack</span>

          {/* Icons Grid */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <SiJavascript className="text-4xl text-yellow-400" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <SiReact className="text-4xl text-blue-400" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <SiNextdotjs className="text-4xl text-black" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <SiTailwindcss className="text-4xl text-cyan-400" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <SiNodedotjs className="text-4xl text-green-500" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <SiExpress className="text-4xl text-gray-600" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer">
              <SiMongodb className="text-4xl text-green-600" />
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Skills (Level Details) --- */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
          <span className="text-gray-500">My Technical Level</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Card 1: Frontend Developer */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full md:w-[400px]">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-700">
              Frontend Developer
            </h3>

            <div className="grid grid-cols-2 gap-y-6">
              {/* Skill Item */}
              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">HTML5</h4>
                  <span className="text-xs text-gray-400">Experienced</span>
                </div>
              </div>

              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">CSS3</h4>
                  <span className="text-xs text-gray-400">Experienced</span>
                </div>
              </div>
              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">Tailwind</h4>
                  <span className="text-xs text-gray-400">Intermediate</span>
                </div>
              </div>
              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">JavaScript</h4>
                  <span className="text-xs text-gray-400">Intermediate</span>
                </div>
              </div>

              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">React.js</h4>
                  <span className="text-xs text-gray-400">Intermediate</span>
                </div>
              </div>

              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">Next.js</h4>
                  <span className="text-xs text-gray-400">Basic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Backend Developer */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full md:w-[400px]">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-700">
              Backend Developer
            </h3>

            <div className="grid grid-cols-2 gap-y-6">
              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">Node.js</h4>
                  <span className="text-xs text-gray-400">Basic</span>
                </div>
              </div>

              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">Express.js</h4>
                  <span className="text-xs text-gray-400">Basic</span>
                </div>
              </div>

              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">MongoDB</h4>
                  <span className="text-xs text-gray-400">Intermediate</span>
                </div>
              </div>

              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">Firebase</h4>
                  <span className="text-xs text-gray-400">Basic</span>
                </div>
              </div>

              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">Git/GitHub</h4>
                  <span className="text-xs text-gray-400">Intermediate</span>
                </div>
              </div>

              {/* Added REST APIs from Resume to fill the grid */}
              <div className="flex gap-2">
                <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                <div>
                  <h4 className="font-semibold text-gray-800">REST APIs</h4>
                  <span className="text-xs text-gray-400">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
