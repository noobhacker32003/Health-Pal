import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Consultation = () => {
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
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Menu />

      <div className="max-w-3xl mx-auto p-4 md:p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Consultation</h2>

        {/* Cards for selecting options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { id: "book", title: "Book a Consultation", desc: "Schedule an appointment with a doctor.", ring: "ring-teal-500" },
            { id: "join", title: "Join Live Consultation", desc: "Connect with a doctor in real-time.", ring: "ring-red-500" },
            { id: "history", title: "View Previous Consultations", desc: "Check your past appointments.", ring: "ring-blue-500" },
          ].map((tab) => (
            <div
              key={tab.id}
              className={`bg-white p-4 md:p-6 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition ${
                activeTab === tab.id ? `ring-2 ${tab.ring}` : ""
              }`}
              onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-800">{tab.title}</h3>
              <p className="text-gray-600 mt-2">{tab.desc}</p>
            </div>
          ))}
        </div>

        {/* Toggleable Content Below */}
        <div className="mt-6">
          {/* Book Consultation Form */}
          {activeTab === "book" && (
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Book a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Select Doctor */}
                <div>
                  <label className="block text-gray-700">Select Doctor</label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
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
                    <label className="block text-gray-700">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                {/* Consultation Type */}
                <div>
                  <label className="block text-gray-700">Consultation Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Select Type</option>
                    <option value="virtual">Virtual</option>
                    <option value="physical">Physical</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
                >
                  Book Now
                </button>
              </form>
            </div>
          )}

          {/* Join Live Consultation */}
          {activeTab === "join" && (
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Join Live Consultation</h3>
              <p className="text-gray-600">Click the button below to join your scheduled consultation.</p>
              <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
                Join Now
              </button>
            </div>
          )}

          {/* Previous Consultations */}
          {activeTab === "history" && (
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Previous Consultations</h3>
              <ul className="divide-y divide-gray-200">
                {[
                  { doctor: "Dr. Rahman", date: "2024-03-10", time: "10:00 AM" },
                  { doctor: "Dr. Ayesha", date: "2024-03-05", time: "02:00 PM" },
                ].map((item, index) => (
                  <li key={index} className="p-4 flex justify-between">
                    <div>
                      <span className="font-bold">{item.doctor}</span> - {item.date} at {item.time}
                    </div>
                    <span className="px-2 py-1 text-sm rounded bg-green-500 text-white">Completed</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Consultation;
