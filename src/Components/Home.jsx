import React from "react";
import Logo from "../assets/logo.jpg";

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen lg:min-h-screen md:min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 pt-40 lg:pt-40 md:pt-40 py-20 lg:py-20 md:py-0 bg-gradient-to-br from-[#fefaf5] to-[#fff7f0]"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left max-w-xl">
        {/* Gentle greeting chip */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur-sm shadow-sm border border-[#f3e3d3] mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-400"></span>
          </span>
          <span className="text-sm font-medium text-stone-600 tracking-wide">Welcome • I'm available</span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-stone-800 mb-5">
          I Have Design <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">
            Experience
          </span>
        </h1>

        {/* Description */}
        <p className="text-stone-600 text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
          I design and develop solutions for clients of all sizes, specializing in crafting stylish,
          modern websites, web applications, and online stores.
        </p>

        {/* CTA Button */}
        <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-stone-800 to-stone-700 text-white font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden">
          <span className="relative z-10">Let's Talk</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center mt-12 md:mt-0">
        <div className="relative group w-full max-w-md mx-auto">
          {/* Soft decorative background blur */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/40 to-rose-100/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

          {/* Card wrapper */}
          <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
            {/* Gentle header with dots */}
            <div className="flex items-center gap-2 px-5 py-3 bg-white/40 border-b border-stone-100">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-200"></div>
                <div className="w-3 h-3 rounded-full bg-amber-200"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
              </div>
              <div className="flex-1 text-center text-xs text-stone-400 font-mono">Front-End Web Developer</div>
            </div>

            {/* Image container */}
            <div className="p-4 flex items-center justify-center">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={Logo}
                  alt="Design portfolio showcase"
                  className="w-full h-auto object-cover transition-all duration-700 ease-out group-hover:scale-105 rounded-xl text-center"
                />
              </div>
            </div>
          </div>

          {/* Soft accent glow */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-rose-200/30 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </div>
  );
}