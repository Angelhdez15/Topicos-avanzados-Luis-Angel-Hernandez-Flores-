const Datos = require('../models/Datos.models');

// Crear un nuevo dato
async function createDato(req, res) {
    try {
        const { usuario, correo } = req.body;
        // Verifica si el usuario ya existe
        const existeUsuario = await Datos.findOne({ usuario });
        if (existeUsuario) {
            return res.status(400).send({ campo: "usuario", msg: "El usuario ya está registrado" });
        }
        // Verifica si el correo ya existe
        const existeCorreo = await Datos.findOne({ correo });
        if (existeCorreo) {
            return res.status(400).send({ campo: "correo", msg: "El correo ya está registrado" });
        }
        const dato = new Datos(req.body);
        const datoGuardado = await dato.save();
        res.status(200).send(datoGuardado);
    } catch (error) {
        res.status(500).send({
            msg: "Error al crear el dato",
            error: error.message,
        });
    }
}

// Obtener todos los datos
async function getDatos(req, res) {
    try {
        const datos = await Datos.find();
        res.status(200).send(datos);
    } catch (error) {
        res.status(500).send({ msg: "Error al buscar los datos" });
    }
}

// Eliminar un dato por ID
async function delDato(req, res) {
    const { id } = req.params;
    try {
        await Datos.findByIdAndDelete(id);
        res.status(200).send({ msg: "Dato eliminado correctamente" });
    } catch (error) {
        res.status(500).send({ msg: "No se ha podido eliminar la información" });
    }
}

// Actualizar un dato por ID
async function updateDato(req, res) {
    const { id } = req.params;
    try {
        const datoActualizado = await Datos.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send(datoActualizado);
    } catch (error) {
        res.status(400).send({ msg: "Error al actualizar" });
    }
}

// Validar usuario y contraseña
async function loginDato(req, res) {
    const { usuario, contrasena } = req.body;
    try {
        const user = await Datos.findOne({ usuario, contrasena });
        if (!user) {
            return res.status(401).send({ msg: "Usuario o contraseña incorrectos" });
        }
        res.status(200).send({ msg: "Login exitoso", user });
    } catch (error) {
        res.status(500).send({ msg: "Error al iniciar sesión" });
    }
}

module.exports = {
    createDato,
    getDatos,
    delDato,
    updateDato,
    loginDato
}