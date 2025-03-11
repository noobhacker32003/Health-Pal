import React from 'react';
import { GiPill } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Import Firebase signOut
import auth from '../../firebase.config'; // Import your Firebase auth instance

const Menu = () => {
  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log('User logged out successfully');
      // Optionally, you can redirect the user to the login page or home page after logout
      window.location.href = '/login'; // Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="w-64 h-auto text-[#FFFFFF] rounded-lg pt-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/home" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/medicine" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Medicine
            </Link>
          </li>
          <li>
            <Link to="/consultation" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Consultations
            </Link>
          </li>
          <li>
            <Link to="/sos" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              SOS
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Profile & Settings
            </Link>
          </li>
          <li>
            <Link to="/help" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Help & Support
            </Link>
          </li>
          <li>
            {/* Logout Button */}
            <button
              onClick={handleLogout} // Add onClick handler for logout
              className="block w-full p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F] text-left"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;