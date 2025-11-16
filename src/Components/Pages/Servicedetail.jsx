import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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
    // --- your content left unchanged ---
  { visible: "Website design is the art and science of creating visually appealing, intuitive, and functional web interfaces. It combines elements of graphic design, user interface design, and user experience to ensure that websites not only look good but also provide a seamless experience for the visitor. Every aspect of a website, from layout, color scheme, typography, imagery, and interaction elements, plays a vital role in conveying the brand’s message effectively. The goal is to make the website not just aesthetically pleasing but also easy to navigate, responsive across devices, and accessible to all users. A well-designed website increases user engagement, reduces bounce rates, and encourages conversions. Modern website design follows trends such as minimalism, bold typography, micro-interactions, and intuitive navigation, keeping user behavior in mind. Consistency in layout and visuals ensures that users can easily predict where to find information, making the experience smooth and frustration-free. A successful website design balances creativity with usability, ensuring that each visual element supports the website’s purpose and communicates clearly with its audience. Designers must consider loading times, accessibility standards, and responsive behavior while maintaining a compelling visual story. Wireframes, prototypes, and iterative testing are key steps to achieving a polished final product.", hidden: "The hidden 500 words expand further on technical design choices, color theory, and responsive considerations. Designers carefully select color palettes to evoke the right emotions, using contrast to guide attention to critical areas. Typography is chosen for readability and hierarchy, ensuring headings, subheadings, and body text are clear and accessible. Responsive design ensures that websites function seamlessly on desktops, tablets, and mobile devices, adapting layouts dynamically. Designers also consider accessibility, incorporating features such as proper contrast ratios, alt texts for images, and keyboard navigation. Micro-interactions, such as button animations and hover effects, enhance the user experience by providing feedback and engagement cues. Consistent branding, aligned with the company’s identity, helps create a memorable impression. Designers use grids and alignment to structure content clearly, guiding the user naturally through the site. Tools like Figma, Adobe XD, and Sketch allow designers to prototype and test designs rapidly. Finally, every website design is tested across devices, browsers, and user scenarios to ensure performance, usability, and visual harmony, creating a professional and user-centric experience." }, { visible: "Website development is the process of building functional, interactive, and reliable websites using programming languages and web technologies. It involves both front-end and back-end development to ensure that a website not only looks good but also performs efficiently. Front-end development focuses on creating the user interface with HTML, CSS, and JavaScript, ensuring responsiveness and interactivity. Back-end development handles the server-side logic, databases, and APIs to manage data, user authentication, and dynamic content. Full-stack developers integrate both aspects to deliver a seamless experience. Security, speed, and scalability are critical factors that developers consider to ensure a website can handle traffic and user interactions without issues. Modern development often incorporates frameworks like React, Vue, Angular, or backend frameworks like Node.js, Django, and Laravel to streamline the process. Testing, debugging, and version control are essential to maintain code quality. A well-developed website supports all user interactions, ensures fast loading times, and provides a stable platform for business operations.", hidden: "The hidden 500 words detail optimization, database integration, and advanced functionalities. Developers implement database solutions such as MySQL, PostgreSQL, or MongoDB to store and retrieve information efficiently. APIs are integrated to connect with third-party services like payment gateways, social logins, or content management systems. Responsive and adaptive designs ensure compatibility across devices, enhancing the user experience. Optimization techniques, including code minification, lazy loading, and caching, reduce load times and improve performance. Security practices like SSL encryption, input validation, and protection against SQL injection or XSS attacks are critical to protect users and data. Version control tools like Git enable collaborative development and maintain code history. Unit tests, integration tests, and end-to-end tests verify that the website functions as intended under various scenarios. Continuous integration and deployment (CI/CD) pipelines automate testing and deployment, ensuring a robust, maintainable, and scalable website that meets modern standards and user expectations." } , { visible: "Pixel-perfect design ensures that every visual element on a website aligns perfectly with the intended design. It is a meticulous approach where designers ensure that spacing, alignment, color, and typography match the original design mockups exactly. This level of precision creates a professional and polished appearance, enhancing the user experience. Pixel-perfect attention prevents visual inconsistencies that can detract from a website’s credibility. Designers carefully consider grids, margins, padding, and font sizes to achieve harmony. Icons, buttons, and other interface elements are optimized to render sharply on all devices, including high-resolution screens. Consistency across all pages reinforces branding and builds user trust. Pixel-perfect implementation bridges the gap between creative design and functional development, ensuring that the website looks exactly as envisioned across devices and browsers. It requires careful attention to detail, iterative testing, and collaboration between designers and developers.", hidden: "The hidden 500 words cover practical implementation and testing. Developers work closely with designers to translate Figma, Sketch, or Adobe XD designs into code with exact spacing, sizing, and alignment. CSS properties like flexbox and grid help achieve precise layouts, while media queries ensure responsiveness. Attention is paid to typography, icons, and imagery to maintain clarity and aesthetic quality. High-resolution assets and SVGs are used for crisp visuals. Cross-browser testing ensures consistent appearance on Chrome, Firefox, Safari, and Edge. Pixel-perfect implementation also considers accessibility, ensuring that visual consistency does not compromise usability. Regular reviews, QA testing, and iterative refinements guarantee that the final website maintains fidelity to the original design, providing users with a visually consistent and professional experience." } , { visible: "Responsive design ensures that a website adapts seamlessly to different screen sizes and devices, from desktops to tablets and smartphones. It uses fluid grids, flexible images, and media queries to adjust the layout, typography, and content dynamically. The goal is to provide an optimal viewing experience, where users can navigate easily without zooming or horizontal scrolling. A responsive website enhances usability, accessibility, and engagement. Developers test responsive layouts extensively to handle different screen widths, orientations, and resolutions. Navigation menus, buttons, forms, and interactive elements adjust gracefully to smaller screens, maintaining functionality and aesthetics. Images and multimedia content are scaled or cropped appropriately to avoid layout issues. Responsive design improves SEO, increases traffic, and ensures a positive user experience across devices, making it a critical aspect of modern web development.", hidden: "The hidden 500 words dive deeper into techniques and best practices. Media queries target specific breakpoints to adjust layout, typography, and spacing for various devices. Flexbox and CSS Grid enable dynamic rearrangement of elements to suit different screen widths. Developers implement relative units like percentages, ems, and rems to ensure scalability. Images are optimized with the srcset attribute to deliver the correct resolution for each device. Interactive components, buttons, and forms are tested for touch interactions and keyboard accessibility. Performance optimization, including lazy loading and asset compression, ensures fast page load times on mobile networks. Continuous testing on multiple devices and browsers guarantees consistent appearance, usability, and performance. Responsive design is essential for modern websites to meet user expectations, improve engagement, and enhance accessibility." } , { visible: "UI/UX design focuses on creating intuitive, engaging, and enjoyable experiences for users interacting with websites or applications. User Interface (UI) design emphasizes the look and feel, including visual elements, typography, color palettes, icons, and interactive components. User Experience (UX) design focuses on usability, information architecture, user flows, and ensuring that interactions are simple and logical. Good UI/UX design considers user goals, pain points, and behavior, ensuring that the product is easy to navigate and understand. Wireframes, prototypes, and user testing are essential tools to validate designs before development. UI/UX design improves user satisfaction, reduces errors, increases engagement, and promotes conversion. Accessibility, responsiveness, and consistency are key principles that ensure that all users, including those with disabilities, have a positive experience.", hidden: "The hidden 500 words go deeper into practical techniques. Designers conduct user research to understand target audiences and define personas. Information architecture organizes content logically, so users find what they need quickly. Interaction design ensures that buttons, links, forms, and menus behave predictably. Visual hierarchy guides the user's attention, highlighting key actions and information. Prototyping tools like Figma, Sketch, and Adobe XD enable iterative testing and feedback. A/B testing can help choose the most effective layouts or color schemes. Accessibility standards such as WCAG ensure inclusivity. UI/UX design also considers micro-interactions, animations, and feedback cues to make interfaces intuitive and satisfying. Continuous evaluation and refinement guarantee that digital products are efficient, visually appealing, and enjoyable to use." } , { visible: "Logic into reality is the process of transforming ideas, concepts, and strategies into tangible digital solutions. It involves translating abstract thoughts into practical designs, functional applications, or websites that solve real-world problems. This process bridges creativity with technical expertise, allowing developers and designers to collaborate effectively. Logical planning, architecture, and project management ensure that ideas are executed efficiently and meet business goals. Prototyping, testing, and iteration are key steps in turning concepts into functional products. Problem-solving skills, critical thinking, and coding expertise are essential to implement complex features while maintaining usability and performance. This process ensures that innovative ideas result in practical, user-centered solutions that deliver value.", hidden: "The hidden 500 words explore detailed execution strategies. Developers break down ideas into modular components, plan workflows, and define clear objectives. Tools like wireframes, mockups, and prototypes visualize the concept before implementation. Coding standards, frameworks, and libraries ensure efficient and maintainable solutions. Iterative testing and feedback loops help refine features to match user expectations. Integrating APIs, databases, and backend services allows dynamic functionality. Performance optimization, security measures, and responsive design ensure the final product is robust and accessible. Logic into reality combines creativity, technical skills, and user focus to transform abstract concepts into digital solutions that are practical, scalable, and effective in real-world applications." } ,
  ];

  // ==========================
  // SWIPER LOGIC
  // ==========================
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
    <div className="w-full p-6 mt-30 md:mt-45 lg:mt-25">

      {/* ==========================
          FIXED SWIPER TAB BAR
      ========================== */}
      <div className="relative w-full flex items-center">

        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`
            absolute left-0 top-1/2 -translate-y-1/2 z-20 
            bg-orange-500 rounded shadow hover:bg-orange-600 transition-colors duration-300
            p-2 md:p-2.5 lg:p-3
            ${canScrollLeft ? "" : "opacity-80 cursor-not-allowed"}
          `}
          style={{ marginLeft: "-8px" }}
        >
          <HiChevronLeft size={22} />
        </button>

        {/* SCROLLABLE BUTTON WRAPPER */}
        <div
          ref={sliderRef}
          onScroll={updateScrollState}
          className="
            flex flex-nowrap gap-6 overflow-x-auto scroll-smooth no-scrollbar
            border-b w-full pb-3 
            px-12   /* Making room so content never hides behind arrows */
            md:px-14
            lg:px-16
          "
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setShowFull(false);
              }}
              className={`text-lg font-semibold pb-2 whitespace-nowrap ${
                activeTab === index
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`
            absolute right-0 top-1/2 -translate-y-1/2 z-20 
            bg-orange-500 rounded shadow hover:bg-orange-600 transition-colors duration-300 
            p-2 md:p-2.5 lg:p-3
            ${canScrollRight ? "" : "opacity-80 cursor-not-allowed"}
          `}
          style={{ marginRight: "-8px" }}
        >
          <HiChevronRight size={22} />
        </button>
      </div>

      {/* ==========================
          CONTENT CARD
      ========================== */}
      <div className="mt-6 p-5 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-orange-500">
          {tabs[activeTab]}
        </h2>

        <p className="mt-3 text-gray-700 text-[17px] leading-[1.8]">
          {tabContent[activeTab].visible}
          {showFull && tabContent[activeTab].hidden}
        </p>

        <button
          onClick={() => setShowFull(!showFull)}
          className="mt-4 px-4 py-2 bg-orange-500 text-black font-bold rounded hover:bg-orange-600 transition-colors duration-300"
        >
          {showFull ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
}
