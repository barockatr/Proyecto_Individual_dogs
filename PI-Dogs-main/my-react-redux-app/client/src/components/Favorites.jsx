import React, { useState } from 'react';

const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [newFavorite, setNewFavorite] = useState('');

  const addFavorite = () => {
    if (newFavorite.trim() !== '') {
      setFavoriteItems([...favoriteItems, newFavorite]);
      setNewFavorite('');
    }
  };

  return (
    <div className="favorites">
      <h2>Mis Favoritos</h2>
      <input
        type="text"
        placeholder="Agregar a favoritos..."
        value={newFavorite}
        onChange={(e) => setNewFavorite(e.target.value)}
      />
      <button onClick={addFavorite}>Agregar</button>
      <ul>
        {favoriteItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
