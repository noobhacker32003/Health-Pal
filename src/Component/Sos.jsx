import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiPill } from "react-icons/gi";
import Footer from "./Footer";

const Sos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const previousSosCalls = [
    { id: 1, time: "2024-03-05 14:30", status: "Resolved" },
    { id: 2, time: "2024-02-20 08:15", status: "Pending" },
  ];

  const handleCallAmbulance = () => {
    alert("🚑 Calling Ambulance..."); // Replace with real call functionality
  };

  return (
    <div className="min-h-screen bg-[#EEF2FB]">
      <Navbar />

      {/* Toggle Button (Top Left) */}
      <div className="absolute -top-[2px] right-4 z-50  sm:hidden flex">
        <button
          className="text-2xl text-[#0C103F] bg-[#FFFFFF] p-2 rounded-full shadow-md mt-4"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay for background dimming */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <div className="fixed top-0 right-0 h-full w-52 bg-[#FFFFFF] p-4 rounded-l-lg shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-2">
              
              <button onClick={() => setIsMenuOpen(false)}>
                <FaTimes className="text-2xl text-[#0C103F]" />
              </button>
              
            </div>
            <div className="flex items-center  gap-1">
            <GiPill className="w-7 h-7 "></GiPill>
            <h2 className="text-xl font-bold  text-[#0C103F] mb-1">HealthPal</h2>
            </div>
            <Menu />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-[#0C103F] mb-6">SOS Emergency</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Call Ambulance Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-[#0C103F]">Call an Ambulance</h3>
            <p className="text-[#0C103F] mt-2">Immediate medical assistance in case of emergency.</p>
            <button
              onClick={handleCallAmbulance}
              className="mt-4 bg-[#0C103F] text-white  py-2 px-4 rounded-lg  transition"
            >
              Call Now
            </button>
          </div>

          {/* Previous SOS Calls */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-[#0C103F] mb-4 text-center">Previous SOS Calls</h3>
            {previousSosCalls.length > 0 ? (
              <ul>
                {previousSosCalls.map((call) => (
                  <li key={call.id} className="p-4 border-b border-[#D0DBF3] flex justify-between">
                    <span className="font-bold text-[#0C103F]">{call.time}</span>
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        call.status === "Resolved" ? "bg-[#0C103F] text-white" : "bg-[#D0DBF3] text-[#0C103F]"
                      }`}
                    >
                      {call.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#0C103F]">No previous SOS calls.</p>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Sos;