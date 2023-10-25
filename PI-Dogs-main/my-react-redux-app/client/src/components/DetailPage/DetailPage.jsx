import React from 'react';
import { useSelector } from 'react-redux';
import './DetailPage.css';

function DetailPage() {
  const dog = useSelector(state => state.dog);

  return (
    <div className="detail-page">
      <img src={dog.image.url} alt={dog.name} />
      <h2>{dog.name}</h2>
      <p>Temperamentos: {dog.temperament}</p>
      <p>Peso: {dog.weight.metric} kg</p>
      <p>Altura: {dog.height.metric} cm</p>
      <p>Años de vida: {dog.life_span}</p>
    </div>
  );
}

export default DetailPage;
