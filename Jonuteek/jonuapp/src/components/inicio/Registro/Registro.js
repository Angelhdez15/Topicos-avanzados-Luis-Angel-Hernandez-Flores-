import React, { useState } from 'react';
import "./Registtro.css"; // Importación de hoja de estilo
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

export const Registro = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    contrasena: '',
    confirmar: '',
    correo: '',
    telefono: '',
    sexo: ''
  });

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formulario.contrasena !== formulario.confirmar) {
      alert("⚠️ Las contraseñas no coinciden.");
      return;
    }

    alert(`✅ ¡Registro exitoso!\nBienvenido/a ${formulario.nombre} ${formulario.apellido}`);
    setFormulario({
      nombre: '',
      apellido: '',
      edad: '',
      contrasena: '',
      confirmar: '',
      correo: '',
      telefono: '',
      sexo: ''
    });
  };

  const handleRegisterClick = () => {
    // Redirigir a la ruta de login
    navigate('/login');
  };

  return (
    <div className="registro-container">
      <div className="registro-form-wrapper">
        <h2 className="registro-title">Registro</h2>
        <form className="registro-form" onSubmit={handleSubmit}>
          <Input label="Ingrese nombre de usuario" name="nombre" value={formulario.nombre} onChange={handleChange} />
          <Input label="Ingrese apellido(s) de usuario" name="apellido" value={formulario.apellido} onChange={handleChange} />
          <Input label="Ingrese edad de usuario" name="edad" type="number" value={formulario.edad} onChange={handleChange} />
          <Input label="Ingrese la contraseña" name="contrasena" type="password" value={formulario.contrasena} onChange={handleChange} />
          <Input label="Confirme la contraseña" name="confirmar" type="password" value={formulario.confirmar} onChange={handleChange} />
          <Input label="Ingrese correo electrónico de usuario" name="correo" type="email" value={formulario.correo} onChange={handleChange} />
          <Input label="Ingrese número telefónico de usuario" name="telefono" type="tel" value={formulario.telefono} onChange={handleChange} />
          <Input label="Ingrese sexo de usuario" name="sexo" value={formulario.sexo} onChange={handleChange} />
          <button type="submit" className="boton-registrarse">Registrarse</button>
          <button type="button" className="boton-login" onClick={handleRegisterClick}>
            ¿Ya tienes una cuenta? Inicia sesión
          </button>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, name, type = "text", value, onChange }) => (
  <div className="input-group">
    <label>{label} *</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);