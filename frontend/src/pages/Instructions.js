import React, { useEffect } from 'react';

const Instructions = () => {
    // Load custom_instructions.css dynamically
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'http://localhost:5000/static/css/custom_instructions.css'; // Flask static file URL
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // Cleanup on unmount
        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div className="instructions-container">
            <h1>Instructions</h1>
            <section className="instructions">
                <h2>Software Requirements</h2>
                <p>
                    For running some of the experiments in this virtual lab on your computer, you need to install the latest version of the 
                    Java Development Kit (JDK) and Java Runtime Environment (JRE).
                </p>
                <p>
                    In the security tab of the Java Control Panel, you need to add the URL of this site's homepage to resolve security issues. 
                    The Java Update plugin should be installed in the folder suggested by your browser.
                </p>
                <p>Users can use the following websites to install the above-mentioned software:</p>
                <ul>
                    <li><a href="http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html"><strong>JDK and JRE</strong></a></li>
                    <li><a href="https://www.java.com/en/download/installed.jsp"><strong>Status of the Java version on your computer</strong></a></li>
                    <li><a href="https://java.com/en/download/help/enable_browser.xml"><strong>Enable Java on a browser</strong></a></li>
                </ul>
            </section>

            <section className="communication-portal">
                <h2>Have a Query? Reach Out!</h2>
                <p>Click the button below to post any doubts or queries:</p>
                <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeBE6KYlUx9gUnayilq_zebpsRhdg7EDlFu0j2emRJegJHCtQ/viewform" 
                    target="_blank" 
                    className="portal-button">
                    Communication Portal
                </a>
            </section>
        </div>
    );
};

export default Instructions;
