import React, { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 md:flex md:justify-between items-center">
        <div className="flex items-center justify-between w-full">
          <a href="#" className="flex items-center py-5 px-2 text-white flex-1">
            <span className="font-bold">DzikrHub App</span>
          </a>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>bars-3-bottom-left</title>
                <g fill="none">
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`md:flex md:flex-row flex-col items-center text-center justify-start md:space-x-1 pb-3 md:pb-0 flex-row ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <a href="#" className="py-2 px-3 block">
            Alquran
          </a>
          <a href="#" className="py-2 px-3 block">
            Dzikir
          </a>
          <a href="#" className="py-2 px-3 block">
            Doa
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
