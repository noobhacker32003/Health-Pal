import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Sos = () => {
  const previousSosCalls = [
    { id: 1, time: "2024-03-05 14:30", status: "Resolved" },
    { id: 2, time: "2024-02-20 08:15", status: "Pending" },
  ];

  const handleCallAmbulance = () => {
    alert("🚑 Calling Ambulance..."); // Replace with real call functionality
  };

  return (
    <div>
      <Navbar />
      <Menu />

      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">SOS Emergency</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Call Ambulance Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800">🚑 Call an Ambulance</h3>
            <p className="text-gray-600 mt-2">Immediate medical assistance in case of emergency.</p>
            <button
              onClick={handleCallAmbulance}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
              Call Now
            </button>
          </div>

          {/* Previous SOS Calls */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">📜 Previous SOS Calls</h3>
            {previousSosCalls.length > 0 ? (
              <ul>
                {previousSosCalls.map((call) => (
                  <li key={call.id} className="p-4 border-b border-gray-200 flex justify-between">
                    <span className="font-bold">{call.time}</span>
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        call.status === "Resolved" ? "bg-green-500 text-white" : "bg-yellow-500 text-black"
                      }`}
                    >
                      {call.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No previous SOS calls.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sos;
