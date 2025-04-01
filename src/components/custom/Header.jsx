import React, { useState } from "react";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";
import POP from "../../assets/img/POP.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="p-4 relative z-10 bg-transparent mx-5 sticky top-0 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Profile Section */}
        <div className="flex items-center gap-4 relative mr-4">
          <img
            src={POP}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-12 left-0 bg-gray-200 opacity-70 text-black font-bold rounded-lg shadow-lg w-48 z-20 block md:hidden">
              <ul className="flex flex-col gap-2 p-4">
                <li>
                  <a
                    href="/project"
                    className="text-base hover:text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="skillover"
                    className="text-base hover:text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="https://drive.google.com/file/d/17bvktLhiku8z77K7ktRr4bL_5eUQZMPv/view?usp=sharing"
                    className="text-base hover:text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    className="text-base hover:text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="certificate"
                    className="text-base hover:text-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Certificate
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Links (Visible on Desktop) */}
        <ul className="hidden md:flex flex-row gap-6 text-white font-semibold justify-center items-center text-lg">
          <li>
            <a href="/" className="hover:text-white hover:font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="/project" className="hover:text-white hover:font-bold">
              Projects
            </a>
          </li>
          <li>
            <a href="/skillover" className="hover:text-white hover:font-bold">
              Skills
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/17bvktLhiku8z77K7ktRr4bL_5eUQZMPv/view?usp=sharing" className="hover:text-white hover:font-bold">
              Resume
            </a>
          </li>
          <li>
            <a href="/certificate" className="hover:text-white hover:font-bold">
              Certificate
            </a>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile View) */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiBars3 />
        </button>

        {/* Social Media Links */}
        <nav
          className={`${isMenuOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full bg-opacity-50 md:relative md:block`}
        >
          <ul className="flex flex-row justify-end gap-4 p-4 md:p-0 md:flex-row">
            <li>
              <a href="https://github.com/Abhishek2038472" className="text-3xl text-fuchsia-700">
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/abhishek.gorain.12"
                className="text-3xl text-fuchsia-700"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/asr._.shadowz/profilecard/?igsh=MWMwbGNwZ3ZydTYwbA=="
                className="text-3xl text-fuchsia-700"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhishek-gorain-a8a898248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-3xl text-fuchsia-700"
              >
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
