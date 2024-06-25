'use client';

import React from 'react';
import Loader from '../components/Loader';
import ContactButton from '@/components/ContactButton';

const HomePage = () => {
    return (
        <div className="relative bg-back text-black flex flex-col min-h-screen p-2 overflow-hidden">
            <Loader />

            <div className="flex flex-col min-h-screen p-2">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center p-2 relative">
                    <div className="relative h-60 md:h-60 lg:h-[30rem] w-full md:w-3/4 lg:w-3/4 rounded-xl overflow-hidden">
                        <img
                            src="/hero3.webp"
                            alt="Image Alt Text"
                            className="object-cover rounded-xl h-full w-full"
                        />
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 font-medium text-white text-2xl text-center px-4 md:text-5xl">
                        Jagjit Singh x Portfolio
                        <p className="text-2xl mt-4">Business Management and Entrepreneurship Student</p>
                    </div>
                </section>
                
                {/* Qualification Summary Section */}
                <section className="flex flex-col font-custom pt-10 rounded-lg md:flex-row bg-black text-white p-2 mt-10 md:mt-20">
                    <div className="flex flex-col md:w-full p-2">
                        <h1 className="text-5xl md:text-6xl text-center">Introduction</h1>
                        <div className="flex flex-col text-xl p-2 mt-6 mb-9">
                            <p>Hello! I'm Jagjit Singh, a dedicated professional with a passion for customer service, retail management, and business development. Currently based in Ottawa, ON, I bring a wealth of experience and a strong academic background in Business Management and Entrepreneurship from Algonquin College.</p>
                        </div>
                    </div>
                    {/* Placeholder div */}
                    {/* <div className="hidden md:block md:w-1/2"></div> */}
                </section>
            </div>

            <div className="border-b-2 border-black mb-5 md:mt-2"></div>

            {/* Work Experience Section */}
            <section className="flex flex-col md:flex-row font-custom h-auto md:h-[40rem] gap-5 m-10">
                {/* Left Column (Image) */}
                <div className="flex md:w-1/2">
                    <img
                        src="/web.jpg"
                        alt="Image Alt Text"
                        className="object-cover rounded-xl"
                    />
                </div>

                {/* Right Column (Text Content) */}
                <div className="flex flex-col text-black m-5 p-5 bg-gray-200 rounded-2xl border-b-2 md:w-1/2">
                    <h2 className="text-4xl text-center font-bold">
                        Work Experience
                    </h2>
                    <p className="text-sm p-5 text-black md:text-2xl">As an Assistant Manager, Cashier, and Stocker at Circle K in Ottawa from January 2023 to August 2023, I adeptly managed cash handling and inventory across multiple locations. I consistently delivered exceptional customer service, addressing inquiries and ensuring customer satisfaction during both day and night shifts.<br /> <br/>During my tenure as a Customer Service Associate at Maison Simons in Ottawa from September 2021 to December 2022, I focused on creating a welcoming environment and assisting customers with product information and recommendations.</p>
                </div>
            </section>

            <div className="border-b-2 border-dotted border-black mt-2 mb-10"></div>

            {/* Certifications Section */}
            <section className="flex font-custom flex-col text-black md:flex-row gap-5 mt-3 bg-ambrane">
                <div className="flex flex-col w-full md:w-1/2 p-2">
                    <h2 className="text-4xl font-bold text-center mb-5">Certifications</h2>
                    <ul className="text-2xl p-5">
                        <li>Security, CPR, Bio Assure, WHMIS</li>
                        <li>Advanced Microsoft Course</li>
                        <li>LinkedIn Learning Certifications in Supply Chain, Leadership, Pricing Strategy, Retail Sales, Marketing, and Customer Service.</li>
                    </ul>
                </div>
                <div className="flex bg-ambrane w-full md:w-1/2 p-5 rounded-2xl overflow-hidden">
                    <img
                        src="/i5.webp"
                        alt="Image Alt Text"
                        className="object-cover rounded-xl w-full h-60 md:h-full md:w-full md:self-end"
                    />
                </div>
            </section>

            <div className="border-black mt-5 mb-5"></div>

            {/* Contact Section */}
            <div id="contact" className="flex flex-row justify-center items-center h-96"> {/* Added id="contact" */}
                <div className="flex font-custom flex-col w-[40rem] text-center p-8 rounded-lg">
                    <h1 className="text-3xl font-bold mb-8">Get In Touch</h1>
                    <ContactButton />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
