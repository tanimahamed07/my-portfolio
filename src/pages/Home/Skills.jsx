import { HiBadgeCheck } from "react-icons/hi";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  const techStack = [
    {
      Icon: SiJavascript,
      color: "text-yellow-400",
      delay: "animate-float-delay-1",
    },
    {
      Icon: SiTypescript,
      color: "text-blue-600",
      delay: "animate-float-delay-2",
    },
    {
      Icon: SiReact,
      color: "text-blue-400 animate-spin-slow",
      delay: "animate-float-delay-3",
    },
    { Icon: SiNextdotjs, color: "text-black", delay: "animate-float-delay-4" },
    {
      Icon: SiTailwindcss,
      color: "text-cyan-400",
      delay: "animate-float-delay-5",
    },
    {
      Icon: SiNodedotjs,
      color: "text-green-500",
      delay: "animate-float-delay-6",
    },
    { Icon: SiExpress, color: "text-gray-600", delay: "animate-float" },
    {
      Icon: SiMongodb,
      color: "text-green-600",
      delay: "animate-float-delay-1",
    },
    {
      Icon: DiMongodb,
      color: "text-green-700",
      delay: "animate-float-delay-2",
    },
  ];

  const frontendSkills = [
    { name: "CSS3", level: "Experienced" },
    { name: "Tailwind", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "TypeScript", level: "Basic" },
    { name: "React.js", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Mongoose", level: "Basic" },
    { name: "Git/GitHub", level: "Intermediate" },
    { name: "REST APIs", level: "Basic" },
  ];

  return (
    <section id="skills" className="py-8 sm:py-10 lg:py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technologies Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Technologies
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            My Tech Stack
          </span>

          {/* Icons Grid */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer hover:scale-110 ${tech.delay}`}
              >
                <tech.Icon className={`text-4xl ${tech.color}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10 animate-fade-in-up mt-10 sm:mt-12 lg:mt-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Skills
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            My Technical Level
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Frontend Developer Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full md:w-[400px] hover:-translate-y-2 transition-all duration-300 animate-fade-in-left">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-5 text-gray-800">
              Frontend Developer
            </h3>

            <div className="grid grid-cols-2 gap-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex gap-2">
                  <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {skill.name}
                    </h4>
                    <span className="text-xs text-gray-400">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Developer Card */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 w-full md:w-[400px] hover:-translate-y-2 transition-all duration-300 animate-fade-in-right">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-5 text-gray-800">
              Backend Developer
            </h3>

            <div className="grid grid-cols-2 gap-y-5">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex gap-2">
                  <HiBadgeCheck className="mt-1 text-lg text-gray-800" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {skill.name}
                    </h4>
                    <span className="text-xs text-gray-400">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
