import React, { useState } from 'react';
import "./Registtro.css";
import { useNavigate } from 'react-router-dom';

export const Registro = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    usuario: '',
    contrasena: '',
    confirmar: '',
    correo: '',
    telefono: '',
    sexo: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formulario.contrasena !== formulario.confirmar) {
      alert("⚠️ Las contraseñas no coinciden.");
      return;
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioExistente = usuariosGuardados.find(user => user.usuario === formulario.usuario);
    if (usuarioExistente) {
      alert("⚠️ El nombre de usuario ya está en uso. Elige otro.");
      return;
    }

    const nuevoUsuario = {
      usuario: formulario.usuario,
      contrasena: formulario.contrasena
    };

    usuariosGuardados.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

    alert(`✅ ¡Registro exitoso!\nBienvenido/a ${formulario.nombre} ${formulario.apellido}`);

    setFormulario({
      nombre: '',
      apellido: '',
      edad: '',
      usuario: '',
      contrasena: '',
      confirmar: '',
      correo: '',
      telefono: '',
      sexo: ''
    });

    navigate('/login');
  };

  return (
    <div className="registro-page">
    <div className="registro-wrapper">
      <div className="registro-container">
        <h2>Registro</h2> 
        <form onSubmit={handleSubmit}>
          <Input label="Usuario" name="usuario" value={formulario.usuario} onChange={handleChange} />
          <Input label="Contraseña" name="contrasena" type="password" value={formulario.contrasena} onChange={handleChange} />
          <Input label="Confirmar Contraseña" name="confirmar" type="password" value={formulario.confirmar} onChange={handleChange} />
          <button className="boton-registrarse" type="submit">Registrarse</button>
        </form>
      </div>

      <div className="registro-bienvenida">
        <h2>¡Bienvenido!</h2>
        <p>Regístrate y empieza a disfrutar de nuestros servicios.</p>
        <img src="https://th.bing.com/th/id/R.cabfe296c81725c723ad79e561a40e60?rik=gtE4HwhRUPYLWw&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1272530%2fimages%2fo-MANATEES-facebook.jpg&ehk=HkuFGN2%2fmQOBel2fFX7hIMLRKSZhhA24QuFGL%2fAXhw0%3d&risl=&pid=ImgRaw&r=0" alt="Bienvenida" />
      </div>
    </div>
    </div>  
  );
};

const Input = ({ label, name, type = "text", value, onChange }) => (
  <div className="input-group">
    <label>{label}:</label>
    <input type={type} name={name} value={value} onChange={onChange} required />
  </div>
);
