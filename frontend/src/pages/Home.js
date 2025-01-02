import React, { useEffect } from 'react';

const Home = () => {
    // Load custom_home.css when the Home component is mounted
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'http://localhost:5000/static/css/custom_home.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Cleanup function to remove the CSS link when the component is unmounted
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p className="welcome-message">This is the home page of our website.</p>
        </div>
    );
};

export default Home;