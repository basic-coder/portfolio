import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-6 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Bhavesh Sakpal. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/basic-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-gray-400 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/BhaveshSakpal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-gray-400 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/basic-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white text-gray-400 transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
