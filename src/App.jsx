// src/App.js
import React from 'react';
import CandidateProfile from './components/CandidateProfile';
import SupportersList from './components/SupportersList';
import TopSupporter from './components/TopSupporter';
import VoteSection from './components/VoteSection';
import SloganSection from './components/SloganSection'; // Import new component
import chakraImage from './assets/ashokachakra.jpeg';





import './App.css';

function App() {
    const candidate = {
        name: "Vivek Patel",
        position: "Cultural-Member 1",
        roll:"B23EC030",
        manifesto: " Enhance and celebrate the rich tapestry of cultures within our community through events, festivals, and collaborative projects.",
        photo: "./assets/Vivek.jpg"
    };

    const supporters = [
 
      { photo: "/images/Abhay.jpg", name: "Abhay Kumar", roll: "B23EC022" },
      { photo: "/images/Aman.jpg", name: "Aman Kumar", roll: "B23CS038" },
      { photo: "/images/Sanjeev.jpg", name: "Sanjeev Gupta", roll: "B23ME004" },
      { photo: "/images/Gaurav.jpg", name: "Gourav Kumar", roll: "B23ME018" },
      { photo: "/images/Sachin.jpg", name: "Sachin Chaurasia", roll: "B23EE010" },
      { photo: "/images/Tiwari.jpg", name: "Arunoday Tiwari", roll: "B23EC009" },
      { photo: "/images/Raj.jpg", name: "Raj Sharma", roll: "B23EC036" },
      { photo: "/images/Aryan.png", name: "Aryan Raj", roll: "B23EE004" },
      { photo: "/images/Kuldeep.jpg", name: "Kuldeep Chaudhary", roll: "B23EC019" },
      { photo: "/images/Subharto.jpg", name: "Subrata Das ", roll: "B23CS015" },
      { photo: "/images/Adarsh.jpg", name: "Adrsh Barman", roll: "B23EE005" },
      { photo: "/images/Guru.jpg", name: "Akash Shah", roll: "B23ME008" },

    
    ];

    const topSupporter = {
        name: "Uttam Kumar",
        roll:"B23EC004",
        photo: "https://example.com/top-supporter.jpg",
  
    };

    const slogan = "Celebrate Culture, Connect Community";

    return (
      <div className="App">
            <div className="independence-day-banner">
                <div className="flag">
                    <div className="orange"></div>
                    <img src= {chakraImage}alt="Ashoka Chakra" className="ashoka-chakra" />
                    <div className="green"></div>
                </div>
                <h2>Happy Independence Day!</h2>
            </div>
            <h1>Vote For Vivek Patel</h1>
            <SloganSection slogan={slogan} /> {/* Add SloganSection component */}
            <CandidateProfile candidate={candidate} />
            <TopSupporter supporter={topSupporter} />
            <SupportersList supporters={supporters} />
            <VoteSection />
        </div>
    );
}

export default App;
