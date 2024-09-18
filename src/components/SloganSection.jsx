// src/components/SloganSection.jsx
import React from 'react';
import './SloganSection.css';

const SloganSection = ({ slogan }) => {
    return (
        <div className="slogan-section">
            <h2>{slogan}</h2>
        </div>
    );
};

export default SloganSection;
