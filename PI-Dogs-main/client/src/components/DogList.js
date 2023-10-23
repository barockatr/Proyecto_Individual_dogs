import React from 'react';
import DogCard from './DogCard'; // Asegúrate de que el nombre del archivo coincida con tu implementación real

const DogsList = ({ dogs }) => {
  return (
    <div className="dogs-list">
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
};

export default DogsList;
