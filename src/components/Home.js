import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function HomePage() {
  const navigate = useNavigate(); // Hook to handle navigation

  // Function to handle click on Explore Pets button
  const handleExploreClick = () => {
    navigate('/pets'); // Navigate to /pets page
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Paws Paradise</h1>
        <p>Your one-stop destination to find your furry friend!</p>
        <button className="explore-button" onClick={handleExploreClick}>
          Explore Pets
        </button>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <i className="fas fa-paw"></i>
          <h3>Adopt a Pet</h3>
          <p>Find the perfect companion to brighten your days.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-heart"></i>
          <h3>Trusted Care</h3>
          <p>We ensure every pet gets the love and care they deserve.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-home"></i>
          <h3>Find a Home</h3>
          <p>Give a lovely home to pets waiting for a family.</p>
        </div>
      </div>

      <div className="about-section">
        <h2>About Us</h2>
        <p>
          At Paws Paradise, we connect you with loving pets looking for their forever homes.  
          Our mission is to make the adoption process smooth, ensuring pets and owners create 
          unforgettable bonds.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
