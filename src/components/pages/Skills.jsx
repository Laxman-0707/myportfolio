import React from "react";
import { motion } from "framer-motion";
import SectionAni from "./SectionAni";
// Note: If you have react-icons installed, you can import icons here
// import { FaGithub, FaDocker, FaAws } from "react-icons/fa";

const skills = [
  { title: "Java", level: 80 },
  { title: "Spring Boot", level: 70 },
  { title: "HTML/CSS", level: 90 },
  { title: "React.js", level: 75 },
  { title: "Tailwind CSS", level: 85 },
  { title: "JavaScript", level: 65 },
  { title: "MySQL", level: 70 },
  { title: "SQL", level: 75 }
];

const tools = [
  { name: "Git & GitHub", desc: "Version Control" },
  { name: "Eclipse", desc: "Java IDE" },
  { name: "Maven", desc: "Build Tool" },
  { name: "VS Code", desc: "IDE" },
  { name: "AWS", desc: "Deployment" },
  { name: "Postman", desc: "API Testing" },
  { name: "IntelliJ IDEA", desc: "Java IDE" },
  { name: "Linux", desc: "OS" },
  { name: "Docker", desc: "Containerization" },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-20 flex flex-col items-center">
      <div className="w-11/12 max-w-6xl mx-auto">
        
        {/* --- SKILLS SECTION --- */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          Technical <span className="text-sky-400">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
          Core technologies I use to build robust backend and frontend systems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-800/40 p-5 rounded-xl border border-slate-700 hover:border-sky-400 transition-all shadow-xl"
            >
              <div className="flex justify-between mb-2">
                <span className="font-bold text-sky-300">{skill.title}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-sky-500 to-indigo-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TOOLS SECTION --- */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
          Software & <span className="text-indigo-400">Tools</span>
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
          The environment and productivity tools I use daily.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors group"
            >
              <h3 className="text-lg font-bold group-hover:text-indigo-400 transition-colors">
                {tool.name}
              </h3>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{tool.desc}</p>
            </motion.div>
          ))}
        </div>

        <SectionAni />
      </div>
    </div>
  );
};

export default Skills;