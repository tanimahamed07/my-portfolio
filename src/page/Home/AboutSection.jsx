import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import {
  FaAward,
  FaBriefcase,
  FaHeadset,
  FaFileDownload,
} from "react-icons/fa"; // Make sure to install react-icons: npm install react-icons

const About = () => {
  return (
    <section id="about" className="">
      <div className="">
        {/* Section Title */}
        <div className=" text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <span className="text-gray-500">My Introduction</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center px-10 gap-10 md:gap-10">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Replace this URL with your own image or the illustration from the screenshot */}
            <DotLottieReact
              className="w-full max-w-lg rounded-lg drop-shadow-xl" // max-w-lg দিয়ে বড় করা
              src="https://lottie.host/cbf7edb8-a33c-4279-b15f-038a88c1c127/Hm0ibo0hey.lottie"
              loop
              autoplay
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2">
            {/* Stats Grid (DaisyUI/Tailwind) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* Box 1: Experience (Adapted for Fresher) */}
              <div className="card bg-base-100 border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
                <FaAward className="mx-auto text-2xl text-gray-700 mb-2" />
                <h3 className="font-bold text-gray-800">Experience</h3>
                <p className="text-xs text-gray-500">Fresher</p>
              </div>

              {/* Box 2: Projects (Based on Resume) */}
              <div className="card bg-base-100 border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
                <FaBriefcase className="mx-auto text-2xl text-gray-700 mb-2" />
                <h3 className="font-bold text-gray-800">Projects</h3>
                {/* Citing Resume Projects: Artify and Pet Care */}
                <p className="text-xs text-gray-500">Real-world Web Apps</p>
              </div>

              {/* Box 3: Support/Availability */}
              <div className="card bg-base-100 border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
                <FaHeadset className="mx-auto text-2xl text-gray-700 mb-2" />
                <h3 className="font-bold text-gray-800">Availability</h3>
                <p className="text-xs text-gray-500">Ready to Join</p>
              </div>
            </div>

            {/* Description Text (Sourced from Resume Objective & Skills) */}
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              I am a <strong>Frontend Focused MERN Stack Developer</strong>{" "}
              skilled in building responsive and user-friendly web applications.
              Proficient in
              <strong> React.js, Next.js, and Tailwind CSS</strong>, I also have
              solid experience with backend technologies like{" "}
              <strong>Node.js, Express.js, and MongoDB</strong>.
              <br />
              <br />I am looking for a dynamic team where I can contribute to
              real-world projects, improve my skills, and grow as a full-stack
              developer.
            </p>

            {/* Download Button */}
            <a
              href="https://drive.google.com/file/d/1pq4QJlY8F4J5uvy76ml4TEfp7YupLgUr/view?usp=sharing" // Ensure your resume PDF is in the public folder
              download="Tanim_Ahamed_Resume"
              className="btn btn-neutral text-white px-6 rounded-xl flex items-center gap-2 w-fit"
            >
              Download Resume
              <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
