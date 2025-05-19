import React, { useEffect, useState } from "react";
import "./Usuarios.css"; // Import the CSS file for styling

export const UsuariosGes = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Obtener todos los usuarios al cargar el componente
  useEffect(() => {
    fetch("http://localhost:4000/api/getdatos")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Eliminar usuario por ID
  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    try {
      const res = await fetch(`http://localhost:4000/api/deldato/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setUsuarios(usuarios.filter((u) => u._id !== id));
      } else {
        alert("No se pudo eliminar el usuario.");
      }
    } catch {
      alert("Error de conexión con el servidor.");
    }
  };

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div className="gestion-usuarios-container">
      <h2>Gestión de Usuarios</h2>
      <table className="usuarios-table" border="1" cellPadding="8" style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Contraseña</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario._id}>
              <td>{usuario.usuario}</td>
              <td>{usuario.contrasena}</td>
              <td>{usuario.correo}</td>
              <td>
                <button className="eliminar-btn" onClick={() => eliminarUsuario(usuario._id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {usuarios.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>No hay usuarios registrados.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};