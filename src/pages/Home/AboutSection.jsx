import { useRef } from "react";
import {
  FaAward,
  FaBriefcase,
  FaHeadset,
  FaFileDownload,
} from "react-icons/fa";
import { motion } from "framer-motion"; // eslint-disable-line

const About = () => {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            About Me
          </h2>
          <span className="text-sm sm:text-base text-gray-500">
            My Introduction
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Lottie Animation */}
          <motion.div
            className="w-full md:w-1/3 lg:w-2/5 flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-full aspect-square">
              <iframe
                src="https://lottie.host/embed/63fc1f53-ea9b-43fa-ab75-c4fadd6aefda/m4TyzV28gS.lottie"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="w-full md:w-2/3 lg:w-3/5"
            variants={itemVariants}
          >
            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8"
              variants={containerVariants}
            >
              {[
                { Icon: FaAward, title: "Experience", desc: "Fresher" },
                {
                  Icon: FaBriefcase,
                  title: "Projects",
                  desc: "Real-world Web Apps",
                },
                {
                  Icon: FaHeadset,
                  title: "Availability",
                  desc: "Ready to Join",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="card bg-base-100 border border-gray-200 shadow-sm p-3 sm:p-4 text-center"
                  variants={itemVariants}
                >
                  <item.Icon className="mx-auto text-xl sm:text-2xl text-gray-700 mb-1 sm:mb-2" />
                  <h3 className="font-bold text-xs sm:text-sm text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Description Text */}
            <motion.p
              className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
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
            </motion.p>

            {/* Download Button */}
            <motion.a
              href="https://drive.google.com/file/d/1UTW9cQtVHxuYUv4kA7NSw5sGSVid8KZk/view?usp=drive_link"
              download="Tanim_Ahamed_Resume"
              className="btn btn-neutral text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl flex items-center gap-2 w-fit text-sm sm:text-base mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
              <FaFileDownload />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
