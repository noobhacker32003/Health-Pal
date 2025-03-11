import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Help = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle the toggle of the menu

  return (
    <div className="flex flex-col w-full">
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
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-[#FFFFFF]  p-4 flex items-center justify-between">
          {/* Search Bar */}
          {/* <input
            type="text"
            placeholder="Search here..."
            className="border rounded-lg px-4 py-2 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-[#0C103F]"
          /> */}
        </div>

        {/* Help & Support Content */}
        <div className="p-6 max-w-full mx-auto py-16">
          <h2 className="text-2xl font-bold text-[#0C103F] mb-6">Help & Support</h2>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ Section */}
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0C103F]">Frequently Asked Questions</h3>
              <div className="space-y-2">
                <details className="border p-3 rounded-lg cursor-pointer">
                  <summary className="font-bold text-[#0C103F]">How do I make a consultation?</summary>
                  <p className="text-[#0C103F] mt-2">You book an appointment through the consultation menu.</p>
                </details>
                <details className="border p-3 rounded-lg cursor-pointer">
                  <summary className="font-bold text-[#0C103F]">How to call an ambulance?</summary>
                  <p className="text-[#0C103F] mt-2">Just press the SOS button and the ambulance will be at your doorstep.</p>
                </details>
                <details className="border p-3 rounded-lg cursor-pointer">
                  <summary className="font-bold text-[#0C103F]">What payment methods are there?</summary>
                  <p className="text-[#0C103F] mt-2">All payment information will be given to your email by the respected hospitals.</p>
                </details>
              </div>
            </div>

            {/* Contact Support Form */}
            <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-[#0C103F]">Contact Support</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-[#0C103F]">Name</label>
                  <input
                    type="text"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#0C103F]"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#0C103F]">Email</label>
                  <input
                    type="email"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#0C103F]"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-[#0C103F]">Message</label>
                  <textarea
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-[#0C103F]"
                    placeholder="Describe your issue or question"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0C103F] text-[#FFFFFF] py-2 rounded-lg hover:bg-[#D0DBF3] transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
