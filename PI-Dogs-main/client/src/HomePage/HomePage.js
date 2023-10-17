import React, { useState, useEffect } from 'react';

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [dogs, setDogs] = useState([]); // Aquí almacenaremos los datos de los perros.
  
    useEffect(() => {
      // Aquí realizarás una llamada a la API o a tu servidor para obtener los datos de los perros
      // Puedes utilizar la función fetch o axios para esto.
      // Ejemplo:
      // fetch('URL_DE_TU_API_O_SERVIDOR')
      //   .then(response => response.json())
      //   .then(data => setDogs(data));
    }, []); // Asegúrate de indicar las dependencias adecuadas si usas useEffect.
  
    return (
      <div>
        <h1>Home Page</h1>
        <input
          type="text"
          placeholder="Buscar razas de perros"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  
        {/* Aquí se mostrarán las cards de perros */}
        <div className="dog-cards">
          {dogs.map((dog) => (
            <div key={dog.id}>
              <img src={dog.image} alt={dog.name} />
              <h2>{dog.name}</h2>
              <p>Temperamentos: {dog.temperaments.join(', ')}</p>
              <p>Peso: {dog.weight}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default HomePage;
  