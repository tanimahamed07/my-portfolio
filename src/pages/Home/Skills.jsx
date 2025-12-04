import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
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
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technologies Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Technologies
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            My Tech Stack
          </span>

          {/* Icons Grid */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-110 animate-float">
              <SiJavascript className="text-4xl text-yellow-400" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-110 animate-float-delay-1">
              <SiReact className="text-4xl text-blue-400 animate-spin-slow" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-110 animate-float-delay-2">
              <SiNextdotjs className="text-4xl text-black" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-110 animate-float-delay-3">
              <SiTailwindcss className="text-4xl text-cyan-400" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-110 animate-float-delay-4">
              <SiNodedotjs className="text-4xl text-green-500" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-110 animate-float-delay-5">
              <SiExpress className="text-4xl text-gray-600" />
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-110 animate-float-delay-6">
              <SiMongodb className="text-4xl text-green-600" />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12 animate-fade-in-up mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Skills
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            My Technical Level
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          {/* Frontend Developer Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full md:w-[400px] hover:-translate-y-2 transition-all duration-300 animate-fade-in-left">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-6 text-gray-800">
              Frontend Developer
            </h3>

            <div className="grid grid-cols-2 gap-y-6">
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

          {/* Backend Developer Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full md:w-[400px] hover:-translate-y-2 transition-all duration-300 animate-fade-in-right">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-6 text-gray-800">
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
