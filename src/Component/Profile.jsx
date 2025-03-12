import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiPill } from "react-icons/gi";
import Footer from "./Footer";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        // Load name from local storage
        const savedFirstName = localStorage.getItem("firstName") || "Peter";
        const savedLastName = localStorage.getItem("lastName") || "Parker";
        setFirstName(savedFirstName);
        setLastName(savedLastName);

        return () => unsubscribe(); // Cleanup subscription
    }, []);

    const handleSaveChanges = (e) => {
        e.preventDefault();
        // Save name to local storage
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        alert("Changes saved!");
    };

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#EEF2FB]">
            <Navbar />
            
            {/* Toggle Button (Top Left) */}
            <div className="fixed -top-[2px] right-4 z-50  sm:hidden flex">
                <button
                    className="text-2xl text-[#0C103F] bg-[#FFFFFF] p-2 rounded-full shadow-md mt-4"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <FaBars />
                </button>
            </div>

             {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay for background dimming */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <div className="fixed top-0 right-0 h-full w-52 bg-[#FFFFFF] p-4 rounded-l-lg shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-2">
              
              <button onClick={() => setIsMenuOpen(false)}>
                <FaTimes className="text-2xl text-[#0C103F]" />
              </button>
              
            </div>
            <div className="flex items-center  gap-1">
            <GiPill className="w-7 h-7 "></GiPill>
            <h2 className="text-xl font-bold  text-[#0C103F] mb-1">HealthPal</h2>
            </div>
            <Menu />
          </div>
        </div>
      )}

            {/* Search Bar */}
            <div className="w-full p-4 ">
                {/* <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full p-2 border border-[#D0DBF3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C103F]"
                /> */}
            </div>

            {/* Profile Heading */}
            <div className="flex items-center  p-4 ">
            <CgProfile className="h-8 w-8  top-5"></CgProfile>        
            <h1 className="text-2xl md:text-3xl font-bold text-[#0C103F] px-2  py-4">Your Profile</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                {/* Profile Picture Section */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-lg md:text-xl font-semibold text-[#0C103F] mb-4">Profile Picture</h2>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#D0DBF3] flex items-center justify-center text-xl font-bold text-[#0C103F]">
                            {user?.displayName ? user.displayName[0] : "PP"}
                        </div>
                        <button className="mt-4 bg-[#0C103F]  text-white px-4 py-2 rounded-md transition">
                            Change Picture
                        </button>
                    </div>
                </div>

                {/* Personal Information Section */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-lg md:text-xl font-semibold text-[#0C103F] mb-4">Personal Information</h2>
                    <form className="space-y-4" onSubmit={handleSaveChanges}>
                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-[#0C103F]">First Name</label>
                            <input
                                type="text"
                                className="p-2 border border-[#D0DBF3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C103F]"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-[#0C103F]">Last Name</label>
                            <input
                                type="text"
                                className="p-2 border border-[#D0DBF3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C103F]"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-[#0C103F]">Email</label>
                            <input
                                type="email"
                                className="p-2 border border-[#D0DBF3] rounded-md bg-[#EEF2FB] cursor-not-allowed"
                                value={user?.email || "Loading..."}
                                disabled
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-[#0C103F]">Height</label>
                            <input
                                type="text"
                                className="p-2 border border-[#D0DBF3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C103F]"
                                defaultValue=""
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-[#0C103F]">Weight</label>
                            <input
                                type="text"
                                className="p-2 border border-[#D0DBF3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C103F]"
                                defaultValue=""
                            />
                            
                        </div>

                        <button type="submit" className="w-full bg-[#0C103F]  text-white px-4 py-2 rounded-md transition">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;