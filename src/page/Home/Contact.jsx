import React from "react";
import { FaEnvelope, FaLinkedinIn, FaWhatsapp } from "react-icons/fa"; // Make sure to install react-icons: npm install react-icons

const Contact = () => {
  // Contact details from your Resume
  const email = "tanimislamt@gmail.com";
  const linkedInUsername = "tanim-ahamed"; // Assuming a typical LinkedIn URL structure
  const whatsappNumber = "+8801885124569"; // Using the number from your resume

  return (
   <section id="contact" className="">
  <div className="container mx-auto px-5">
    {/* Section Title */}
    <div className="text-center mb-6">
      <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
      <span className="text-gray-500">Contact Me</span>
    </div>

    <div className="flex flex-col lg:flex-row justify-center gap-12">
      {/* Left Side: Contact Options (Cards) */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:px-6">
        <p className="text-lg font-semibold text-center text-gray-700">
          Talk to me
        </p>

        {/* Card 1 */}
        <div className="card bg-white py-4 px-6 rounded-xl shadow-sm text-center border border-gray-200">
          <FaEnvelope className="mx-auto text-3xl text-gray-600 mb-1" />
          <h4 className="font-bold text-gray-800">Email</h4>
          <p className="text-sm text-gray-500 mb-1">{email}</p>
          <a
            href={`mailto:${email}`}
            className="text-sm text-blue-500 hover:underline font-medium"
          >
            Write me →
          </a>
        </div>

        {/* Card 2 */}
        <div className="card bg-white py-4 px-6 rounded-xl shadow-sm text-center border border-gray-200">
          <FaLinkedinIn className="mx-auto text-3xl text-gray-600 mb-1" />
          <h4 className="font-bold text-gray-800">LinkedIn</h4>
          <p className="text-sm text-gray-500 mb-1">{linkedInUsername}</p>
          <a
            href={`https://www.linkedin.com/in/${linkedInUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline font-medium"
          >
            Write me →
          </a>
        </div>

        {/* Card 3 */}
        <div className="card bg-white py-4 px-6 rounded-xl shadow-sm text-center border border-gray-200">
          <FaWhatsapp className="mx-auto text-3xl text-gray-600 mb-1" />
          <h4 className="font-bold text-gray-800">WhatsApp</h4>
          <p className="text-sm text-gray-500 mb-1">{whatsappNumber}</p>
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline font-medium"
          >
            Write me →
          </a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full lg:w-1/2 py-8 rounded-xl lg:px-6">
        <p className="text-lg font-semibold text-gray-700 mb-6 text-center lg:text-left">
          Write me your project
        </p>

        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Insert your Name"
              className="input input-bordered w-full h-14 px-6 border-gray-300 border-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Insert your email"
              className="input input-bordered w-full h-14 px-6 border-gray-300 border-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Textarea */}
          <div>
            <textarea
              placeholder="Write your project"
              rows="5"
              className="textarea textarea-bordered w-full px-6 py-3 border-gray-300 border-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-neutral bg-gray-800 text-white px-8 py-3 rounded-xl shadow-md hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
