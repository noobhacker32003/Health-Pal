import React, { useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiPill } from "react-icons/gi";
import Footer from "./Footer";

const Medicine = () => {
  const [formData, setFormData] = useState({
    name: "",
    timings: "",
    quantity: "",
    duration: "",
    mealTiming: "",
    extraDetails: "",
    prescription: null,
    expiryDate: "",
  });

  const [medicines, setMedicines] = useState([
    {
      name: "Paracetamol",
      timings: "Morning & Night",
      quantity: "1 Tablet",
      duration: "5 Days",
      mealTiming: "after",
      expiryDate: "2025-12-31",
    },
    {
      name: "Amoxicillin",
      timings: "Afternoon",
      quantity: "2 Capsules",
      duration: "7 Days",
      mealTiming: "before",
      expiryDate: "2024-03-15",
    },
    {
      name: "Vitamin D3",
      timings: "Morning",
      quantity: "1 Tablet",
      duration: "1 Month",
      mealTiming: "after",
      expiryDate: "2026-06-20",
    },
    {
      name: "Cough Syrup",
      timings: "Before Bed",
      quantity: "10ml",
      duration: "5 Days",
      mealTiming: "after",
      expiryDate: "2024-02-28",
    },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, prescription: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMedicines([...medicines, formData]);
    setFormData({
      name: "",
      timings: "",
      quantity: "",
      duration: "",
      mealTiming: "",
      extraDetails: "",
      prescription: null,
      expiryDate: "",
    });
  };

  const isExpired = (date) => {
    return new Date(date) < new Date();
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
        <div className="fixed inset-0 z-50 ">
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

      {/* Form Container */}
      <div className="flex justify-center items-center min-h-screen bg-[#EEF2FB] px-4 py-16">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-[#0C103F] mb-6">Add Medicine</h2>

          <form onSubmit={handleSubmit}>
            {/* Use grid for responsive layout */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-[#0C103F]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0DBF3]"
                />
              </div>

              <div>
                <label className="block text-[#0C103F]">Timings</label>
                <input
                  type="text"
                  name="timings"
                  value={formData.timings}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0DBF3]"
                />
              </div>

              <div>
                <label className="block text-[#0C103F]">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0DBF3]"
                />
              </div>

              <div>
                <label className="block text-[#0C103F]">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0DBF3]"
                />
              </div>

              <div>
                <label className="block text-[#0C103F]">Before or After Meal</label>
                <select
                  name="mealTiming"
                  value={formData.mealTiming}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0DBF3]"
                >
                  <option value="">Select</option>
                  <option value="before">Before Meal</option>
                  <option value="after">After Meal</option>
                </select>
              </div>

              <div>
                <label className="block text-[#0C103F]">Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0DBF3]"
                />
              </div>

              <div>
                <label className="block text-[#0C103F]">Upload Prescription</label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-[#0C103F]">Extra Details (Optional)</label>
              <textarea
                name="extraDetails"
                value={formData.extraDetails}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D0DBF3]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-[#0C103F] text-[#FFFFFF] py-2 rounded-lg   transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Medicine List */}
      <div className="container mx-auto px-4 mt-10 max-w-4xl">
        <h2 className="text-2xl font-bold text-[#0C103F] text-center mb-4">All Medicines</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((med, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border-l-4"
              style={{ borderLeftColor: isExpired(med.expiryDate) ? "#0C103F" : "#D0DBF3" }}
            >
              <h3 className="text-lg font-semibold text-[#0C103F]">{med.name}</h3>
              <p className="text-sm text-[#0C103F]">Timings: {med.timings}</p>
              <p className="text-sm text-[#0C103F]">Quantity: {med.quantity}</p>
              <p className="text-sm text-[#0C103F]">Duration: {med.duration}</p>
              <p className="text-sm text-[#0C103F]">
                Meal: {med.mealTiming === "before" ? "Before Meal" : "After Meal"}
              </p>
              <p className="text-sm text-[#0C103F]">Expiry: {med.expiryDate}</p>
              <p
                className={`text-sm font-bold mt-2 ${
                  isExpired(med.expiryDate) ? "text-[#0C103F]" : "text-[#0C103F]"
                }`}
              >
                {isExpired(med.expiryDate) ? "Expired 🔴" : "Ongoing 🔵"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Medicine;