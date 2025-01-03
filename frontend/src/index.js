import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Function to dynamically load CSS files
const loadCSS = (url) => {
    const link = document.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
};

// Load universal.css from the Flask backend
loadCSS('http://localhost:5000/static/css/universal.css');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);