import React from 'react';

const DogCard = ({ dog }) => {
  return (
    <div className="dog-card">
      <img src={dog.Imagen} alt={dog.Nombre} />
      <h2>{dog.Nombre}</h2>
      <p>Altura: {dog.Altura}</p>
      <p>Peso: {dog.Peso}</p>
      <p>Años de Vida: {dog.Años_de_vida}</p>
    </div>
  );
};

export default DogCard;
