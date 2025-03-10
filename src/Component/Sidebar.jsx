import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase.config";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle sidebar visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [isAdmin, setIsAdmin] = useState(false); // Track if the user is an admin
  const navigate = useNavigate();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        // Fetch user's role from the database
        
          
      } else {
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="relative">
      {/* Burger Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute -top-[16px] left-4 z-50 bg-gray-800 text-white p-2 rounded transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-800 text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <nav className="flex flex-col h-full p-4 mt-8 overflow-y-auto">
          <Link
            to="/"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-star-o mr-2"></i>
            <span>Home</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            <i className="fa fa-fw fa-bar-chart-o mr-2"></i>
            <span>Profile</span>
          </Link>



          {isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                toggleSidebar();
              }}
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <i className="fa fa-fw fa-sign-out mr-2"></i>
              <span>Log Out</span>
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
              onClick={toggleSidebar}
            >
              <i className="fa fa-fw fa-sign-in mr-2"></i>
              <span>Log In</span>
            </Link>
          )}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;


