import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./Navbar";
import Menu from "./Menu";
import { FaBars, FaTimes } from "react-icons/fa";

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
            <div className="absolute top-20 left-4 ">
                <button
                    className="text-2xl text-[#0C103F] bg-[#FFFFFF] p-2 rounded-full shadow-md"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <FaBars />
                </button>
            </div>

            {/* Overlay Menu (Appears in Top Left) */}
            {isMenuOpen && (
                <div className="fixed top-4 left-4 bg-[#FFFFFF] p-4 rounded-lg shadow-lg z-50">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold text-[#0C103F]">Menu</h2>
                        <button onClick={() => setIsMenuOpen(false)}>
                            <FaTimes className="text-2xl text-[#0C103F]" />
                        </button>
                    </div>
                    <Menu />
                </div>
            )}

            {/* Search Bar */}
            <div className="w-full p-4 mt-16">
                {/* <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full p-2 border border-[#D0DBF3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C103F]"
                /> */}
            </div>

            {/* Profile Heading */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0C103F] p-4">Your Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                {/* Profile Picture Section */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-lg md:text-xl font-semibold text-[#0C103F] mb-4">Profile Picture</h2>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#D0DBF3] flex items-center justify-center text-xl font-bold text-[#0C103F]">
                            {user?.displayName ? user.displayName[0] : "PP"}
                        </div>
                        <button className="mt-4 bg-[#0C103F] hover:bg-[#D0DBF3] text-white px-4 py-2 rounded-md transition">
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
                                defaultValue="Computer Science"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-[#0C103F]">Weight</label>
                            <select className="p-2 border border-[#D0DBF3] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C103F]">
                                <option>1st Year</option>
                                <option>2nd Year</option>
                                <option selected>3rd Year</option>
                                <option>4th Year</option>
                            </select>
                        </div>

                        <button type="submit" className="w-full bg-[#0C103F] hover:bg-[#D0DBF3] text-white px-4 py-2 rounded-md transition">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;