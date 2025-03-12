import React from 'react';
import { GiMedicinePills, GiPill } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Import Firebase signOut
import auth from '../../firebase.config'; // Import your Firebase auth instance
import { FaAmbulance, FaHome, FaPills, FaStethoscope } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IoIosHelpCircleOutline, IoIosLogOut } from 'react-icons/io';

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
          <li className='flex items-center gap-2'>
            <FaHome className='text-[#0C103F]'></FaHome>
            <Link to="/home" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Home
            </Link>
          </li>
          <li className='flex items-center gap-2 '>
            <GiMedicinePills className='text-[#0C103F]'></GiMedicinePills>
            <Link to="/medicine" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Medicine
            </Link>
          </li>
          <li className='flex items-center gap-2'>
            
            <FaStethoscope className='text-[#0C103F]'></FaStethoscope>
            <Link  to="/consultation" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Consultations
            </Link>
          </li>
          <li className='flex items-center gap-2'>
            <FaAmbulance className='text-[#0C103F]'></FaAmbulance>
            <Link to="/sos" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              SOS
            </Link>
          </li >
          <li className='flex items-center gap-2'>
            <CgProfile className='text-[#0C103F]'></CgProfile>
            <Link to="/profile" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Profile 
            </Link>
          </li>
          <li className='flex items-center gap-2'>
          <IoIosHelpCircleOutline  className='text-[#0C103F]'/>
            <Link to="/help" className="block p-2 rounded-lg hover:bg-[#D0DBF3] text-[#0C103F]">
              Help & Support
            </Link>
          </li>
          <li className='flex items-center gap-2'>
            {/* Logout Button */}
            <IoIosLogOut className='text-[#0C103F]' />
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