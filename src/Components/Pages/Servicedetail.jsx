import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Servicedetail() {
  const location = useLocation();
  const defaultTab = location.state?.tab ?? 0;

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showFull, setShowFull] = useState(false);

  const tabs = [
    "Website Design",
    "Website Development",
    "Pixel Perfect Elements",
    "Responsive Design",
    "UI/UX Design",
    "Logic Into Reality",
  ];

  const tabContent = [
    {
      visible: "Website design is the art and science of creating visually appealing, intuitive, and functional web interfaces. It combines elements of graphic design, user interface design, and user experience to ensure that websites not only look good but also provide a seamless experience for the visitor. Every aspect of a website, from layout, color scheme, typography, imagery, and interaction elements, plays a vital role in conveying the brand's message effectively. The goal is to make the website not just aesthetically pleasing but also easy to navigate, responsive across devices, and accessible to all users. A well-designed website increases user engagement, reduces bounce rates, and encourages conversions. Modern website design follows trends such as minimalism, bold typography, micro-interactions, and intuitive navigation, keeping user behavior in mind.",
      hidden: "Designers carefully select color palettes to evoke the right emotions, using contrast to guide attention to critical areas. Typography is chosen for readability and hierarchy, ensuring headings, subheadings, and body text are clear and accessible. Responsive design ensures that websites function seamlessly on desktops, tablets, and mobile devices, adapting layouts dynamically. Designers also consider accessibility, incorporating features such as proper contrast ratios, alt texts for images, and keyboard navigation. Micro-interactions, such as button animations and hover effects, enhance the user experience by providing feedback and engagement cues. Consistent branding helps create a memorable impression. Designers use grids and alignment to structure content clearly, guiding the user naturally through the site. Tools like Figma and Adobe XD allow designers to prototype and test designs rapidly.",
    },
    {
      visible: "Website development is the process of building functional, interactive, and reliable websites using programming languages and web technologies. It involves both front-end and back-end development to ensure that a website not only looks good but also performs efficiently. Front-end development focuses on creating the user interface with HTML, CSS, and JavaScript, ensuring responsiveness and interactivity. Back-end development handles the server-side logic, databases, and APIs to manage data, user authentication, and dynamic content. Full-stack developers integrate both aspects to deliver a seamless experience. Security, speed, and scalability are critical factors that developers consider to ensure a website can handle traffic and user interactions without issues.",
      hidden: "Modern development often incorporates frameworks like React, Vue, Angular, or backend frameworks like Node.js, Django, and Laravel to streamline the process. Testing, debugging, and version control are essential to maintain code quality. Developers implement database solutions such as MySQL, PostgreSQL, or MongoDB to store and retrieve information efficiently. APIs are integrated to connect with third-party services like payment gateways and social logins. Optimization techniques, including code minification, lazy loading, and caching, reduce load times and improve performance. Security practices like SSL encryption and input validation protect users and data. Version control tools like Git enable collaborative development and maintain code history.",
    },
    {
      visible: "Pixel-perfect design ensures that every visual element on a website aligns perfectly with the intended design. It is a meticulous approach where designers ensure that spacing, alignment, color, and typography match the original design mockups exactly. This level of precision creates a professional and polished appearance, enhancing the user experience. Pixel-perfect attention prevents visual inconsistencies that can detract from a website's credibility. Designers carefully consider grids, margins, padding, and font sizes to achieve harmony. Icons, buttons, and other interface elements are optimized to render sharply on all devices, including high-resolution screens.",
      hidden: "Consistency across all pages reinforces branding and builds user trust. Pixel-perfect implementation bridges the gap between creative design and functional development, ensuring that the website looks exactly as envisioned across devices and browsers. Developers work closely with designers to translate Figma or Adobe XD designs into code with exact spacing, sizing, and alignment. CSS properties like flexbox and grid help achieve precise layouts, while media queries ensure responsiveness. Cross-browser testing ensures consistent appearance on Chrome, Firefox, Safari, and Edge. High-resolution assets and SVGs are used for crisp visuals. Regular reviews, QA testing, and iterative refinements guarantee that the final website maintains fidelity to the original design.",
    },
    {
      visible: "Responsive design ensures that a website adapts seamlessly to different screen sizes and devices, from desktops to tablets and smartphones. It uses fluid grids, flexible images, and media queries to adjust the layout, typography, and content dynamically. The goal is to provide an optimal viewing experience, where users can navigate easily without zooming or horizontal scrolling. A responsive website enhances usability, accessibility, and engagement. Developers test responsive layouts extensively to handle different screen widths, orientations, and resolutions. Navigation menus, buttons, forms, and interactive elements adjust gracefully to smaller screens, maintaining functionality and aesthetics.",
      hidden: "Media queries target specific breakpoints to adjust layout, typography, and spacing for various devices. Flexbox and CSS Grid enable dynamic rearrangement of elements to suit different screen widths. Developers implement relative units like percentages, ems, and rems to ensure scalability. Images are optimized with the srcset attribute to deliver the correct resolution for each device. Interactive components are tested for touch interactions and keyboard accessibility. Performance optimization, including lazy loading and asset compression, ensures fast page load times on mobile networks. Continuous testing on multiple devices and browsers guarantees consistent appearance, usability, and performance across all platforms.",
    },
    {
      visible: "UI/UX design focuses on creating intuitive, engaging, and enjoyable experiences for users interacting with websites or applications. User Interface (UI) design emphasizes the look and feel, including visual elements, typography, color palettes, icons, and interactive components. User Experience (UX) design focuses on usability, information architecture, user flows, and ensuring that interactions are simple and logical. Good UI/UX design considers user goals, pain points, and behavior, ensuring that the product is easy to navigate and understand. Wireframes, prototypes, and user testing are essential tools to validate designs before development.",
      hidden: "Designers conduct user research to understand target audiences and define personas. Information architecture organizes content logically, so users find what they need quickly. Interaction design ensures that buttons, links, forms, and menus behave predictably. Visual hierarchy guides the user's attention, highlighting key actions and information. Prototyping tools like Figma enable iterative testing and feedback. Accessibility standards such as WCAG ensure inclusivity. UI/UX design also considers micro-interactions, animations, and feedback cues to make interfaces intuitive and satisfying. Continuous evaluation and refinement guarantee that digital products are efficient, visually appealing, and enjoyable to use.",
    },
    {
      visible: "Logic into reality is the process of transforming ideas, concepts, and strategies into tangible digital solutions. It involves translating abstract thoughts into practical designs, functional applications, or websites that solve real-world problems. This process bridges creativity with technical expertise, allowing developers and designers to collaborate effectively. Logical planning, architecture, and project management ensure that ideas are executed efficiently and meet business goals. Prototyping, testing, and iteration are key steps in turning concepts into functional products.",
      hidden: "Problem-solving skills, critical thinking, and coding expertise are essential to implement complex features while maintaining usability and performance. Developers break down ideas into modular components, plan workflows, and define clear objectives. Tools like wireframes, mockups, and prototypes visualize the concept before implementation. Coding standards, frameworks, and libraries ensure efficient and maintainable solutions. Iterative testing and feedback loops help refine features to match user expectations. Integrating APIs, databases, and backend services allows dynamic functionality. Performance optimization, security measures, and responsive design ensure the final product is robust and accessible for real-world applications.",
    },
  ];

  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -180, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 180, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 pt-40">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
              <button className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-sm shadow-sm border border-stone-100">
                Service Details
              </button>
            </div>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mb-2">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">Offer</span>
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Explore my expertise and how I can help bring your vision to life
          </p>
        </div>

        {/* Tabs Slider */}
        <div className="relative w-full flex items-center mb-8">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center transition-all duration-300 ${
              canScrollLeft ? "hover:bg-amber-100 hover:shadow-lg" : "opacity-50 cursor-not-allowed"
            }`}
            style={{ marginLeft: "-12px" }}
          >
            <FaArrowLeft className="text-stone-600 text-sm" />
          </button>

          <div
            ref={sliderRef}
            onScroll={updateScrollState}
            className="flex flex-nowrap gap-3 overflow-x-auto scroll-smooth no-scrollbar px-8"
          >
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setShowFull(false);
                }}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-md"
                    : "bg-white/60 backdrop-blur-sm text-stone-600 hover:bg-white/80 border border-stone-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 z-20 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center transition-all duration-300 ${
              canScrollRight ? "hover:bg-amber-100 hover:shadow-lg" : "opacity-50 cursor-not-allowed"
            }`}
            style={{ marginRight: "-12px" }}
          >
            <FaArrowRight className="text-stone-600 text-sm" />
          </button>
        </div>

        {/* Content Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 flex items-center justify-center">
              <span className="text-amber-600 font-bold text-lg">{String(activeTab + 1).padStart(2, '0')}</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-stone-800">
              {tabs[activeTab]}
            </h2>
          </div>

          <div className="prose prose-stone max-w-none">
            <p className="text-stone-600 leading-relaxed mb-4">
              {tabContent[activeTab].visible}
            </p>
            {showFull && (
              <p className="text-stone-600 leading-relaxed">
                {tabContent[activeTab].hidden}
              </p>
            )}
          </div>

          <button
            onClick={() => setShowFull(!showFull)}
            className="group mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-stone-800 to-stone-700 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            {showFull ? "Show Less" : "Load More"}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              {showFull ? "↑" : "↓"}
            </span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-rose-200/20 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
}