import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-10 flex justify-between items-center shadow-inner footer-container">
      <div className="flex space-x-6">
        <a
          href="https://www.facebook.com/ch.khizar.9404?mibextid=ZbWKwL"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-xl"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/silent_choudhary_?igsh=M2trbTh5YXMwdmk4"
          className="text-gray-500 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition duration-300 text-xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/khizar-rehman-23331334b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="text-gray-500 hover:text-blue-700 transition duration-300 text-xl"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/khizar295"
          className="text-gray-500 hover:text-black transition duration-300 text-xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <div className="flex items-center text-gray-600 text-sm font-medium">
        <FaRegCopyright className="mr-1" />
        <span className="montserrat">
          Khizar Rehman 2023-2025 — All Rights Reserved
        </span>
      </div>
    </footer>
  );
}
