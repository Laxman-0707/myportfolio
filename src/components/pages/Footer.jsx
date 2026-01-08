import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-8  border-t border-sky-600">
            <div className="max-w-7xl mx-auto px-4 text-center">

                {/* Name */}
                <h2 className="text-xl font-semibold text-sky-400">
                    Jaligi Laxman kumar
                </h2>

                {/* Navigation Links */}
                <div className="flex justify-center gap-6 mt-4 text-sm sm:text-base">
                    <Link to="/" className="hover:text-sky-400 transition">Home</Link>
                    <Link to="/project" className="hover:text-sky-400 transition">Projects</Link>
                    <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 mt-5 text-xl">
                    <Link
                        to="https://github.com/Laxman-0707"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaGithub />
                    </Link>

                    <Link
                        to="https://www.linkedin.com/in/laxman-kumar-jaligi-057530317"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaLinkedin />
                    </Link>

                    {/* <Link
                        to="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaInstagram />
                    </Link> */}
                     <Link
                        to="https:laxmanjaligi@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-sky-400 transition"
                    >
                        <FaEnvelope />
                    </Link>
                </div>

                {/* Footer Text */}
                <p className="text-gray-400 text-sm mt-6">
                    © {new Date().getFullYear()} Jaligi Laxman Kumar — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
