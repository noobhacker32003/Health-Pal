import React, { useState } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";

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
    <div>
      <Navbar />
      <Menu />

      {/* Form Container */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Medicine</h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Timings</label>
                <input
                  type="text"
                  name="timings"
                  value={formData.timings}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="block text-gray-700">Before or After Meal</label>
                <select
                  name="mealTiming"
                  value={formData.mealTiming}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Select</option>
                  <option value="before">Before Meal</option>
                  <option value="after">After Meal</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700">Expiry Date</label>
                <input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700">Upload Prescription</label>
                <input
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Extra Details (Optional)</label>
              <textarea
                name="extraDetails"
                value={formData.extraDetails}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Medicine List */}
      <div className="container mx-auto px-4 mt-10 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">All Medicines</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {medicines.map((med, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md border-l-4"
              style={{ borderLeftColor: isExpired(med.expiryDate) ? "red" : "teal" }}
            >
              <h3 className="text-lg font-semibold text-gray-800">{med.name}</h3>
              <p className="text-sm text-gray-600">Timings: {med.timings}</p>
              <p className="text-sm text-gray-600">Quantity: {med.quantity}</p>
              <p className="text-sm text-gray-600">Duration: {med.duration}</p>
              <p className="text-sm text-gray-600">
                Meal: {med.mealTiming === "before" ? "Before Meal" : "After Meal"}
              </p>
              <p className="text-sm text-gray-600">Expiry: {med.expiryDate}</p>
              <p
                className={`text-sm font-bold mt-2 ${
                  isExpired(med.expiryDate) ? "text-red-500" : "text-teal-500"
                }`}
              >
                {isExpired(med.expiryDate) ? "Expired 🔴" : "Ongoing 🔵"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicine;
