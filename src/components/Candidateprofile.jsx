// src/components/CandidateProfile.js
import React from 'react';
import Vivek from '../assets/Vivek.jpg';

const CandidateProfile = ({ candidate }) => {
    return (
        <div className="candidate-profile">
            <img src={Vivek} alt={`${candidate.name}`} className="candidate-photo" />
            <h2>{candidate.name}</h2>
            <p><strong>Position:</strong> {candidate.position}</p>
            <p><strong>Roll No:</strong> {candidate.roll}</p>

            <p><strong>Manifesto:</strong> {candidate.manifesto}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default CandidateProfile;
