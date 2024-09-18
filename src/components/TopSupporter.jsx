// src/components/TopSupporter.js
import React from 'react';

const TopSupporter = ({ supporter }) => {
    return (
        <div className="top-supporter">
            <h3>Top Supporter</h3>
            <img src="/images/Uttam.jpg" alt="Top Supporter" className="top-supporter-photo" />
            <p><strong>Name:</strong> {supporter.name}</p>
            <p><strong>Roll No:</strong> {supporter.roll}</p>
        </div>
    );
};

export default TopSupporter;
