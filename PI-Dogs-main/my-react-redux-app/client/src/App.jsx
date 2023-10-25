import './App.css';
import React from 'react';
import SearchBar from './SearchBar';
import HomePage from './HomePage';
import Favorites from './Favorites'; // Asegúrate de que la ruta al componente sea correcta

function App() {
  // Resto de tu código

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <h1>Henry Dogs</h1>
      <Favorites /> {/* Agrega el componente de Favoritos aquí */}
      <HomePage />
    </div>
  );
}

export default App;
