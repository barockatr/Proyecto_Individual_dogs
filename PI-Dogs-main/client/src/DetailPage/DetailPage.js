import React from 'react';
import { useSelector } from 'react-redux';
import './DetailPage.css';

function DetailPage() {
  // Aquí accederás a la información del perro desde Redux, o puedes usar un estado local si lo prefieres.

  return (
    <div className="detail-page">
      {/* Aquí colocarás la información del perro, como ID, imagen, nombre, altura, peso, temperamentos y años de vida */}
    </div>
  );
}

export default DetailPage;
