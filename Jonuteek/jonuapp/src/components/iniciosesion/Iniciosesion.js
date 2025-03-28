import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Iniciosesion.css';
import { Button } from 'react-bootstrap';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
    navigate('/registro');
  };

  return (
    <div className="login-container">
      <div className="avatar">
<center><img src="https://cdn1.iconfinder.com/data/icons/messenger-and-society/16/user_person_avatar_unisex-1024.png" alt="Avatar" width="100%" height="100%" /></center> 
      </div>
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
