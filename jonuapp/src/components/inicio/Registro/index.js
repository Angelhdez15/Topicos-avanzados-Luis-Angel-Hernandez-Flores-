// Registro.js
import React, { useState } from 'react';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos registrados:', formData);
    // Aquí puedes enviar los datos a un backend, API, etc.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro de Usuario</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Registro;
