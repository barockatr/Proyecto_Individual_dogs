import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
      axios.get('https://api.thedogapi.com/v1/breeds')
        .then(response => setDogs(response.data))
        .catch(error => console.error(error));
    }, []);

    return (
      <div>
        <h1>Home Page</h1>
        <input
          type="text"
          placeholder="Buscar razas de perros"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="dog-cards">
          {dogs.map((dog) => (
            <div key={dog.id}>
              <img src={dog.image.url} alt={dog.name} />
              <h2>{dog.name}</h2>
              <p>Temperamentos: {dog.temperament}</p>
              <p>Peso: {dog.weight.metric} kg</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default HomePage;
