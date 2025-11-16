import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/slider-proj-11-1.png";
import img2 from "../../assets/slider-proj-11-2.png";
import img3 from "../../assets/slider-proj-11-3.png";
import img4 from "../../assets/slider-proj-11-4.png";
import img5 from "../../assets/slider-proj-11-5.png";

/**
 * Project1 component
 *
 * Behavior:
 * - Left: heading + paragraph + fake recaptcha (spinner -> checkbox)
 * - Learn More button disabled until checkbox checked
 * - Clicking Learn More opens modal with 3s countdown and then redirects
 * - Right: auto-scrolling infinite slider showing 3 items by default (add items to slides array)
 *
 * Notes:
 * - Replace slides array items with real image URLs or imports if desired.
 * - Update redirectUrl to the link you want to redirect to after countdown.
 */

export default function Project11() {
  // change this to wherever you want to redirect after modal countdown
  const redirectUrl = "https://day-night-five.vercel.app/";

  // recaptcha spinner state
  const [recaptchaLoading, setRecaptchaLoading] = useState(true);
  const [verified, setVerified] = useState(false);

  // modal and countdown
  const [modalOpen, setModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // slider refs & logic
  const sliderRef = useRef(null);
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false); // not used for pause since required non-pausable but kept if needed

  // sample slides data — replace `bg` or `img` with actual imports/urls
  const slides = [
    { id: 1, title: "Project Shot 1", img: img1 },
    { id: 2, title: "Project Shot 2", img: img2 },
    { id: 3, title: "Project Shot 3", img: img3 },
    { id: 4, title: "Project Shot 4", img: img4 },
    { id: 5, title: "Project Shot 5", img: img5 },
    // Add more images here anytime
  ];

  // duplicate slides for seamless loop
  const doubled = [...slides, ...slides];

  // start pseudo-recaptcha spinner -> show checkbox after 3s
  useEffect(() => {
    setRecaptchaLoading(true);
    const t = setTimeout(() => {
      setRecaptchaLoading(false);
    }, 3000);
    return () => clearTimeout(t);
  }, []);

  // modal countdown + redirect
  useEffect(() => {
    let timer;
    if (modalOpen) {
      setCountdown(3);
      timer = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(timer);
            // redirect after short delay to allow UI update
            setTimeout(() => {
              window.location.href = redirectUrl;
            }, 300);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [modalOpen, redirectUrl]);

  // infinite auto-scroll logic
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    // choose a speed (pixels per frame)
    const speed = 0.5; // smaller number = slower
    let rafId;
    let start;

    const step = () => {
      // move scrollLeft forward
      el.scrollLeft += speed;
      // when we've scrolled half (original slides length), reset to start
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = el.scrollLeft - el.scrollWidth / 2;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [doubled.length]);

  // ensure on resize we keep proper position (optional)
  useEffect(() => {
    const onResize = () => {
      const el = sliderRef.current;
      if (!el) return;
      // no-op; placeholder in case you want reposition behavior
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // checkbox toggle handler
  const toggleVerify = () => {
    // only allow checking after recaptcha spinner finished
    if (recaptchaLoading) return;
    setVerified((v) => !v);
  };

  return (
    <div className="w-full px-4 pb-0 mt-40 lg:mt-10 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* LEFT: Heading + desc + fake recaptcha + button */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200">
              <h1 className="text-3xl md:text-4xl font-extrabold montserrat mb-4 text-gray-900">
                About This Project
              </h1>
              <p className="text-[15.5px] text-gray-700 leading-relaxed mb-6 lato-regular">
                This project demonstrates an elegant integration of UX design
                patterns and modern front-end techniques. It focuses on
                accessibility, smooth micro-interactions, and an engaging
                content flow. Explore the demo using the verification control
                below — once verified you can learn more about the project and
                be redirected to a live demo.
              </p>

              {/* fake Google Recaptcha box */}
              <div className="mt-4">
                <div className="w-full bg-gray-50 border border-gray-300 rounded-lg p-4 flex items-center justify-between">
                  {/* left area: spinner or checkbox */}
                  <div className="flex items-center gap-4">
                    {/* spinner */}
                    {recaptchaLoading ? (
                      <div className="flex items-center gap-3">
                        <div
                          className="rounded-full border-4 border-t-transparent border-gray-300 w-9 h-9 animate-spin"
                          aria-hidden="true"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-800">
                            Loading verification
                          </div>
                          <div className="text-xs text-gray-500">
                            Checking... please wait
                          </div>
                        </div>
                      </div>
                    ) : (
                      // checkbox lookalike
                      <label
                        className={`flex items-center gap-3 cursor-pointer select-none`}
                        onClick={toggleVerify}
                      >
                        <div
                          className={`flex items-center justify-center w-9 h-9 rounded border-2 ${
                            verified
                              ? "bg-orange-500 border-orange-600 "
                              : "bg-white border-gray-300"
                          }`}
                          aria-hidden="true"
                        >
                          {verified ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-transparent"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M0 0h20v20H0z" />
                            </svg>
                          )}
                        </div>
                        <div className="text-sm">
                          <div className="font-medium text-gray-900">
                            Verify you're Human
                          </div>
                          <div className="text-xs text-gray-500">
                            Protecting this site from spam
                          </div>
                        </div>
                      </label>
                    )}
                  </div>

                  {/* right: google-like icon & domain */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        className="opacity-90"
                      >
                        <circle cx="6" cy="12" r="2.5" fill="#4285F4" />
                        <circle cx="12" cy="12" r="2.5" fill="#EA4335" />
                        <circle cx="18" cy="12" r="2.5" fill="#FBBC05" />
                      </svg>
                      <span className="text-xs text-gray-500">
                        Google recaptcha
                      </span>
                    </div>
                  </div>
                </div>

                {/* small caption under box like reCAPTCHA */}
                <div className="mt-2 text-xs text-gray-500">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy?hl=en-US" target="_blank">Privacy Policy</a> and{" "}
                  <a href="https://policies.google.com/terms?hl=en" target="_blank">Terms of Service</a> apply.
                </div>
              </div>

              {/* Learn More button */}
              <div className="mt-6">
                <button
                  onClick={() => setModalOpen(true)}
                  disabled={!verified}
                  className={`montserrat inline-flex items-center gap-3 px-6 py-3 rounded font-semibold transition-all duration-200
                    ${
                      verified
                        ? "bg-orange-500 text-black hover:bg-orange-600"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed opacity-60"
                    }
                  `}
                >
                  Visit Site
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Auto-scrolling infinite slider */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-25">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg bg-white">
              <div
                ref={sliderRef}
                className="flex gap-6 py-6 px-4 md:px-6 items-stretch"
                style={{
                  // hide scrollbar visually (native scroll still used by RAF)
                  overflowX: "hidden",
                  scrollBehavior: "smooth",
                }}
              >
                {doubled.map((s, idx) => (
                  <div
                    key={idx}
                    className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[320px] flex-shrink-0 rounded-xl overflow-hidden"
                    style={{
                      backgroundImage: `url(${s.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: 220,
                      borderRadius: 8,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                    aria-hidden={idx >= slides.length}
                  >
                    <div className="p-1 flex justify-center bg-black/25 w-full text-white">
                      <div className="text-lg font-bold">{s.title}</div>
                      {/* <div className="text-sm opacity-90 mt-1">A quick project preview</div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-500 text-center"></div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative max-w-md w-full bg-white rounded-xl p-6 shadow-2xl z-10">
            <h3 className="text-xl font-bold montserrat mb-3 text-gray-900">
              Thanks for visiting our website
            </h3>
            <p className="text-gray-700 mb-4">
              You will be redirected in{" "}
              <span className="font-semibold">{countdown}</span> second
              {countdown !== 1 && "s"}.
            </p>

            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => {
                  // allow user to close and cancel redirect
                  setModalOpen(false);
                }}
                className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // immediate redirect
                  window.location.href = redirectUrl;
                }}
                className="px-4 py-2 bg-orange-500 text-black rounded-md font-semibold"
              >
                Go Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
