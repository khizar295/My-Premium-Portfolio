import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      setIsSubmitting(true);
      const templateParams = {
        firstName: formData.firstName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      emailjs
        .send(
          "service_epmuhir",
          "template_u5bkhdb",
          templateParams,
          "kMsgfdl-ffTyz0TRX"
        )
        .then(
          () => {
            alert("Message sent successfully!");
            setFormData({
              firstName: "",
              email: "",
              subject: "",
              message: "",
            });
            setIsSubmitting(false);
          },
          (error) => {
            alert("Failed to send message: " + error.text);
            setIsSubmitting(false);
          }
        );
    }
  };

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      details: "+92 302 0549 259",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      icon: FaEnvelope,
      title: "Mail",
      details: "khizarrehman45@gmail.com",
      gradient: "from-amber-400 to-amber-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit my Studio",
      details: "Lodhran, Punjab, Pakistan",
      gradient: "from-rose-400 to-rose-500"
    }
  ];

  return (
    <div
      id="contact"
      className="w-full bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
              <button className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-sm shadow-sm border border-stone-100">
                Get In Touch
              </button>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
            Let's Discuss <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">Project</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-stone-800 mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col md:flex-row gap-4 mb-5">
                  <div className="flex-1">
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                    />
                    {errors.firstName && (
                      <div className="text-rose-500 text-xs mt-1 font-medium">
                        {errors.firstName}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                    />
                    {errors.email && (
                      <div className="text-rose-500 text-xs mt-1 font-medium">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-stone-600 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                  />
                  {errors.subject && (
                    <div className="text-rose-500 text-xs mt-1 font-medium">
                      {errors.subject}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-stone-600 text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700 resize-none"
                  />
                  {errors.message && (
                    <div className="text-rose-500 text-xs mt-1 font-medium">
                      {errors.message}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-stone-800 to-stone-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-stone-800 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index}>
                      <div className="flex items-start gap-4 group">
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-full blur-md group-hover:blur-lg transition-all duration-300`}></div>
                          <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${info.gradient} flex items-center justify-center shadow-sm`}>
                            <IconComponent className="text-white text-lg" />
                          </div>
                        </div>
                        <div>
                          <div className="font-display font-semibold text-stone-800 text-lg">
                            {info.title}
                          </div>
                          <div className="text-stone-600 font-medium">
                            {info.details}
                          </div>
                        </div>
                      </div>
                      {index < contactInfo.length - 1 && (
                        <div className="w-full h-px bg-gradient-to-r from-stone-200 to-transparent my-4"></div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Availability Note */}
              <div className="mt-8 p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-medium text-stone-600">Available for work</span>
                </div>
                <p className="text-stone-600 text-sm">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}