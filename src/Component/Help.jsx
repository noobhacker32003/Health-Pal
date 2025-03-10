import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Help = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col w-full">
      {/* Sidebar */}
      <Navbar />
      <Menu></Menu>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-lg px-4 py-2 w-full md:w-96"
          />
        </div>

        {/* Help & Support Content */}
        <div className="p-6 max-w-full mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Help & Support</h2>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
              <div className="space-y-2">
                <details className="border p-3 rounded-lg cursor-pointer">
                  <summary className="font-bold">How do I list an item for sale?</summary>
                  <p className="text-gray-600 mt-2">You can list an item by going to 'Your Listings'.</p>
                </details>
                <details className="border p-3 rounded-lg cursor-pointer">
                  <summary className="font-bold">How can I contact a seller?</summary>
                  <p className="text-gray-600 mt-2">You can contact a seller through the 'Chat' feature.</p>
                </details>
                <details className="border p-3 rounded-lg cursor-pointer">
                  <summary className="font-bold">What payment methods are accepted?</summary>
                  <p className="text-gray-600 mt-2">We accept credit/debit cards and PayPal.</p>
                </details>
              </div>
            </div>

            {/* Contact Support Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Contact Support</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-500"
                    placeholder="Describe your issue or question"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
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
