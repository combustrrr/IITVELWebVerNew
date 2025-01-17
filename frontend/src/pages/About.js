import React, { useEffect } from 'react';

const About = () => {
    // Dynamically load custom_about.css
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'http://localhost:5000/static/css/custom_about.css'; // Flask static file URL
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Cleanup on unmount
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div className="about-container">
            <h1>About Us</h1>

            <section className="about-section">
                <h2>Instructor</h2>
                <div className="credits">
                    <p><strong>Prof. S. V. Kulkarni</strong></p>
                    <p>Department of Electrical Engineering</p>
                    <p>IIT Bombay</p>
                    <p>Mumbai, Maharashtra, INDIA</p>
                    <p><a href="http://www.ee.iitb.ac.in/wiki/faculty/svk" target="_blank" rel="noopener noreferrer">Instructor's Profile</a></p>
                </div>
            </section>

            <section className="about-section">
                <h2>Contributors</h2>
                <div className="credits">
                    <p><strong>B. Sai Ram</strong><br />Research Scholar<br />Department of Electrical Engineering<br />IIT Bombay<br />Mumbai, Maharashtra, INDIA<br /><a href="https://sites.google.com/iitdh.ac.in/sairamboggavarapu/bio" target="_blank" rel="noopener noreferrer">Instructor's Profile</a></p>
                    <p><strong>Aditi Kamat</strong><br />B.Tech<br />Department of Electrical Engineering<br />IIT Bombay<br />Mumbai, Maharashtra, INDIA</p>
                    <p><strong>M. A. Pawar</strong><br />B.Tech<br />Department of Electrical Engineering<br />IIT Bombay<br />Mumbai, Maharashtra, INDIA</p>
                    <p><strong>Priyanshi Shrivastava</strong><br />Summer Intern<br />Department of Electrical Engineering<br />IIT Bombay<br />Mumbai, Maharashtra, INDIA</p>
                </div>
            </section>
        </div>
    );
};

export default About;
