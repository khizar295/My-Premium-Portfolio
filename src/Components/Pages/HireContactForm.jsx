import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import { FaPaperPlane, FaRegClock, FaDollarSign, FaFlagCheckered } from "react-icons/fa";

export default function HireContractForm() {
  const location = useLocation();
  const defaultType = location.state?.contractType || "hourly";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contractType: defaultType,
    subject: "",
    message: "",
    budgetRange: "",
    customBudget: "",
    milestoneAmount: "",
    milestoneBudgetRange: "",
    milestoneCustomBudget: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      firstName: formData.name,
      email: formData.email,
      contractType: formData.contractType,
      subject: formData.subject,
      message: formData.message,
      budgetRange: formData.budgetRange,
      customBudget: formData.customBudget,
      milestoneAmount: formData.milestoneAmount,
      milestoneBudgetRange: formData.milestoneBudgetRange,
      milestoneCustomBudget: formData.milestoneCustomBudget,
    };

    emailjs
      .send(
        "service_epmuhir",
        "template_iu9al8o",
        templateParams,
        "kMsgfdl-ffTyz0TRX"
      )
      .then(
        () => {
          setStatus("success");
          alert("Your contract form has been submitted successfully!");

          setFormData({
            name: "",
            email: "",
            contractType: defaultType,
            subject: "",
            message: "",
            budgetRange: "",
            customBudget: "",
            milestoneAmount: "",
            milestoneBudgetRange: "",
            milestoneCustomBudget: "",
          });
          setIsSubmitting(false);
        },
        (error) => {
          setStatus("error");
          alert("Failed to submit: " + error.text);
          setIsSubmitting(false);
        }
      );
  };

  const budgetOptions = [
    "0$ - 50$",
    "50$ - 100$",
    "100$ - 200$",
    "200$ - 300$",
    "300$ - 500$",
    "500$ - 700$",
    "700$ - 1000$",
    "Other Amount",
  ];

  const contractIcons = {
    hourly: <FaRegClock className="text-amber-500" />,
    fixed: <FaDollarSign className="text-amber-500" />,
    milestone: <FaFlagCheckered className="text-amber-500" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 pt-40">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl p-6 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
                <div className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-sm shadow-sm border border-stone-100">
                  {contractIcons[defaultType]} <span className="ml-2">Contract Agreement</span>
                </div>
              </div>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-800 mb-2">
              Hire {defaultType === "hourly" ? "Hourly" : defaultType === "fixed" ? "Fixed Price" : "Milestone"} Contract
            </h1>
            <p className="text-stone-600">
              Please fill out the details below to proceed with your project
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-stone-600 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                  placeholder="Your name"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-stone-600 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                  placeholder="your@email.com"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-600 text-sm font-medium mb-2">
                Contract Type
              </label>
              <select
                name="contractType"
                value={formData.contractType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
              >
                <option value="hourly">Hourly</option>
                <option value="fixed">Fixed Price</option>
                <option value="milestone">Per Milestone</option>
              </select>
            </div>

            {formData.contractType === "fixed" && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-stone-600 text-sm font-medium mb-2">
                    Select Your Budget
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                    required
                  >
                    <option value="">Select Budget</option>
                    {budgetOptions.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.budgetRange === "Other Amount" && (
                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Enter Custom Budget
                    </label>
                    <input
                      type="number"
                      name="customBudget"
                      value={formData.customBudget}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                      placeholder="Enter Budget in USD"
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
              </div>
            )}

            {formData.contractType === "milestone" && (
              <div className="space-y-4 animate-fadeIn">
                <div>
                  <label className="block text-stone-600 text-sm font-medium mb-2">
                    Amount for 1st Milestone
                  </label>
                  <input
                    type="number"
                    name="milestoneAmount"
                    value={formData.milestoneAmount}
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                    placeholder="Enter milestone amount"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-stone-600 text-sm font-medium mb-2">
                    Select Budget for Milestones
                  </label>
                  <select
                    name="milestoneBudgetRange"
                    value={formData.milestoneBudgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                    required
                  >
                    <option value="">Select Budget</option>
                    {budgetOptions.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.milestoneBudgetRange === "Other Amount" && (
                  <div>
                    <label className="block text-stone-600 text-sm font-medium mb-2">
                      Enter Custom Milestone Budget
                    </label>
                    <input
                      type="number"
                      name="milestoneCustomBudget"
                      value={formData.milestoneCustomBudget}
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                      placeholder="Enter Milestone Budget in USD"
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
              </div>
            )}

            <div>
              <label className="block text-stone-600 text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700"
                placeholder="Project Subject"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-stone-600 text-sm font-medium mb-2">
                Project Details *
              </label>
              <textarea
                name="message"
                value={formData.message}
                className="w-full px-4 py-3 rounded-xl bg-white/80 border border-stone-200 focus:border-amber-300 focus:ring-2 focus:ring-amber-200 transition-all duration-300 outline-none text-stone-700 resize-none h-32"
                placeholder="Tell me about your project requirements, timeline, and expectations..."
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full md:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-stone-800 to-stone-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? "Submitting..." : "Submit Contract"}
                <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>

          {status === "success" && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-center">
              ✔ Form sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === "error" && (
            <div className="mt-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-center">
              ✖ Failed to send. Please try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}