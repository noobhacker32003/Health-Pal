import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from './Navbar';
import Stats from './Stats';
import Services from './Services';
import UserSay from './UserSay';
import Footer from './Footer';
import Feedback from './Feedback';
import auth from '../../firebase.config';

const Root = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // Set user state based on authentication
        });

        return () => unsubscribe(); // Cleanup listener
    }, []);

    // Handle "Get Started" button click
    const handleGetStarted = () => {
        if (user) {
            navigate('/home'); // Redirect to home if logged in
        } else {
            navigate('/login'); // Redirect to login if not logged in
        }
    };

    return (
        <div className="bg-[#EEF2FB]">
            <Navbar />
            <div className='flex sm:flex-row flex-col'>
                <div>
                    <h6 className='text-3xl sm:text-6xl font-bold pt-10 mx-10 mt-10 text-[#0C103F]'>
                        Welcome to HealthPal
                    </h6>
                    <h1 className='text-xl ml-10 sm:text-3xl sm:ml-20 mt-1 text-[#0C103F]'>
                        All your health solutions in one place
                    </h1>
                    <div className='text-center mt-10'>
                        <button onClick={handleGetStarted} className="bg-[#0C103F] text-white py-2 px-4 rounded-lg hover:bg-[#D0DBF3] transition mx-3">
                            Get Started
                        </button>
                        <a className="bg-[#0C103F] text-white py-2 px-4 rounded-lg hover:bg-[#D0DBF3] transition mx-3">Learn More</a>
                    </div>
                </div>
                <div>
                    <img className='h-[200px] sm:h-[450px] w-[700px] mt-5'
                        src="https://i.ibb.co.com/PGH2Zf83/Tae-August11.jpg" alt="HealthPal" />
                </div>
            </div>

            
            <Services />
            
            <Feedback />
            <UserSay />
            <Stats />
            <Footer />
        </div>
    );
};

export default Root;