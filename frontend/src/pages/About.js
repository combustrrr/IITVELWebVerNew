import React, { useEffect } from 'react';

const About = () => {
    // Load custom_about.css when the About component is mounted
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'http://localhost:5000/static/css/custom_about.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Cleanup function to remove the CSS link when the component is unmounted
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div>
            <h1>About Page</h1>
            <div className="about-content">
                <p>This website is created to demonstrate the integration of Flask with a React frontend.</p>
            </div>
        </div>
    );
};

export default About;