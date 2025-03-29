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
      nombre: formulario.nombre,
      apellido: formulario.apellido,
      edad: formulario.edad,
      usuario: formulario.usuario,
      contrasena: formulario.contrasena,
      correo: formulario.correo,
      telefono: formulario.telefono,
      sexo: formulario.sexo
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

    navigate('/');
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

  return (
    <div className="registro-page">
      <div className="registro-wrapper">
        <div className="registro-container">
          <h2>Registro</h2> 
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Información Personal</h3>
              <Input label="Nombre" name="nombre" value={formulario.nombre} onChange={handleChange} />
              <Input label="Apellido" name="apellido" value={formulario.apellido} onChange={handleChange} />
              <Input label="Edad" name="edad" type="number" value={formulario.edad} onChange={handleChange} />
              <div className="input-group">
                <label>Sexo:</label>
                <select name="sexo" value={formulario.sexo} onChange={handleChange} required>
                  <option value="">Seleccionar...</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div className="form-section">
              <h3>Información de Contacto</h3>
              <Input label="Correo Electrónico" name="correo" type="email" value={formulario.correo} onChange={handleChange} />
              <Input label="Teléfono" name="telefono" type="tel" value={formulario.telefono} onChange={handleChange} />
            </div>

            <div className="form-section">
              <h3>Credenciales</h3>
              <Input label="Usuario" name="usuario" value={formulario.usuario} onChange={handleChange} />
              <Input label="Contraseña" name="contrasena" type="password" value={formulario.contrasena} onChange={handleChange} />
              <Input label="Confirmar Contraseña" name="confirmar" type="password" value={formulario.confirmar} onChange={handleChange} />
            </div>

            <button className="boton-registrarse" type="submit">Registrarse</button>
            <button 
              type="submit" 
              className="boton-registrarse" 
              onClick={handleLoginRedirect}
            >
              ¿Tienes cuenta? Inicia Sesión
            </button>
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