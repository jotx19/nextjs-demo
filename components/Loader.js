'use client';

import React, { useState, useEffect } from 'react';

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [typingText, setTypingText] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // Adjust timeout duration as needed (1000ms = 1 second)
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isVisible) {
            const animationTimer = setTimeout(() => {
                setIsAnimationComplete(true);
            }, 500); // Match this duration with the transition duration
            return () => clearTimeout(animationTimer);
        }
    }, [isVisible]);

    useEffect(() => {
        if (isAnimationComplete) return; // Exit early if animation is complete

        const typingTimer = setTimeout(() => {
            const nextIndex = textIndex + 1;
            setTypingText("Entrepreneur".slice(0, nextIndex));
            setTextIndex(nextIndex);
        }, 140); // Adjust typing speed here (140ms)

        return () => clearTimeout(typingTimer);
    }, [textIndex, isAnimationComplete]);

    if (isAnimationComplete) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-700 ease-out ${
                isVisible ? 'top-0 opacity-100' : '-top-full opacity-0'
            }`}
        >
            <div className="text-white font-bold text-4xl italic">
                {typingText}<span className="opacity-0 animate-blink">_</span>
            </div>
        </div>
    );
};

export default Loader;
