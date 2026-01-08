import React from "react";
import { motion } from "framer-motion";
import image from "../image/my.jpg";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import SectionAni from "./SectionAni";
import Project from "./Project";

const Home = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3, ease: "easeOut" } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center w-full ">

      {/* MAIN SECTION */}
      <div className="container w-11/12 mx-auto px-4 sm:px-8 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 mt-16 sm:mt-24 lg:mt-40 mb-12 sm:mb-16 lg:mb-24">

        {/* LEFT TEXT CONTENT */}
        <motion.div
          className="lg:w-6/12 flex flex-col justify-center text-center sm:text-left"
          initial="hidden"
          animate="visible"
          variants={textVariant}
        >
          <motion.p className="text-base sm:text-lg text-slate-400 mb-2">
            Hi! I'm Laxman Kumar
          </motion.p>

          <motion.h3
            className="text-2xl shadow-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2"
            variants={headingVariant}
          >
            I AM A <span className="text-sky-500">FULL-STACK</span>
          </motion.h3>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            variants={headingVariant}
          >
            DEVELOPER
          </motion.h1>

          <motion.p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 leading-relaxed">
            Crafting scalable web applications with modern technologies.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 w-full"
            variants={buttonVariant}
          >
            <motion.a
              href="/LaxmanKumar.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r flex justify-center items-center gap-1 from-cyan-500 to-indigo-700 rounded-md text-white font-semibold shadow-md text-sm sm:text-base w-full sm:w-auto"
            >
              <MdOutlineFileDownload className="text-lg sm:text-xl" />
              Download Resume
            </motion.a>

            <Link to="/project" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-600 to-fuchsia-700 rounded-md text-white font-semibold shadow-md text-sm sm:text-base w-full sm:w-auto"
              >
                Projects
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-6/12 flex justify-center lg:justify-end mb-6 lg:mb-0"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <div className="rounded-md overflow-hidden border-4 p-1 border-sky-500 w-44 h-44 sm:w-56 sm:h-56 lg:w-96 lg:h-96 shadow-2xl mt-5">
            <img
              src={image}
              alt="Abhinash Kumar"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </motion.div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="w-11/12 container  mx-auto">
        <About />
        <Skills />
        <Project />
        <Contact />

      </div>


    </div>
  );
};

export default Home;
