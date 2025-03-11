import React, { useEffect, useState } from "react";
import { GiPill } from "react-icons/gi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../../firebase.config";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <div className="navbar fixed top-0 left-0 w-full z-50 px-5 text-white bg-[#0C103F] shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="/">
            <GiPill className="h-10 w-10 text-white" />
          </a>
          <a href="/" className="text-xl font-bold text-white">
            HealthPal
          </a>
        </div>

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-[#D0DBF3] px-4 py-2 text-[#0C103F] rounded-lg hover:bg-[#EEF2FB] transition"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-4">
            <button className="bg-[#D0DBF3] px-4 py-2 text-[#0C103F] rounded-lg hover:bg-[#EEF2FB] transition">
            <a href="/register" className="  ">
              Register
            </a>
            </button>
            <button className="bg-[#D0DBF3] px-4 py-2 text-[#0C103F] rounded-lg hover:bg-[#EEF2FB] transition"
          >
            <a href="/login" className="  ">
              Login
            </a>
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
