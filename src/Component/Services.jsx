import React from "react";
import { FaAmbulance, FaStethoscope } from "react-icons/fa";
import { CiPill, CiHeart } from "react-icons/ci";

const servicesData = [
  {
    id: 1,
    title: "SOS services",
    description: "Fast emergency ambulance services just one click away.",
    icon: <FaAmbulance className="text-5xl text-[#0C103F]" />,
  },
  {
    id: 2,
    title: "Medicine Reminders",
    description: "All your medicine reminders throughout the day, throughout your healing process.",
    icon: <CiPill className="text-5xl text-[#0C103F]" />,
  },
  {
    id: 3,
    title: "Health Tips",
    description: "Daily health tips catered to you sourced from authentic and in-house sources.",
    icon: <CiHeart className="text-5xl text-[#0C103F]" />,
  },
  {
    id: 4,
    title: "Schedule consultations",
    description: "Schedule virtual consultations with the doctor of your choice or book a clinic visit.",
    icon: <FaStethoscope className="text-5xl text-[#0C103F]" />,
  },
];

const Services = () => {
  return (
    <div className="mt-10 py-6 text-center bg-[#EEF2FB] sm:px-20">
      <h1 className="text-4xl font-bold mb-6 text-[#0C103F]">Our Services</h1>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        {servicesData.map((service) => (
          <div key={service.id} className="card ml-10 bg-[#FFFFFF] w-64 sm:w-96 shadow-xl sm:p-5">
            <div className="card-body sm:flex flex-col items-center">
              {service.icon} {/* Render the icon */}
              <h2 className="card-title mt-3 text-[#0C103F]">{service.title}</h2>
              <p className="text-[#0C103F]">{service.description}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-[#0C103F] text-white hover:bg-[#D0DBF3] hover:text-[#0C103F]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;