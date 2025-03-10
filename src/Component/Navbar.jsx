import React, { useEffect, useState } from "react";
import { GiPill } from "react-icons/gi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase.config";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div className="navbar fixed top-0 left-0 w-full z-50 px-5 text-white bg-cyan-900 shadow-md">
        <div className="navbar-start">
          <a href="/">
            <GiPill className="h-10 w-10" />
          </a>
          <a href="/" className="btn btn-ghost text-xs sm:text-xl">
            Health Pal
          </a>
        </div>

        {user ? (
          <div className="navbar-end">
            <button
              onClick={handleLogout}
              className="bg-[#e63946] px-4 py-2 text-white rounded-lg hover:bg-[#d62839] transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-4">
            <a href="/register" className="underline sm:btn sm:btn-accent">
              Register
            </a>
            <a href="/login" className="underline sm:btn sm:btn-accent">
              Login
            </a>
          </div>
        )}
      </div>

      {/* To prevent content from being hidden under the fixed navbar */}
      <div className="h-16"></div>
    </div>
  );
};

export default Navbar;
