import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HirePage() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const contractTypes = [
    {
      id: "hourly",
      title: "Hourly Contract",
      desc: "Pay only for actual hours worked. Best for flexible or ongoing projects.",
      extra: (
        <>
          <p className="mb-2">
            <strong>My hourly rate:</strong>{" "}
            <span className="text-green-600">$7/hour</span>
          </p>
          <p>
            Ideal for evolving scope, continuous updates, or long-term work. You
            pay only for tracked hours.
          </p>
        </>
      ),
      finalBtn: "Continue as Hourly",
      navigateType: "hourly",
    },

    {
      id: "fixed",
      title: "Fixed Price Contract",
      desc: "A set amount for a complete project. Best when scope is clear.",
      extra: (
        <>
          <p className="mb-2">
            Agree on a single project amount (example: $100, $250, etc.).
          </p>
          <p>
            You pay only when final work is delivered. Ideal for small and
            planned projects.
          </p>
        </>
      ),
      finalBtn: "Continue as Fixed Price",
      navigateType: "fixed",
    },

    {
      id: "milestone",
      title: "Per Milestone Contract",
      desc: "Divide the project into phases and pay after each milestone.",
      extra: (
        <>
          <p className="mb-2">
            Example milestones: Design → Development → Testing → Deployment.
          </p>
          <p>
            Each milestone has its own price and timeline—ideal for medium or
            large projects.
          </p>
        </>
      ),
      finalBtn: "Start 1st Milestone",
      navigateType: "milestone",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-10 mt-50">
      <h2 className="text-2xl font-bold mb-6 montserrat">
        Which type of contract do you want to give?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contractTypes.map((type) => (
          <div
            key={type.id}
            className="border p-5 rounded-xl shadow transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 montserrat">
              {type.title}
            </h3>

            <p className="text-gray-700 mb-4 lato-regular">{type.desc}</p>

            {selected !== type.id && (
              <button
                className="montserrat bg-orange-500 hover:bg-orange-600 px-6 py-2 font-semibold border-2 border-black transition-colors duration-500 cursor-pointer text-black rounded"
                onClick={() => setSelected(type.id)}
              >
                Continue
              </button>
            )}

            {selected === type.id && (
              <div className="mt-4 p-4 border-t bg-gray-50 rounded">
                <div className="text-gray-800 lato-regular">{type.extra}</div>

                <button
                  className="montserrat bg-orange-500 hover:bg-orange-600 px-6 py-2 font-semibold border-2 border-black transition-colors duration-500 cursor-pointer text-black rounded w-full"
                  onClick={() =>
                    navigate("/hire-form", {
                      state: { contractType: type.navigateType },
                    })
                  }
                >
                  {type.finalBtn}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
