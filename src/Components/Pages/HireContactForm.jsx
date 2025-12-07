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
        {/* NAME */}
        <div>
          <label className="font-bold text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
        </div>

        {/* CONTRACT TYPE */}
        <div>
          <label className="font-semibold">Contract Type</label>
          <select
            name="contractType"
            value={formData.contractType}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
          >
            <option value="hourly">Hourly</option>
            <option value="fixed">Fixed Price</option>
            <option value="milestone">Per Milestone</option>
          </select>
        </div>

        {/* FIXED PRICE FIELDS */}
        {formData.contractType === "fixed" && (
          <>
            <div>
              <label className="font-semibold">Select Your Budget</label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
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
                <label className="font-semibold">Enter Custom Budget</label>
                <input
                  type="number"
                  name="customBudget"
                  value={formData.customBudget}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
                  placeholder="Enter Budget in USD"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </>
        )}

        {/* PER MILESTONE FIELDS */}
        {formData.contractType === "milestone" && (
          <>
            <div>
              <label className="font-semibold">Amount for 1st Milestone</label>
              <input
                type="number"
                name="milestoneAmount"
                value={formData.milestoneAmount}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
                placeholder="Enter milestone amount"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="font-semibold">Select Budget for Milestones</label>
              <select
                name="milestoneBudgetRange"
                value={formData.milestoneBudgetRange}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
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
                <label className="font-semibold">Enter Custom Milestone Budget</label>
                <input
                  type="number"
                  name="milestoneCustomBudget"
                  value={formData.milestoneCustomBudget}
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
                  placeholder="Enter Milestone Budget in USD"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
          </>
        )}

        {/* SUBJECT */}
        <div>
          <label className="font-semibold">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular"
            placeholder="Project Subject"
            onChange={handleChange}
            required
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none lato-regular h-32"
            placeholder="Project details..."
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
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
