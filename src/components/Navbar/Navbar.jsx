import React, { useState, useEffect } from 'react';
import { TiThMenu } from "react-icons/ti";
import { VscChromeClose } from "react-icons/vsc";
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Project", path: "/project" },
    { name: "Certification", path: "/certification" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div>
      {/* Sidebar Mobile */}
      {isMobile && (
        <aside
          className={`fixed top-0 left-0 h-full bg-slate-900 z-50 overflow-hidden transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'}`}
        >
          <div className="flex justify-between items-center p-5 border-b border-slate-700">
            <h2 className="text-2xl font-bold text-sky-400">JALIGI<span className="text-white">LAXMAN KUMAR</span></h2>
            <button onClick={toggleSidebar} aria-label="Close Menu" className="text-white text-2xl hover:bg-sky-500 p-2 rounded transition-transform active:scale-90">
              <VscChromeClose />
            </button>
          </div>
          <nav className="flex flex-col gap-4 p-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-white text-sm p-2 rounded-md bg-slate-800 hover:bg-sky-500 transition-all duration-300 transform hover:translate-x-2 ${isActive ? 'bg-sky-500 text-white shadow-lg scale-105' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </aside>
      )}

      {/* Navbar Desktop */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900 z-40 shadow-lg">
        <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center h-16">
          <NavLink to="/" className="text-2xl font-bold text-sky-400">JALIGI<span className="text-white">LAXMAN KUMAR</span></NavLink>

          {!isMobile && (
            <div className="flex gap-6 uppercase text-white text-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg transition-all duration-300 ${isActive
                      ? 'text-sky-400 bg-slate-700 shadow-lg scale-105'
                      : 'hover:bg-slate-700 hover:text-white hover:scale-105'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}

          {isMobile && (
            <button onClick={toggleSidebar} aria-label="Open Menu" className="text-white text-2xl hover:bg-sky-500 p-2 rounded transition-transform active:scale-90">
              <TiThMenu />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
