import React from 'react';
import './Pets.css';

function PetsPage() {
  // List of pets with name, image, and description
  const pets = [
    { name: 'Buddy', image: 'https://i.pinimg.com/736x/92/21/ba/9221ba65886d085ff1b76425d0139a9b.jpg', description: 'A friendly Labrador.' },
    { name: 'Milo', image: 'https://i.pinimg.com/236x/1b/0b/35/1b0b358460bbdb44640a6238ad8aa8fb.jpg', description: 'A playful Siamese cat.' },
    { name: 'Bella', image: 'https://i.pinimg.com/236x/b2/86/17/b28617b2785c956c01162c35b1c48b4f.jpg', description: 'A loyal German Shepherd.' },
    { name: 'Luna', image: 'https://i.pinimg.com/236x/26/e8/d6/26e8d6f55c3fd55c458250ce866004cb.jpg', description: 'A curious Persian cat.' },
    { name: 'Charlie', image: 'https://i.pinimg.com/236x/fd/34/e2/fd34e2dd3628ea805f6761f365ab1607.jpg', description: 'An energetic Beagle.' },
    { name: 'Max', image: 'https://i.pinimg.com/236x/46/eb/0f/46eb0f19f99e05d8bd81f601181480fb.jpg', description: 'A calm Maine Coon.' },
    { name: 'Daisy', image: 'https://i.pinimg.com/236x/00/8f/82/008f829b94503c07d0cb7304c26268da.jpg', description: 'A playful Bulldog.' },
    { name: 'Oliver', image: 'https://i.pinimg.com/236x/52/65/c9/5265c9dc735b37af54ffac8a778bdfba.jpg', description: 'A friendly Ragdoll cat.' },
    { name: 'Rocky', image: 'https://i.pinimg.com/236x/a4/c5/18/a4c518ad00eb92d1693b342c83a2d4cf.jpg', description: 'A protective Doberman.' },
    { name: 'Zoe', image: 'https://i.pinimg.com/236x/ba/5c/35/ba5c35457d32ca14a8fbfb88a11872ff.jpg', description: 'A sweet Bengal cat.' },
  ];

  return (
    <div className="pets-page">
      <h1>Our Lovely Pets</h1>
      <p>Explore and adopt your favorite pets!</p>

      <div className="pets-container">
        {pets.map((pet, index) => (
          <div className="pet-card" key={index}>
            <img className="pet-image" src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetsPage;
