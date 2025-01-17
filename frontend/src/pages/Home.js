import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://www.ee.iitb.ac.in/course/~vel/images/slide1.png',
        'https://www.ee.iitb.ac.in/course/~vel/images/slide2.png',
        'https://www.ee.iitb.ac.in/course/~vel/images/slide3.png'
    ];

    const [visitCounter, setVisitCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // Change image every 7 seconds
        return () => clearInterval(interval);
    }, [images]);

    useEffect(() => {
        // Add the external CSS file dynamically
        const link = document.createElement('link');
        link.href = 'http://localhost:5000/static/css/custom_home.css'; // Flask static file URL
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Cleanup on unmount
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    useEffect(() => {
        const fetchVisitCounter = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/visit_counter');
                setVisitCounter(response.data.visit_counter);
            } catch (error) {
                console.error('Error fetching visit counter:', error);
            }
        };

        fetchVisitCounter();
        const interval = setInterval(fetchVisitCounter, 10000); // Fetch every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <section className="greeting-section">
                <h1>Welcome to the World of Electromagnetics</h1>
                <p>
                    Electromagnetic Field (EM) Theory is one of the fundamental courses for both Electrical and Electronics Engineering disciplines.
                    Generally, students perceive it as a difficult course to understand and they feel that the course is abstract and too mathematical.
                    It is essential to explain the involved theory in the course through real-life practical examples and visual aids.
                </p>
            </section>

            <section className="experiments-section">
                <h2>About the Experiments</h2>
                <p>
                    The serial number of the experiments is given as per the chapter numbers of [A] in which the corresponding theory appears.
                </p>
            </section>

            <section className="gallery-section">
                <h2>Gallery</h2>
                <div className="slideshow">
                    <img src={images[currentImage]} alt={`Gallery Image ${currentImage + 1}`} />
                </div>
            </section>

            <section className="visitor-count-section">
                <h2>Visitor Count</h2>
                <p>{visitCounter}</p>
            </section>
        </div>
    );
};

export default Home;
