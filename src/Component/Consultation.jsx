import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiPill } from "react-icons/gi";
import Footer from "./Footer";

const Consultation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    type: "",
  });

  const doctors = ["Dr. Rahman", "Dr. Ayesha", "Dr. Karim"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation Request:", formData);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Navbar></Navbar>
      {/* Toggle Button for Menu */}
      <div className="fixed -top-[2px] right-4 z-50  sm:hidden flex">
        <button
          className="text-2xl text-[#0C103F] bg-[#FFFFFF] p-2 rounded-full shadow-md mt-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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

      {/* Main Content (No Shift, stays in place) */}
      <div className="pt-10 px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center text-[#0C103F] mb-6">Consultation</h2>

        {/* Cards for selecting options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
            id: "book", title: "Book a Consultation", desc: "Schedule an appointment with a doctor.", ring: ""
          }, {
            id: "join", title: "Join Live Consultation", desc: "Connect with a doctor in real-time.", ring: ""
          }, {
            id: "history", title: "View Previous Consultations", desc: "Check your past appointments.", ring: ""
          }].map((tab) => (
            <div
              key={tab.id}
              className={`bg-[#FFFFFF] p-4 md:p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition ${
                activeTab === tab.id ? `ring-2 ${tab.ring}` : ""
              }`}
              onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
            >
              <h3 className="text-lg md:text-xl font-bold text-[#0C103F]">{tab.title}</h3>
              <p className="text-gray-600 mt-2">{tab.desc}</p>
            </div>
          ))}
        </div>

        {/* Toggleable Content Below */}
        <div className="mt-6">
          {/* Book Consultation Form */}
          {activeTab === "book" && (
            <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#0C103F] mb-4">Book a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Doctor */}
                <div>
                  <label className="block text-[#0C103F]">Select Doctor</label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg  "
                  >
                    <option value="">Choose Doctor</option>
                    {doctors.map((doc, index) => (
                      <option key={index} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#0C103F]">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg  "
                    />
                  </div>
                  <div>
                    <label className="block text-[#0C103F]">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg  "
                    />
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block text-[#0C103F]">Consultation Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg  "
                  >
                    <option value="">Select Type</option>
                    <option value="virtual">Virtual</option>
                    <option value="physical">Physical</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0C103F] text-[#FFFFFF] py-2 rounded-lg  transition"
                >
                  Book Now
                </button>
              </form>
            </div>
          )}

          {/* Join Live Consultation */}
          {activeTab === "join" && (
            <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#0C103F] mb-4">Join Live Consultation</h3>
              <p className="text-gray-600">Click the button below to join your scheduled consultation.</p>
              <button className="mt-4 bg-[#0C103F] text-[#FFFFFF] py-2 px-4 rounded-lg  transition">
                Join Now
              </button>
            </div>
          )}

          {/* Previous Consultations */}
          {activeTab === "history" && (
            <div className="bg-[#FFFFFF] p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#0C103F] mb-4">Previous Consultations</h3>
              <ul className="divide-y divide-gray-200">
                {[{
                  doctor: "Dr. Rahman", date: "2024-03-10", time: "10:00 AM"
                }, {
                  doctor: "Dr. Ayesha", date: "2024-03-05", time: "02:00 PM"
                }].map((item, index) => (
                  <li key={index} className="p-4 flex justify-between">
                    <div>
                      <span className="font-bold">{item.doctor}</span> - {item.date} at {item.time}
                    </div>
                    <span className="px-2 py-1 text-sm rounded bg-green-500 text-[#FFFFFF]">Completed</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Consultation;
