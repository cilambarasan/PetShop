import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pets from './components/Pets';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/App.css';

const pets = [
  {id:1, name: 'Max', image: 'https://i.pinimg.com/236x/46/eb/0f/46eb0f19f99e05d8bd81f601181480fb.jpg', description: 'A calm Maine Coon.' },
  {id:2, name: 'Daisy', image: 'https://i.pinimg.com/236x/00/8f/82/008f829b94503c07d0cb7304c26268da.jpg', description: 'A playful Bulldog.' },
  {id:3, name: 'Oliver', image: 'https://i.pinimg.com/236x/52/65/c9/5265c9dc735b37af54ffac8a778bdfba.jpg', description: 'A friendly Ragdoll cat.' },
  {id:4, name: 'Rocky', image: 'https://i.pinimg.com/236x/a4/c5/18/a4c518ad00eb92d1693b342c83a2d4cf.jpg', description: 'A protective Doberman.' },
  {id:5, name: 'Zoe', image: 'https://i.pinimg.com/236x/ba/5c/35/ba5c35457d32ca14a8fbfb88a11872ff.jpg', description: 'A sweet Bengal cat.' },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets pets={pets} />} />
        <Route path="/booking" element={<BookingForm pets={pets} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
