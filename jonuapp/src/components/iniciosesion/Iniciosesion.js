import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Iniciosesion.css';
import { Button } from 'react-bootstrap';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    console.log('Iniciando sesión con:', { username, password });

    navigate('/'); 
  };

  const handleRegisterClick = () => {
    // Redirigir a la ruta de registro
    navigate('/registro');
  };

  return (
    <div className="login-container">
      <center>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Avatar"
          width={150}
          height={150}
          className="avatar"
        />
      </center>
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
        <br />
        <Button variant="danger" onClick={handleRegisterClick}>
          Registrarse
        </Button>
      </form>
    </div>
  );
};