import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm({ pets }) {
  const [selectedPet, setSelectedPet] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Handle pet selection
  const handleSelectPet = (petId) => {
    const pet = pets.find((pet) => pet.id === petId);
    setSelectedPet(pet);
  };

  // Handle booking
  const handleBooking = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Auto-hide after 3 seconds
  };

  return (
    <div className="booking-page">
      <h2>Book Your Favorite Pet</h2>
      <div className="pet-list">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="pet-card"
            onClick={() => handleSelectPet(pet.id)}
          >
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <h3>{pet.name}</h3>
          </div>
        ))}
      </div>

      {selectedPet && (
        <div className="selected-pet">
          <h3>Selected Pet: {selectedPet.name}</h3>
          <img
            src={selectedPet.image}
            alt={selectedPet.name}
            className="selected-pet-image"
          />
          <p>{selectedPet.description}</p>
          <button className="book-now-btn" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      )}

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Booking Successful!</h3>
            <p>Your booking for {selectedPet.name} has been confirmed.</p>
            <button
              className="close-popup-btn"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
