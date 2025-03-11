import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="w-64 h-auto bg-[#0C103F] p-4 text-[#FFFFFF] rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#D0DBF3]">Health Pal</h2>

            <nav>
                <ul className="space-y-2">
                    <li>
                        <Link to="/home" className="block p-2 rounded-lg bg-[#EEF2FB] hover:bg-[#D0DBF3] text-[#0C103F]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/medicine" className="block p-2 rounded-lg bg-[#EEF2FB] hover:bg-[#D0DBF3] text-[#0C103F]">
                            Medicine
                        </Link>
                    </li>
                    <li>
                        <Link to="/consultation" className="block p-2 rounded-lg bg-[#EEF2FB] hover:bg-[#D0DBF3] text-[#0C103F]">
                            Consultations
                        </Link>
                    </li>
                    <li>
                        <Link to="/sos" className="block p-2 rounded-lg bg-[#EEF2FB] hover:bg-[#D0DBF3] text-[#0C103F]">
                            SOS
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className="block p-2 rounded-lg bg-[#EEF2FB] hover:bg-[#D0DBF3] text-[#0C103F]">
                            Profile & Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" className="block p-2 rounded-lg bg-[#EEF2FB] hover:bg-[#D0DBF3] text-[#0C103F]">
                            Help & Support
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
