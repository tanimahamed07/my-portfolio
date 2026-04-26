import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import techlandImg from "../../assets/frame_chrome_mac_dark.png";
import foodiesquareImg from "../../assets/frame_chrome_mac_dark (1).png";
import artifyImg from "../../assets/frame_chrome_mac_dark (5).png";
import loanLinkImg from "../../assets/frame_chrome_mac_dark (3).png";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((project, index) => {
      if (project) {
        const image = project.querySelector(".project-image");
        const content = project.querySelector(".project-content");

        // GSAP scroll-triggered animations
        gsap.fromTo(
          image,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          },
        );

        gsap.fromTo(
          content,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });
  }, []);

  const projects = [
    {
      title: "TECHLAND",
      platform: "E-Commerce Platform",
      description:
        "A high-performance e-commerce platform featuring Mongoose MVC architecture and responsive shadcn/ui interface with AI-powered features.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Next Auth",
        "JWT",
        "Tailwind CSS",
        "Shadcn",
        "Gemini AI",
      ],
      liveLink: "https://techland-client.vercel.app/",
      githubClient: "https://github.com/tanimahamed07/techland-client",
      githubServer: "https://github.com/tanimahamed07/techland-server",
      image: techlandImg,
    },
    {
      title: "FOODIESQUARE",
      platform: "Restaurant Management",
      description:
        "A responsive full-stack application for modern restaurant management with digital menus, table booking, and admin control panel.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Next.js API Routes",
        "MongoDB",
        "NextAuth",
      ],
      liveLink: "https://foodiesquare.vercel.app/",
      githubClient: "https://github.com/tanimahamed07/FoddieSqure",
      githubServer: "https://github.com/tanimahamed07/foodiesquare-server",
      image: foodiesquareImg,
    },
    {
      title: "ARTIFY",
      platform: "Artwork Showcase Platform",
      description:
        "A modern artwork-sharing platform where artists can upload, showcase, and explore creative pieces in a dynamic online gallery.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "Context Api",
      ],
      liveLink: "https://artify-two-liart.vercel.app/",
      githubClient: "https://github.com/tanimahamed07/assignment-11-frontend",
      githubServer: "https://github.com/tanimahamed07/assignment-11-backend",
      image: artifyImg,
    },
    {
      title: "LOAN LINK",
      platform: "Microloan Management System",
      description:
        "A full-stack microloan management system with role-based dashboards, secure authentication, and real-time loan tracking.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase Auth",
        "Context Api",
      ],
      liveLink: "https://lonelink1.netlify.app/",
      githubClient: "https://github.com/tanimahamed07/loanlink-client",
      githubServer: "https://github.com/tanimahamed07/loanlink-server",
      image: loanLinkImg,
    },
  ];

  return (
    <section id="portfolio" className="py-10 sm:py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Projects
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            Recent Projects
          </span>
        </motion.div>

        {/* Projects List - No Container */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`flex flex-col gap-10 lg:gap-16 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <motion.div
                className="lg:w-[55%] project-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  alt={project.title}
                  className="w-full h-auto object-cover"
                  src={project.image}
                />
              </motion.div>

              {/* Content Section */}
              <div className="lg:w-[45%] flex flex-col justify-center project-content">
                {/* Title */}
                <motion.h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                {/* Platform Name */}
                <motion.p
                  className="text-lg sm:text-xl text-gray-600 font-medium mb-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {project.platform}
                </motion.p>

                {/* Description */}
                <motion.p
                  className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {project.description}
                </motion.p>

                {/* Tech Stack Tags */}
                <motion.div
                  className="flex flex-wrap gap-2 mb-7"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {project.techStack.map((tech, tIndex) => (
                    <motion.span
                      key={tIndex}
                      className="bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-lg"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#1f2937",
                        color: "#ffffff",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-black hover:bg-gray-800 rounded-lg transition-all duration-300"
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-900 bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </motion.a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
