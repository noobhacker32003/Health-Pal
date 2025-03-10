import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col sm:flex-row">
        {/* Sidebar Menu */}
        <Menu />

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center sm:ml-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mt-6">
            Welcome to HealthPal
          </h1>

          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-start mx-auto max-w-5xl mt-6 px-4">
            {/* Medicines Card */}
            <div className="card w-full bg-cyan-200 shadow-md p-4 rounded-md min-h-[220px] flex flex-col justify-between">
              <h2 className="text-lg sm:text-2xl font-bold">Medicines For The Day</h2>
              <ul className="mt-4 space-y-2 text-sm flex-grow">
                <li>✅ 9 am: 1 capsule Ace (After breakfast)</li>
                <li>✅ 10 pm: 2 tbsp Gavisol (30 mins before dinner)</li>
                <li>✅ 10 pm: 3 tablets Thyrox (After dinner)</li>
              </ul>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                View details
              </button>
            </div>

            {/* Consultation Card */}
            <div className="card w-full bg-cyan-200 shadow-md p-4 rounded-md min-h-[220px] flex flex-col justify-between">
              <h2 className="text-lg sm:text-2xl font-bold">Consultation</h2>
              <ul className="mt-4 space-y-2 text-sm flex-grow">
                <li>📅 24/02/12 - 10 am: Dr. Mark Spencer (Virtual)</li>
                <li>📅 27/02/12 - 8:00 pm: Dr. Katherine Moss (Room #7A-12, Mt Elizabeth Hospital)</li>
              </ul>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                View details
              </button>
            </div>

            {/* Health Tip Card */}
            <div className="card w-full bg-cyan-200 shadow-md p-4 rounded-md min-h-[220px] flex flex-col justify-between">
              <h2 className="text-lg sm:text-2xl font-bold">Your Daily Health Tip</h2>
              <ul className="mt-4 space-y-2 text-sm flex-grow">
                <li>💧 Stay hydrated! Proper hydration supports digestion, brain function, and energy levels.</li>
              </ul>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
