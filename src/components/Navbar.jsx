import React, { useState } from "react";

const Navbar = ({ categories, fetchJokeByCategory }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="shadow-lg sticky top-0 z-50 h-[15%] w-screen">
      <div className="w-screen flex flex-wrap items-center justify-between  lg:py-6 py-4 px-10">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="assets/images/icon.png"
            className="h-14 transform hover:scale-110 transition duration-300"
            alt="Logo"
          />
          <span className="self-center text-3xl font-extrabold text-white whitespace-nowrap tracking-wide">
            Giggles
          </span>
        </a>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <ul className="hidden lg:flex space-x-6">
          {categories.map((category) => (
            <li key={category}>
              <a
                href="#"
                onClick={() => fetchJokeByCategory(category)}
                className="text-xl font-semibold text-white px-4 py-2 hover:bg-white hover:text-black rounded-3xl hover:p-3 transition-all duration-200 ease-in-out transform hover:scale-105"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-2 p-4">
          {categories.map((category) => (
            <a
              key={category}
              href="#"
              onClick={() => {
                fetchJokeByCategory(category);
                setMobileMenuOpen(false);
              }}
              className="text-md font-semibold text-white hover:bg-white hover:text-purple-600 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 p-2"
            >
              {category}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
