import React, { useEffect } from 'react';

const Experiments = () => {
    // Load custom_experiments.css when the Experiments component is mounted
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'http://localhost:5000/static/css/custom_experiments.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Cleanup function to remove the CSS link when the component is unmounted
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div>
            <h1>Experiments Page</h1>
            <ul className="experiments-list">
                <li>Experiment 1</li>
                <li>Experiment 2</li>
                <li>Experiment 3</li>
            </ul>
        </div>
    );
};

export default Experiments;