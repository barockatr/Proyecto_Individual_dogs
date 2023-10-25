import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTemperamentsSuccess } from './redux/temperamentActions';
import axios from 'axios'; // Importa Axios

const CreateDogForm = ({ temperaments, fetchTemperamentsSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    min_height: '',
    max_height: '',
    min_weight: '',
    max_weight: '',
    lifespan: '',
    temperaments: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTemperamentChange = (event) => {
    const temperament = event.target.value;
    if (!formData.temperaments.includes(temperament)) {
      setFormData({
        ...formData,
        temperaments: [...formData.temperaments, temperament],
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar el formulario al backend para crear la raza de perro.
  };

  useEffect(() => {
    // Realiza la solicitud para cargar los temperamentos utilizando Axios
    axios.get('URL_DE_TU_API_PARA_OBTENER_TEMPERAMENTS')
      .then((response) => {
        const temperamentsData = response.data; // Supongo que la respuesta contiene los temperamentos
        fetchTemperamentsSuccess(temperamentsData);
      })
      .catch((error) => {
        console.error('Error al obtener los temperamentos:', error);
      });
  }, [fetchTemperamentsSuccess]);

  return (
    <div>
      <h2>Create a New Dog Breed</h2>
      <form onSubmit={handleSubmit}>
        {/* Resto del formulario */}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    temperaments: state.someReducer.temperaments,
  };
};

export default connect(mapStateToProps, { fetchTemperamentsSuccess })(CreateDogForm);
