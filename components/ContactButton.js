'use client';
import React, { useState } from 'react';

const ContactButton = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex flex-col">
            <button
                className="bg-gray-300 hover:bg-ambrane text-black font-bold py-2 px-4 rounded-full mb-4"
                onClick={toggleExpanded}
            >
                Contact Us ↗️
            </button>
            {isExpanded && (
                <div className="bg-gray-100 p-4 rounded">
                    <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                    <p>Email: Jagjitsinghca784@gmail.com</p>
                    <p>Phone: +1613-878-1710</p>
                    {/* Add more contact information as needed */}
                </div>
            )}
        </div>
    );
};

export default ContactButton;
