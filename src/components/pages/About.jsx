import React from "react";
import { motion } from "framer-motion";
import image from "../image/my.jpg";
import { MdFileDownloadDone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  // Animation Variants
  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const infoVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white py-14 px-5 w-full">
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 mt-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About <span className="text-sky-400">Me</span>
      </motion.h2>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Profile Card */}
        <motion.div
          className="bg-gray-800 rounded-xl p-6 lg:w-1/3 shadow-lg border-t-4 border-sky-500 flex flex-col items-center"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-sky-500"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt="Laxman Kumar"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 right-3 bg-sky-500 text-white p-1 rounded-full shadow-md">
              <MdFileDownloadDone size={22} />
            </span>
          </motion.div>

          {/* Name */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 text-center">
            Jaligi Laxman Kumar
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 text-center mt-1">
            Full Stack Developer & AWS Cloud Learner
          </p>

          {/* Contact Info */}
          <motion.div
            className="mt-6 flex flex-col gap-3 w-full"
            variants={infoVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 bg-slate-700 px-4 py-2 rounded shadow hover:bg-slate-600 transition">
              <HiOutlineMail className="text-lg" />
              <span className="text-sm truncate">
                laxmanjaligi@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3 bg-slate-700 px-4 py-2 rounded shadow hover:bg-slate-600 transition">
              <FaPhoneAlt className="text-lg" />
              <span className="text-sm">+91 6305590828</span>
            </div>

            <div className="flex items-center gap-3 bg-slate-700 px-4 py-2 rounded shadow hover:bg-slate-600 transition">
              <IoLocationOutline className="text-lg" />
              <span className="text-sm">
                Aramghar, Hyderabad, India
              </span>
            </div>
          </motion.div>

          {/* Education & Languages */}
          <motion.div
            className="mt-6 w-full flex flex-col gap-2 text-gray-300"
            variants={infoVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-between">
              <span className="font-medium text-sm">Education:</span>
              <span className="text-sm">
                B-TECH, CMR Technical Campus
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium text-sm">Languages:</span>
              <span className="text-sm">English, Telugu, Hindi</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Description */}
        <motion.div
          className="flex flex-col justify-center gap-6 lg:w-2/3"
          variants={infoVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center sm:text-left">
            Passionate{" "}
            <span className="text-sky-400">Full Stack Developer</span> &{" "}
            <span className="text-sky-400">AWS Cloud</span> Learner
          </h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I build secure, scalable, and high-performance web applications using
            modern technologies like{" "}
            <span className="text-sky-400 font-medium">
              Java, Spring Boot, REST APIs
            </span>{" "}
            and modern frontend technologies like{" "}
            <span className="text-sky-400 font-medium">
              HTML, CSS, JavaScript, and React.js
            </span>
            .
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            I am actively learning{" "}
            <span className="text-sky-400 font-medium">AWS Cloud</span> to deploy,
            manage, and scale production-ready applications. I focus on writing
            clean backend logic, designing efficient APIs, and delivering smooth
            user experiences.
          </p>

          {/* Stats */}
          <div className="w-full mt-6 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl w-full">
              {[
                { count: "2+", label: "React Projects" },
                { count: "2+", label: "Backend Projects" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-800 rounded-xl p-6 shadow flex flex-col items-center justify-center
                             border border-transparent hover:border-sky-400 hover:scale-105 transition duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-sky-400">
                    {item.count}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1 text-center">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
