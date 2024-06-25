import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-nav text-center text-black p-4">
            {/* Footer content */}
            &copy; {new Date().getFullYear()} My Next.js App. All rights reserved.
        </footer>
    );
};

export default Footer;
