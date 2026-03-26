import React, { useEffect, useRef, useState } from "react";
import { FaExternalLinkAlt, FaShieldAlt, FaSpinner, FaCheckCircle } from "react-icons/fa";
import img1 from "../../assets/slider-proj-5-1.png";
import img2 from "../../assets/slider-proj-5-2.png";
import img3 from "../../assets/slider-proj-5-3.png";
import img4 from "../../assets/slider-proj-5-4.png";
import img5 from "../../assets/slider-proj-5-5.png";
import img6 from "../../assets/slider-proj-5-6.png";
import img7 from "../../assets/slider-proj-5-7.png";
import img8 from "../../assets/slider-proj-5-8.png";
import img9 from "../../assets/slider-proj-5-9.png";
import img10 from "../../assets/slider-proj-5-10.png";
import img11 from "../../assets/slider-proj-5-11.png";
import img12 from "../../assets/slider-proj-5-12.png";

export default function Project5() {
  const redirectUrl = "https://khizar-portfolio-3.vercel.app/";
  const [recaptchaLoading, setRecaptchaLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const sliderRef = useRef(null);

  const slides = [
    { id: 1, title: "Project Shot 1", img: img1 },
    { id: 2, title: "Project Shot 2", img: img2 },
    { id: 3, title: "Project Shot 3", img: img3 },
    { id: 4, title: "Project Shot 4", img: img4 },
    { id: 5, title: "Project Shot 5", img: img5 },
    { id: 6, title: "Project Shot 6", img: img6 },
    { id: 7, title: "Project Shot 7", img: img7 },
    { id: 8, title: "Project Shot 8", img: img8 },
    { id: 9, title: "Project Shot 9", img: img9 },
    { id: 10, title: "Project Shot 10", img: img10 },
    { id: 11, title: "Project Shot 11", img: img11 },
    { id: 12, title: "Project Shot 12", img: img12 },
  ];

  const doubled = [...slides, ...slides];

  useEffect(() => {
    const t = setTimeout(() => setRecaptchaLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let timer;
    if (modalOpen) {
      setCountdown(3);
      timer = setInterval(() => {
        setCountdown((c) => {
          if (c <= 1) {
            clearInterval(timer);
            setTimeout(() => (window.location.href = redirectUrl), 300);
            return 0;
          }
          return c - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [modalOpen, redirectUrl]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let rafId;
    const step = () => {
      el.scrollLeft += 0.5;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = el.scrollLeft - el.scrollWidth / 2;
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const toggleVerify = () => {
    if (!recaptchaLoading) setVerified((v) => !v);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 pt-40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          <div className="w-full lg:w-1/2">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-6 md:p-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 mb-5">
                <span className="text-xs font-medium text-stone-600">Portfolio Theme V3</span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mb-4">
                Creative Portfolio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">Showcase</span>
              </h1>
              
              <p className="text-stone-600 leading-relaxed mb-6">
                A modern and creative portfolio theme designed to showcase skills and projects 
                in an elegant way. Built with modern front-end technologies featuring responsive 
                design, smooth animations, and a professional layout that highlights your best work.
              </p>

              <div className="mt-6">
                <div className="bg-white/80 rounded-xl border border-stone-200 p-4">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      {recaptchaLoading ? (
                        <div className="flex items-center gap-3">
                          <FaSpinner className="w-5 h-5 text-amber-500 animate-spin" />
                          <div>
                            <div className="text-sm font-medium text-stone-700">Loading verification</div>
                            <div className="text-xs text-stone-400">Checking... please wait</div>
                          </div>
                        </div>
                      ) : (
                        <label onClick={toggleVerify} className="flex items-center gap-3 cursor-pointer">
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${verified ? "bg-gradient-to-r from-amber-500 to-rose-500 border-transparent" : "border-stone-300 bg-white"}`}>
                            {verified && <FaCheckCircle className="w-4 h-4 text-white" />}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-stone-700">Verify you're Human</div>
                            <div className="text-xs text-stone-400">Protecting this site from spam</div>
                          </div>
                        </label>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaShieldAlt className="w-4 h-4 text-stone-400" />
                      <span className="text-xs text-stone-400">reCAPTCHA protected</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-stone-400">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">Privacy Policy</a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="text-amber-600 hover:underline">Terms of Service</a> apply.
                </div>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setModalOpen(true)}
                  disabled={!verified}
                  className={`group relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    verified
                      ? "bg-gradient-to-r from-stone-800 to-stone-700 text-white shadow-md hover:shadow-lg hover:scale-[1.02]"
                      : "bg-stone-200 text-stone-400 cursor-not-allowed"
                  }`}
                >
                  <span>Visit Live Demo</span>
                  <FaExternalLinkAlt className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                  {verified && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full -z-0"></div>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/20 to-rose-200/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-stone-100">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-200"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-200"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
                  </div>
                </div>
                <div ref={sliderRef} className="flex gap-4 py-6 px-4 overflow-hidden" style={{ overflowX: "hidden" }}>
                  {doubled.map((s, idx) => (
                    <div
                      key={idx}
                      className="min-w-[240px] sm:min-w-[280px] md:min-w-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-md group"
                      style={{ backgroundImage: `url(${s.img})`, backgroundSize: "cover", backgroundPosition: "center", height: 220 }}
                    >
                      <div className="h-full w-full bg-gradient-to-t from-stone-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                        <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">{s.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          <div className="relative max-w-md w-full bg-white rounded-2xl p-6 shadow-2xl animate-fadeInUp">
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-amber-100 to-rose-100 flex items-center justify-center">
                <FaExternalLinkAlt className="text-2xl text-amber-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-800 mb-2">Redirecting to Demo</h3>
              <p className="text-stone-600">You will be redirected in <span className="font-semibold text-amber-600">{countdown}</span> second{countdown !== 1 && "s"}</p>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <button onClick={() => setModalOpen(false)} className="px-5 py-2 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors">Close</button>
              <button onClick={() => (window.location.href = redirectUrl)} className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium hover:shadow-md transition-all">Go Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}