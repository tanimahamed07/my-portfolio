import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // eslint-disable-line
import image1 from "../../assets/image.png";
import image from "../../assets/image copy 4.png";
import image2 from "../../assets/image copy 6.png";
import image3 from "../../assets/image copy 7.png";
import loanImage from "../../assets/image copy 8.png";

export default function ProjectSection() {
  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Projects
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            Recent Projects
          </span>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {/* Project Card */}
          {[image1, loanImage, image2, image, image3].map((proj, index) => {
            const titles = [
              "FOODIESQUARE: Modern restaurant management Website",
              "LoanLink: Microloan Request & Approval Tracker",
              "Artify: A Creative Artwork Showcase Platform",
              "Pet Care: Your Trusted Pet Care & Booking Platform",
              "HERO.IO — Innovative Apps for a Smarter Life",
            ];
            const descriptions = [
              "A high-quality, responsive full-stack application for modern restaurant management, allowing customers to browse digital menus and book tables while providing admins with a robust control panel.",
              "LoanLink is a web-based microloan management system for borrowers, managers, and admins. Users can apply for loans, track applications, and managers can approve or reject loan requests efficiently.",
              "Artify is a modern platform where artists can upload, share, and showcase their artworks to a global audience. Users can explore public galleries, browse trending collections, and discover new artists.",
              "PawsCare is a convenient platform where pet owners can book reliable pet-sitting, grooming, walking, and daycare services in just a few clicks. It offers a clean and user-friendly interface, quick booking, and a seamless experience for both pet parents and caretakers.",
              "At HERO.IO, we craft innovative, high-quality apps designed to make everyday life simpler, smarter, and more exciting. We focus on blending creativity with technology to deliver seamless digital experiences that solve real-world problems.",
            ];
            const techStacks = [
              ["Next.js", "TypeScript", "Tailwind CSS", "Next.js API", "MongoDB", "NextAuth."],
              ["React", "Tailwind CSS", "Firebase Auth", "Node.js", "Express.js", "MongoDB", "CORS"],
              ["React", "Tailwind CSS", "DaisyUI", "Firebase Authentication", "Node.js", "Express.js", "MongoDB", "CORS"],
              ["Html", "Tailwind Css", "React", "Firebase"],
              ["React", "Tailwind CSS", "DaisyUI", "JavaScript"],
            ];
            const githubLinks = [
              "https://github.com/tanimahamed07/FoddieSqure",
              "https://github.com/yourusername/loanlink-client",
              "https://github.com/tanimahamed07/assignment-11-frontend.git",
              "https://github.com/tanimahamed07/assignmet-9.git",
              "https://github.com/tanimahamed07/assignment-8.git",
            ];
            const liveLinks = [
              "https://foodiesquare.vercel.app/",
              "https://lonelink1.netlify.app/",
              "https://artify-two-liart.vercel.app/",
              "https://pet-care-tanim.netlify.app/",
              "https://tanim121.netlify.app/",
            ];

            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <motion.div
                    className="md:w-2/5 h-[250px] md:h-[360px] overflow-hidden"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <img
                      alt={`Project screenshot ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      src={proj}
                    />
                  </motion.div>

                  {/* Content Section */}
                  <motion.div
                    className="md:w-3/5 h-auto md:h-[360px] flex flex-col justify-between py-6 px-6 md:py-5 md:px-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {titles[index]}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        {descriptions[index]}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {techStacks[index].map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="bg-gray-800 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-md hover:bg-gray-700 hover:scale-105 transition-all duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        href={githubLinks[index]}
                      >
                        <FaGithub className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span>GitHub</span>
                      </a>
                      <a
                        className="group inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-gray-900 bg-white border-2 border-gray-900 hover:bg-gray-900 hover:text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        href={liveLinks[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
