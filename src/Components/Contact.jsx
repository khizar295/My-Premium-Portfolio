import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactImage from "../assets/contact-image.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div
      id="contact"
      className="w-full mt-15 overflow-x-hidden p-3 bg-[blanchedalmond]"
    >
      <button className="relative transform rotate-[-13deg] px-6 py-3 bg-amber-200 hover:bg-amber-100 text-black font-semibold shadow-md before:content-[''] before:absolute before:w-3 before:h-3 before:bg-white before:rounded-full before:border before:border-gray-400 before:top-1/2 before:-left-1.5 before:-translate-y-1/2 after:content-[''] after:absolute after:w-4 after:h-[1px] after:bg-gray-400 after:top-1/2 after:-translate-y-1/2 after:-left-3">
        Contact
      </button>
      <div className="row">
        <h1 className="text-[60px] font-[650] pt-7">Let's Discuss Project</h1>
      </div>

      <div className="contact-sections mt-10">
        <div className="contact-left bg-white p-7 border-3 border-black shadow-lg pt-14">
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <p className="font-bold text-gray-400">First Name</p>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.firstName && (
                  <div className="input-error">{errors.firstName}</div>
                )}
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-400">Your Email</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email * "
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {errors.email && (
                  <div className="input-error">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-bold text-gray-400">Subject</p>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors.subject && (
                <div className="input-error">{errors.subject}</div>
              )}
            </div>

            <div className="mb-4">
              <p className="font-bold text-gray-400">Your Message</p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message *"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 resize-none"
              />
              {errors.message && (
                <div className="input-error">{errors.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 font-semibold border-2 border-black transition-colors duration-500 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-right p-6 rounded-xl flex flex-col items-start">
          <div className="flex items-start mb-2 ml-50">
            <FaPhoneAlt
              className="text-white mr-3 mt-2 bg-blue-800 p-2 rounded-3xl"
              size={45}
            />
            <div>
              <div className="font-bold">Phone</div>
              <div className="font-semibold">+92 302 0549 259</div>
            </div>
          </div>
          <hr className="w-[50%] mb-3 self-end border-4 border-black" />

          <div className="flex items-start mb-3 ml-50">
            <FaEnvelope
              className="text-white mr-3 mt-2 bg-blue-800 p-2 rounded-3xl"
              size={45}
            />
            <div>
              <div className="font-bold">Mail</div>
              <div className="font-semibold">khizarrehman45@gmail.com</div>
            </div>
          </div>
          <hr className="w-[50%] mb-3 self-end border-4 border-black" />

          <div className="flex items-start mb-3 ml-50">
            <FaMapMarkerAlt
              className="text-white mr-3 mt-2 bg-blue-800 p-2 rounded-3xl"
              size={45}
            />
            <div>
              <div className="font-bold">Visit my Studio</div>
              <div className="font-semibold">Lodhran, Punjab, Pakistan</div>
            </div>
          </div>
          <hr className="w-[50%] mb-3 self-end border-4 border-black" />

          <img
            src={contactImage}
            alt="Studio"
            className="mt-4 rounded-xl w-[50%] ml-60 hover:scale-105 transition-scale duration-500 cursor-pointer shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
