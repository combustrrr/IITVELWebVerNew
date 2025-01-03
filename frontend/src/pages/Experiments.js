import React, { useEffect, useState } from 'react';

const Experiments = () => {
    const [experiments, setExperiments] = useState(null);

    // Fetch the experiments data from the backend
    useEffect(() => {
        fetch('/api/experiments')
            .then((response) => response.json())
            .then((data) => setExperiments(data))
            .catch((error) => console.error('Error fetching experiments data:', error));
    }, []);

    if (!experiments) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>List of Experiments</h1>
            <ul className="experiments-list">
                {Object.keys(experiments).map((part) => (
                    <li key={part}>
                        <h2>{part}</h2>
                        <ul className="chapters-list">
                            {Object.keys(experiments[part]).map((chapter) => (
                                <li key={chapter}>
                                    <h3>{chapter}</h3>
                                    <ul className="experiment-list">
                                        {experiments[part][chapter].map((experiment, index) => (
                                            <li key={index}>
                                                <a href={experiment.url}>{experiment.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experiments;