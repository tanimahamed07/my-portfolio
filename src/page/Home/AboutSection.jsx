import React from 'react';
import { FaAward, FaBriefcase, FaHeadset, FaFileDownload } from 'react-icons/fa'; // Make sure to install react-icons: npm install react-icons

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-5">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <span className="text-gray-500">My Introduction</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          
          {/* Left Side: Image */}
          <div className="w-full md:w-1/3 flex justify-center">
             {/* Replace this URL with your own image or the illustration from the screenshot */}
            <img 
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg" 
              alt="Tanim Ahamed Coding" 
              className="w-full max-w-sm rounded-lg drop-shadow-xl"
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
                <p className="text-xs text-gray-500">Entry Level / Fresher</p>
              </div>

              {/* Box 2: Projects (Based on Resume) */}
              <div className="card bg-base-100 border border-gray-200 shadow-sm p-4 text-center hover:shadow-md transition-shadow">
                <FaBriefcase className="mx-auto text-2xl text-gray-700 mb-2" />
                <h3 className="font-bold text-gray-800">Completed</h3>
                {/* Citing Resume Projects: Artify and Pet Care */}
                <p className="text-xs text-gray-500">2+ Full Stack Projects</p> 
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
              I am a <strong>Frontend Focused MERN Stack Developer</strong> [cite: 2] skilled in building responsive and user-friendly web applications[cite: 4]. 
              Proficient in <strong>React.js, Next.js, and Tailwind CSS</strong>, I also have solid experience with backend technologies like <strong>Node.js, Express.js, and MongoDB</strong>.
              <br /><br />
              I am looking for a dynamic team where I can contribute to real-world projects, improve my skills, and grow as a full-stack developer.
            </p>

            {/* Download Button */}
            <a 
              href="/resume.pdf" // Ensure your resume PDF is in the public folder
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