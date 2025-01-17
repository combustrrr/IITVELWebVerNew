import React, { useEffect, useState } from 'react';

const Experiments = () => {
    const [experiments, setExperiments] = useState(null);
    const [selectedPart, setSelectedPart] = useState(null);

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
        <div style={{ display: 'flex' }}>
            <div className="sidebar">
                <h1>Parts</h1>
                <ul className="experiments-list">
                    {Object.keys(experiments).map((part) => (
                        <li key={part} onClick={() => setSelectedPart(part)} className={selectedPart === part ? 'active' : ''}>
                            <h2>{part}</h2>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main-content">
                {selectedPart && (
                    <>
                        <h1>{selectedPart}</h1>
                        <ul className="chapters-list">
                            {Object.keys(experiments[selectedPart]).map((chapter) => (
                                <li key={chapter}>
                                    <h3>{chapter}</h3>
                                    <ul className="experiment-list">
                                        {experiments[selectedPart][chapter].map((experiment, index) => (
                                            <li key={index}>
                                                <a href={experiment.url}>{experiment.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Experiments;