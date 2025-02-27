import React from 'react';
import Navbar from './Navbar';
import Stats from './Stats';
import Services from './Services';
import UserSay from './UserSay';
import Footer from './Footer';
import Feedback from './Feedback';

const Root = () => {
    return (
        <div>
            <div className=''>
            <Navbar></Navbar>
            <div className='flex sm:flex-row flex-col'>
               <div>
               <h6 className='text-3xl  sm:text-6xl  font-bold pt-10 mx-10 mt-10'>Welcome to HealthPal
                </h6>
                <h1 className='text-xl ml-10 sm:text-3xl sm:ml-20 mt-1  '>All your health solutions in one place</h1>
                <div className='text-center mt-10'>
                <a className="btn btn-accent mx-3">Get Started</a>
                <a className="btn btn-accent mx-3">Learn More</a>
                </div>
               </div>
               <div>
               <img className='h-[200px] sm:h-[450px] w-[700px] ' src="https://i.ibb.co.com/PGH2Zf83/Tae-August11.jpg" alt="" />
               </div>
            </div>

            <Services></Services>
            <Feedback></Feedback>
            <UserSay></UserSay>

            <Stats ></Stats>
            <Footer></Footer>

        </div>
        </div>
    );
};

export default Root;