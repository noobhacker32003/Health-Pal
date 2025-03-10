import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./Navbar";
import Menu from "./Menu";

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe(); // Cleanup subscription
    }, []);

    return (
        <div className="flex flex-col w-full ">
            <Navbar></Navbar>
            <Menu></Menu>
            {/* Search Bar */}
            <div className="w-full mb-6">
                <input
                    type="text"
                    placeholder="Search here..."
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Profile Heading */}
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Picture Section */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-lg md:text-xl font-semibold mb-4">Profile Picture</h2>
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold">
                            {user?.displayName ? user.displayName[0] : "PP"}
                        </div>
                        <button className="mt-4 bg-teal-700 hover:bg-teal-600 text-gray-900 px-4 py-2 rounded-md text-white transition">
                            Change Picture
                        </button>
                    </div>
                </div>

                {/* Personal Information Section */}
                <div className="bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-lg md:text-xl font-semibold mb-4">Personal Information</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-medium">First Name</label>
                            <input
                                type="text"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                defaultValue="Peter"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium">Last Name</label>
                            <input
                                type="text"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                defaultValue="Parker"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                className="p-2 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
                                value={user?.email || "Loading..."}
                                disabled
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium">Major</label>
                            <input
                                type="text"
                                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                defaultValue="Computer Science"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium">Year of Study</label>
                            <select className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                <option>1st Year</option>
                                <option>2nd Year</option>
                                <option selected>3rd Year</option>
                                <option>4th Year</option>
                            </select>
                        </div>

                        <button className="w-full bg-teal-700 hover:bg-teal-600 text-white text-gray-900 px-4 py-2 rounded-md  transition">
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
