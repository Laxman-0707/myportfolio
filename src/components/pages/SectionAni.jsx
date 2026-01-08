import React from 'react';
import { motion } from 'framer-motion';
import html from '../image/html5_18891.webp';
import css from '../image/free-css-icon-svg-download-png-722685.webp';
import js from '../image/javascript-logo-javascript-icon-transparent-free-png.webp';
import react from '../image/React-icon.svg.png';
import tailwindcss from '../image/tailwind-css-logo-png_seeklogo-354675.png';
import github from '../image/github.jpg';
import aws from '../image/aws.png';
import Java from '../image/java.jpg';
import springboot from '../image/springboot.webp';
import mysql from '../image/mysql.png';
import git from '../image/git.png';

const logos = [Java, html, css, js, react, tailwindcss, github, aws,springboot, mysql, git];

const SectionAni = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900 py-6 mt-20">
      <motion.div
        className="flex gap-12 w-[200%] items-center" // Increased gap
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 20, ease: 'linear' }} // Slower animation
      >
        {/* Logos */}
        {logos.map((logo, index) => (
          <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-gray-800 rounded-lg" key={index}>
            <img src={logo} alt="" className="max-w-[70%] max-h-[70%] object-contain" />
          </div>
        ))}
        {/* Duplicate set for smooth scroll */}
        {logos.map((logo, index) => (
          <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-gray-800 rounded-lg" key={index + logos.length}>
            <img src={logo} alt="" className="max-w-[70%] max-h-[70%] object-contain" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionAni;
