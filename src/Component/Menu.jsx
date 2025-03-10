import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
<div className="sm:w-64 h-full bg-gray-800 sm:p-4 p-2 sm:fixed text-white">
      <h2 className="text-xl font-bold">Health Pal</h2>

      <nav className="mt-4">
        <ul>
          <li className="mb-2">
            <Link to="/home" className="block p-2 rounded-lg bg-teal-700 hover:bg-teal-600">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/medicine" className="block p-2 rounded-lg bg-teal-700 hover:bg-teal-600">
              Medicine
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/consultation" className="block p-2 rounded-lg bg-teal-700 hover:bg-teal-600">
              Consultations
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/sos" className="block p-2 rounded-lg bg-teal-700 hover:bg-teal-600">
              Sos
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/profile" className="block p-2 rounded-lg bg-teal-700 hover:bg-teal-600">
              Profile & Settings
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/help" className="block p-2 rounded-lg bg-teal-700 hover:bg-teal-600">
              Help & Support
            </Link>
          </li>
          
        </ul>
      </nav>
    </div>
        </div>
    );
};

export default Menu;