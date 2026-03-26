import React from "react";
import { CiMobile2, CiGlobe, CiRouter, CiLaptop } from "react-icons/ci";
import { SiAffinitydesigner } from "react-icons/si";
import { FiTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Website Design",
      description: "I create visually appealing, user-friendly, and fully responsive website designs that combine modern aesthetics with seamless functionality to enhance user experience.",
      icon: CiMobile2,
      tab: 0,
      color: "from-amber-50 to-rose-50"
    },
    {
      id: "02",
      title: "Website Development",
      description: "I build high-performance, secure, and scalable websites using modern technologies, ensuring smooth functionality, fast loading speeds, and seamless user experience.",
      icon: CiLaptop,
      tab: 1,
      color: "from-amber-50 to-rose-50"
    },
    {
      id: "03",
      title: "Pixel Perfect Elements",
      description: "I design every interface with precision and attention to detail, ensuring each element aligns flawlessly for a clean, consistent, and professional visual experience.",
      icon: FiTriangle,
      tab: 2,
      color: "from-amber-50 to-rose-50"
    },
    {
      id: "04",
      title: "Responsiveness",
      description: "I ensure every website adapts seamlessly to all screen sizes and devices, providing an optimal viewing experience with smooth performance everywhere.",
      icon: SiAffinitydesigner,
      tab: 3,
      color: "from-amber-50 to-rose-50"
    },
    {
      id: "05",
      title: "UI/UX Design",
      description: "I craft intuitive and engaging user interfaces that prioritize usability and aesthetics, delivering smooth navigation and meaningful user experiences.",
      icon: CiRouter,
      tab: 4,
      color: "from-amber-50 to-rose-50"
    },
    {
      id: "06",
      title: "Logic into Reality",
      description: "I transform creative ideas and complex concepts into functional digital solutions, blending innovation with precision to bring every vision to life.",
      icon: CiGlobe,
      tab: 5,
      color: "from-amber-50 to-rose-50"
    }
  ];

  return (
    <div
      id="services"
      className="w-full bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
              <button className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-sm shadow-sm border border-stone-100">
                What I Do
              </button>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
            Services I Offer
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences with precision and care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-white/50 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Service Number */}
                  <div className="text-5xl font-bold text-stone-200 mb-4 group-hover:text-stone-300 transition-colors duration-300">
                    {service.id}
                  </div>
                  
                  {/* Title */}
                  <h4 className="font-display text-xl font-semibold text-stone-800 mb-3">
                    {service.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                      <IconComponent className="relative h-12 w-12 text-stone-700 bg-white/80 rounded-full p-2.5 shadow-sm group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    <Link
                      to="/service-detail"
                      state={{ tab: service.tab }}
                      className="group/btn px-4 py-2 rounded-full bg-stone-800 text-white text-sm font-medium hover:bg-gradient-to-r hover:from-amber-500 hover:to-rose-500 transition-all duration-300 hover:shadow-md text-decoration-none"
                    >
                      Learn More
                      <span className="inline-block ml-1 transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}