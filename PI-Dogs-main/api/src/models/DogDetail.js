import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config/apiConfig'; // Asegúrate de que la URL de la API esté configurada correctamente

function DogDetails({ match }) {
  const { idRaza } = match.params;
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud al backend para obtener los detalles del perro
    axios.get(`${API_BASE_URL}/dogs/${idRaza}`)
      .then((response) => {
        setDogData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [idRaza]);

  return (
    <div>
      {dogData ? (
        <div>
          <h1>Detalles del perro: {dogData.Nombre}</h1>
          <img src={dogData.Imagen} alt={dogData.Nombre} />
          <p>Altura: {dogData.Altura}</p>
          <p>Peso: {dogData.Peso}</p>
          <p>Años de vida: {dogData.Años_de_vida}</p>
        </div>
      ) : (
        <p>Cargando detalles del perro...</p>
      )}
    </div>
  );
}

export default DogDetails;
