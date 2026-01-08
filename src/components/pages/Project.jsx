import React from "react";
import cabsproject from '../image/cabsproject.png';
import foodrepo from '../image/foodrepo.png';


const projects = [
  {
    id: 1,
    title: "Project 1",
    subtitle: "🚕 Role Based Cab Management System",
    description: "Full-stack cab management system using React, Spring Boot, Spring Security, JWT, and MySQL with role-based dashboards and secure booking.",
    source: "https://github.com/Laxman-0707/Rolebased-cab-managentsystem.git",
    live: "",
    image: cabsproject,
  },
  {
    id: 2,
    title: "Project 2",
    subtitle: "Restaurant POS",
    description: "A Restaurant POS is software that handles orders, billing, and payments in one system, helping restaurants run faster and smoother. 🍽️",
    source: "https://github.com/Laxman-0707/food-repo.git",
    live: " https://youtube.com/watch?v=hpoJ6QzwFfU&si=SpP-196YKIsJrbKZ",
    image: foodrepo,
  },
];

const Project = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-sky-400 mb-12">
          <span className="text-white"> My</span> Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row bg-gray-900 border border-sky-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="flex justify-center items-center w-full md:w-64 h-48 md:h-auto bg-slate-800 rounded-lg p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain border-2 rounded"
                />
              </div>

              {/* Project Content */}
              <div className="flex flex-col justify-between p-4 sm:p-5 md:p-6 flex-1">
                <div>
                  <h3 className="text-sky-400 font-bold text-lg sm:text-xl md:text-2xl mb-1">
                    {project.title}
                  </h3>
                  <h4 className="text-gray-300 font-medium text-sm sm:text-base mb-2">
                    {project.subtitle}
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-sky-500 hover:bg-transparent hover:text-sky-500 border border-sky-500 text-white px-4 py-2 rounded-md text-sm sm:text-base transition-colors"
                  >
                    Source
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-500 hover:bg-transparent hover:text-green-500 border border-green-500 text-white px-4 py-2 rounded-md text-sm sm:text-base transition-colors"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
