import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegClock, FaDollarSign, FaFlagCheckered, FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function HirePage() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const contractTypes = [
    {
      id: "hourly",
      title: "Hourly Contract",
      desc: "Pay only for actual hours worked. Best for flexible or ongoing projects.",
      rate: "$7/hour",
      icon: FaRegClock,
      color: "from-amber-400 to-amber-500",
      features: [
        "Flexible scope and requirements",
        "Pay only for tracked hours",
        "Perfect for ongoing updates",
        "Quick response time"
      ],
      extra: (
        <>
          <p className="mb-3 text-stone-600">
            Ideal for evolving scope, continuous updates, or long-term work. You
            pay only for tracked hours.
          </p>
          <div className="bg-amber-50 rounded-lg p-3 mt-3">
            <span className="text-sm font-medium text-amber-700">Hourly Rate: </span>
            <span className="text-lg font-bold text-amber-600">$7/hour</span>
          </div>
        </>
      ),
      navigateType: "hourly",
    },
    {
      id: "fixed",
      title: "Fixed Price Contract",
      desc: "A set amount for a complete project. Best when scope is clear.",
      icon: FaDollarSign,
      color: "from-emerald-400 to-emerald-500",
      features: [
        "Clear project scope",
        "One-time payment",
        "Final delivery based",
        "Perfect for small projects"
      ],
      extra: (
        <>
          <p className="mb-3 text-stone-600">
            Agree on a single project amount. You pay only when final work is delivered.
          </p>
          <p className="text-stone-600">
            Ideal for small and planned projects with well-defined requirements.
          </p>
        </>
      ),
      navigateType: "fixed",
    },
    {
      id: "milestone",
      title: "Per Milestone Contract",
      desc: "Divide the project into phases and pay after each milestone.",
      icon: FaFlagCheckered,
      color: "from-rose-400 to-rose-500",
      features: [
        "Phased payments",
        "Track progress easily",
        "Risk-free delivery",
        "Perfect for medium/large projects"
      ],
      extra: (
        <>
          <p className="mb-3 text-stone-600">
            Example milestones: Design → Development → Testing → Deployment.
          </p>
          <p className="text-stone-600">
            Each milestone has its own price and timeline—ideal for structured projects.
          </p>
        </>
      ),
      navigateType: "milestone",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefaf5] to-[#fff7f0] py-16 px-4 md:px-8 lg:px-16 pt-40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/40 to-rose-200/40 rounded-full blur-xl"></div>
              <button className="relative px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm text-stone-700 font-medium text-sm shadow-sm border border-stone-100">
                Start Collaboration
              </button>
            </div>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-500">Contract Type</span>
          </h1>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Select the payment structure that best fits your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contractTypes.map((type) => {
            const IconComponent = type.icon;
            const isSelected = selected === type.id;
            
            return (
              <div
                key={type.id}
                className={`group relative bg-white/60 backdrop-blur-sm rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  isSelected 
                    ? "border-amber-300 shadow-lg" 
                    : "border-white/50 hover:border-amber-200"
                }`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-6">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${type.color} rounded-full blur-md group-hover:blur-lg transition-all duration-300`}></div>
                      <IconComponent className={`relative text-3xl bg-gradient-to-r ${type.color} bg-clip-text text-transparent`} />
                    </div>
                    {isSelected && (
                      <FaCheckCircle className="text-emerald-500 text-xl" />
                    )}
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-stone-800 mb-2">
                    {type.title}
                  </h3>
                  
                  <p className="text-stone-600 text-sm mb-4">
                    {type.desc}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-stone-500 text-xs">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.color}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {!isSelected && (
                    <button
                      className="group/btn w-full py-2.5 rounded-full bg-stone-800 text-white font-medium text-sm hover:bg-gradient-to-r hover:from-amber-500 hover:to-rose-500 transition-all duration-300 flex items-center justify-center gap-2"
                      onClick={() => setSelected(type.id)}
                    >
                      Select Contract
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  )}

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-stone-200 animate-fadeIn">
                      <div className="text-stone-700 text-sm space-y-3">
                        {type.extra}
                      </div>
                      
                      <button
                        className="mt-4 w-full py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
                        onClick={() =>
                          navigate("/hire-form", {
                            state: { contractType: type.navigateType },
                          })
                        }
                      >
                        {type.id === "hourly" && "Continue as Hourly →"}
                        {type.id === "fixed" && "Continue as Fixed Price →"}
                        {type.id === "milestone" && "Start 1st Milestone →"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-stone-100">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-stone-500 text-sm">Need help choosing? I'm here to guide you!</span>
          </div>
        </div>
      </div>
    </div>
  );
}