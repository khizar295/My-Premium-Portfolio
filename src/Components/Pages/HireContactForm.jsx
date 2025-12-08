import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          setStatus("error");
          alert("Failed to submit: " + error.text);
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

  return (
    <div className="container mx-auto px-4 my-10 bg-white p-6 rounded-xl shadow-2xl mt-30">
      <h1 className="text-3xl font-bold mb-6 montserrat">Hire Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-bold text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-bold text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-bold text-gray-400">Contract Type</label>
          <select
            name="contractType"
            value={formData.contractType}
            onChange={handleChange}
            className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none"
          >
            <option value="hourly">Hourly</option>
            <option value="fixed">Fixed Price</option>
            <option value="milestone">Per Milestone</option>
          </select>
        </div>

        {formData.contractType === "fixed" && (
          <>
            <div>
              <label className="font-bold text-gray-400">
                Select Your Budget
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none"
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
                <label className="font-bold text-gray-400">
                  Enter Custom Budget
                </label>
                <input
                  type="number"
                  name="customBudget"
                  value={formData.customBudget}
                  className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none"
                  placeholder="Enter Budget in USD"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </>
        )}

        {formData.contractType === "milestone" && (
          <>
            <div>
              <label className="font-bold text-gray-400">
                Amount for 1st Milestone
              </label>
              <input
                type="number"
                name="milestoneAmount"
                value={formData.milestoneAmount}
                className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none"
                placeholder="Enter milestone amount"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="font-bold text-gray-400">
                Select Budget for Milestones
              </label>
              <select
                name="milestoneBudgetRange"
                value={formData.milestoneBudgetRange}
                onChange={handleChange}
                className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none text-black font-bold"
                required
              >
                <option value="" className="font-bold text-gray-400">
                  Select Budget
                </option>
                {budgetOptions.map((range) => (
                  <option key={range} value={range} className="font-bold">
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {formData.milestoneBudgetRange === "Other Amount" && (
              <div>
                <label className="font-bold text-gray-400">
                  Enter Custom Milestone Budget
                </label>
                <input
                  type="number"
                  name="milestoneCustomBudget"
                  value={formData.milestoneCustomBudget}
                  className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none"
                  placeholder="Enter Milestone Budget in USD"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </>
        )}

        <div>
          <label className="font-bold text-gray-400">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none"
            placeholder="Project Subject"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-bold text-gray-400">Message</label>
          <textarea
            name="message"
            value={formData.message}
            className="w-full border-3 border-orange-500 p-2 rounded shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-all duration-400 lato-regular resize-none h-32"
            placeholder="Project details..."
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="montserrat bg-orange-500 hover:bg-orange-600 px-6 py-2 font-semibold border-2 border-black transition-colors duration-500 cursor-pointer text-black rounded"
        >
          Submit
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 font-semibold mt-4">
          ✔ Form sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-semibold mt-4">
          ✖ Failed to send. Try again.
        </p>
      )}
    </div>
  );
}
