// src/components/VoteSection.js
import React, { useState } from 'react';

const VoteSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    // Define the website URL you want to include
    const websiteUrl = 'https://spacewhale-zion.github.io'; // Replace with your website URL

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Name: ${name}\nEmail: ${email}\n\nI support Vivek Patel for cultural member election campaign! Check out the website: ${websiteUrl}`;
        const encodedMessage = encodeURIComponent(message);
        
        const url = `https://wa.me/?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(url, '_blank');
        
        // Set submitted state to true (optional if you want to show a message)
        setSubmitted(true);
        
        // Reset the form fields
        setName('');
        setEmail('');
    };

    return (
        <div className="vote-section">
            <h3>Show Your Support</h3>
            {submitted ? (
                <p>Thank you for showing your support!</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default VoteSection;
