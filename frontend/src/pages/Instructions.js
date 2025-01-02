import React, { useEffect } from 'react';

const Instructions = () => {
    // Load custom_instructions.css when the Instructions component is mounted
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'http://localhost:5000/static/css/custom_instructions.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Cleanup function to remove the CSS link when the component is unmounted
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div>
            <h1>Instructions Page</h1>
            <div className="instructions">
                <p>Follow these steps to use the website:</p>
                <ol>
                    <li>Step 1: Do this...</li>
                    <li>Step 2: Do that...</li>
                    <li>Step 3: Complete it like this...</li>
                </ol>
            </div>
        </div>
    );
};

export default Instructions;