// src/components/SupportersList.jsx
import React from 'react';
import './SupportersList.css';
import Vivek from '../assets/Vivek.jpg';


const SupportersList = ({ supporters }) => {
    return (
        <div className="supporters-list">
            <h3>Our Supporters</h3>
            <div className="supporters-grid">
                {supporters.map((supporter, index) => (
                    <div className="supporter-card" key={index}>
                        <img
                            src={supporter.photo}
                            alt={`Supporter ${index + 1}`}
                            className="supporter-photo"
                        />
                        <p className="supporter-name">{supporter.name}</p>
                        <p className="supporter-rollNo">Roll No: {supporter.roll}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupportersList;
