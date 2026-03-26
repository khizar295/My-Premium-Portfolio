import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaRegCopyright,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/ch.khizar.9404?mibextid=ZbWKwL",
      icon: FaFacebookF,
      label: "Facebook",
      color: "text-black"
    },
    {
      href: "https://www.instagram.com/silent_choudhary_?igsh=M2trbTh5YXMwdmk4",
      icon: FaInstagram,
      label: "Instagram",
      color: "text-black"
    },
    {
      href: "https://www.linkedin.com/in/khizar-rehman-23331334b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      color: "text-black"
    },
    {
      href: "https://github.com/khizar295",
      icon: FaGithub,
      label: "GitHub",
      color: "text-black"
    }
  ];

  return (
    <footer className="relative w-full bg-white/80 backdrop-blur-sm border-t border-stone-100 py-4 px-6 md:px-12 overflow-hidden">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative text-stone-500 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 to-rose-200/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <IconComponent className="relative text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-stone-500 text-sm font-light">
            <FaRegCopyright className="text-xs" />
            <span className="font-light tracking-wide">
              Khizar Rehman 2023-2025
            </span>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="hidden sm:inline font-light">All Rights Reserved</span>
            <span className="hidden md:inline text-stone-300">•</span>
            <div className="hidden md:flex items-center gap-1 text-stone-400">
              <span>Made with</span>
              <FaHeart className="text-rose-400 text-xs animate-pulse" />
              <span>in Pakistan</span>
            </div>
          </div>

          {/* Mobile heart */}
          <div className="flex md:hidden items-center gap-1 text-stone-400 text-xs">
            <span>Made with</span>
            <FaHeart className="text-rose-400 text-xs animate-pulse" />
            <span>in Pakistan</span>
          </div>
        </div>

        {/* Subtle decorative bottom line */}
        <div className="mt-6 pt-4 text-center text-stone-400 text-xs">
          <p className="font-light">Crafting digital experiences with passion and precision</p>
        </div>
      </div>
    </footer>
  );
}