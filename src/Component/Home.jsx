import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Toggle Button (Top Left) */}
      <div className="absolute top-20 left-4 ">
        <button
          className="text-2xl text-[#0C103F] bg-[#FFFFFF] p-2 rounded-full shadow-md"
          onClick={() => setIsMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Overlay Menu (Appears in Top Left) */}
      {isMenuOpen && (
        <div className="fixed top-4 left-4 bg-[#FFFFFF] p-4 rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-[#0C103F]">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <FaTimes className="text-2xl text-[#0C103F]" />
            </button>
          </div>
          <Menu />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 py-16">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mt-6 text-[#0C103F]">
          Welcome to HealthPal
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-start max-w-5xl w-full mt-6 px-4">
          
          {/* Cards (Same Height & Layout) */}
          {[{
            title: "Medicines For The Day",
            content: [
              "✅ 9 am: 1 capsule Ace (After breakfast)",
              "✅ 10 pm: 2 tbsp Gavisol (30 mins before dinner)",
              "✅ 10 pm: 3 tablets Thyrox (After dinner)",
            ],
            buttonText: "View details",
          }, {
            title: "Consultation",
            content: [
              "📅 24/02/12 - 10 am: Dr. Mark Spencer (Virtual)",
              "📅 27/02/12 - 8:00 pm: Dr. Katherine Moss (Room #7A-12, Mt Elizabeth Hospital)",
            ],
            buttonText: "View details",
          }, {
            title: "Your Daily Health Tip",
            content: [
              "💧 Stay hydrated! Proper hydration supports digestion, brain function, and energy levels.",
            ],
            buttonText: "Explore",
          }].map((card, index) => (
            <div
              key={index}
              className="bg-[#D0DBF3] shadow-md p-6 rounded-md min-h-[240px] flex flex-col justify-between w-full"
            >
              <h2 className="text-lg sm:text-2xl font-bold text-[#0C103F]">{card.title}</h2>
              <ul className="mt-4 space-y-2 text-sm flex-grow text-[#0C103F]">
                {card.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="mt-4 w-full bg-[#0C103F] text-white py-2 rounded-md hover:bg-[#D0DBF3] transition">
                {card.buttonText}
              </button>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Home;
