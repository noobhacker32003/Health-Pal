import React, { useEffect, useState } from "react";
import { GiPill } from "react-icons/gi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useLocation } from "react-router-dom"; // Import useLocation and Link
import auth from "../../firebase.config";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const location = useLocation(); // Get the current location (route)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state based on authentication
    });
    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleLogout = async () => {
    await signOut(auth); // Sign out the user
  };

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <div className="navbar fixed top-0 left-0 w-full z-50 sm:px-5 text-white bg-[#0C103F] shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <GiPill className="h-10 w-10 text-white" />
          </Link>
          <Link to="/" className="text-xl font-bold text-white">
            HealthPal
          </Link>
        </div>

        {/* Navigation Links - Only visible when user is logged in */}
        {user && (
          <div className="hidden sm:flex">
            <Link
              to="/home"
              className={`px-4 py-2 text-white hover:underline rounded-lg transition ${
                isActive("/home") ? "underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/medicine"
              className={`px-4 py-2 text-white hover:underline rounded-lg transition ${
                isActive("/medicine") ? "underline" : ""
              }`}
            >
              Medicine
            </Link>
            <Link
              to="/consultation"
              className={`px-4 py-2 text-white hover:underline rounded-lg transition ${
                isActive("/consultation") ? "underline" : ""
              }`}
            >
              Consultation
            </Link>
            <Link
              to="/sos"
              className={`px-4 py-2 text-white hover:underline rounded-lg transition ${
                isActive("/sos") ? "underline" : ""
              }`}
            >
              SOS
            </Link>
            <Link
              to="/profile"
              className={`px-4 py-2 text-white hover:underline rounded-lg transition ${
                isActive("/profile") ? "underline" : ""
              }`}
            >
              Profile
            </Link>
            <Link
              to="/help"
              className={`px-4 py-2 text-white hover:underline rounded-lg transition ${
                isActive("/help") ? "underline" : ""
              }`}
            >
              Help & Support
            </Link>
          </div>
        )}

        {/* Logout or Register/Login Buttons */}
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-[#D0DBF3] px-4 py-2 text-[#0C103F] rounded-lg hover:bg-[#EEF2FB] transition hidden sm:flex"
          >
            Logout
          </button>
        ) : (
          <div className="gap-4 hidden sm:flex">
            <button className="bg-[#D0DBF3] sm:px-4 px-2 py-2 text-[#0C103F] rounded-lg hover:bg-[#EEF2FB] transition">
              <Link to="/register">Register</Link>
            </button>
            <button className="bg-[#D0DBF3] sm:px-4 px-2 py-2 text-[#0C103F] rounded-lg hover:bg-[#EEF2FB] transition">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from being hidden under navbar */}
      <div className="h-16"></div>
    </div>
  );
};

export default Navbar;