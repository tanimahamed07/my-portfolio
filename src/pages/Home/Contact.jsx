import React, { useState } from "react";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const email = "tanimislamt@gmail.com";
  const linkedInUsername = "tanim-ahamed";
  const whatsappNumber = "+8801885124569";
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <span className="text-sm sm:text-base text-gray-500">Contact Me</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center gap-12">
          {/* Left Side: Contact Options */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col gap-6 lg:px-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-2">
              Talk to me
            </h3>

            {[
              {
                Icon: FaEnvelope,
                title: "Email",
                value: email,
                link: `mailto:${email}`,
                external: false,
              },
              {
                Icon: FaLinkedinIn,
                title: "LinkedIn",
                value: linkedInUsername,
                link: `https://www.linkedin.com/in/${linkedInUsername}`,
                external: true,
              },
              {
                Icon: FaWhatsapp,
                title: "WhatsApp",
                value: whatsappNumber,
                link: `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`,
                external: true,
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="card bg-white py-4 px-6 rounded-xl shadow-sm text-center border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.Icon className="mx-auto text-3xl text-gray-600 mb-1" />
                <h4 className="font-bold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-500 mb-1">{item.value}</p>
                <span className="text-sm text-blue-500 font-medium">
                  Write me →
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="w-full lg:w-1/2 py-8 rounded-xl lg:px-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Write me your project
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Insert your Name"
                  className="input input-bordered w-full h-14 px-6 border-gray-300 border-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Insert your email"
                  className="input input-bordered w-full h-14 px-6 border-gray-300 border-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your project"
                  rows="5"
                  className="textarea textarea-bordered w-full px-6 py-3 border-gray-300 border-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="btn btn-neutral bg-gray-800 text-white px-8 py-3 rounded-xl shadow-md hover:bg-gray-700 transition-colors flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message →
              </motion.button>

              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg flex items-center gap-3 shadow-md"
                  >
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="font-medium">
                      Message sent successfully!
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
