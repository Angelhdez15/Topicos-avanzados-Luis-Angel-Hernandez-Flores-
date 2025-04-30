const Transporte = require('../models/Transporte.models');
const imagen = require("../utils/imagen");
const fs = require('fs');
const path = require('path');

async function createTransporte(req, res) {
    try {
        const nuevoTransporte = new Transporte(req.body); // Cambiar el nombre de la instancia

        // Manejo de la imagen
        if (req.files && req.files.imagept) {
            const imagePath = imagen.getFilePath(req.files.imagept); // Obtiene la ruta completa
            const fileName = path.basename(imagePath); // Extrae solo el nombre del archivo
            nuevoTransporte.imagept = fileName; // Guarda solo el nombre del archivo
        } else {
            nuevoTransporte.imagept = ""; // Si no hay imagen, deja el campo vacío
        }

        // Guarda el Transporte en la base de datos
        const datos = await nuevoTransporte.save();

        // Devuelve el Transporte creado con el nombre de la imagen
        res.status(200).send({
            ...datos._doc, // Incluye todos los datos del Transporte
            imageUrl: nuevoTransporte.imagept // Devuelve solo el nombre del archivo
        });
    } catch (error) {
        console.error("Error al crear Transporte:", error);
        res.status(500).send({
            msg: "Error al crear el Transporte",
            error: error.message,
        });
    }
}

async function getTransporte(req, res) { // Cambiar el nombre de la función
    try {
        const buscarTransporte = await Transporte.find();
        res.status(200).send(buscarTransporte);
    } catch (error) {
        res.status(500).send({ msg: "Error al buscar los datos" });
    }
}

async function delTransporte(req, res) {
    const { id } = req.params;
    try {
        const transporte = await Transporte.findById(id); // Cambiar el nombre de la variable para evitar conflictos
        if (transporte && transporte.imagept) {
            const imagePath = path.join(__dirname, '..', 'uploadsT', transporte.imagept);
            if (fs.existsSync(imagePath)) {
                await fs.promises.unlink(imagePath); // Elimina la imagen si existe
            }
        }
        await Transporte.findByIdAndDelete(id); // Elimina el transporte de la base de datos
        res.status(200).send({ msg: "Transporte eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar Transporte:", error);
        res.status(500).send({ msg: "No se ha podido eliminar la información" });
    }
}

async function updateTransporte(req, res) {
    const { id } = req.params;
    const updateTransporte = { ...req.body };

    try {
        const TransporteExistente = await Transporte.findById(id);
        if (!TransporteExistente) {
            return res.status(404).send({ msg: "Transporte no encontrado" });
        }

        // Manejo de la imagen
        if (req.files && req.files.imagept) {
            const newImagePath = imagen.getFilePath(req.files.imagept); // Obtiene la nueva imagen
            updateTransporte.imagept = path.basename(newImagePath); // Guarda solo el nombre del archivo

            // Elimina la imagen anterior si existe
            const oldImagePath = path.join(__dirname, '..', 'uploadsT', TransporteExistente.imagept);
            if (fs.existsSync(oldImagePath)) {
                await fs.promises.unlink(oldImagePath); // Elimina la imagen anterior
            }
        } else {
            updateTransporte.imagept = TransporteExistente.imagept; // Mantén la imagen anterior si no se sube una nueva
        }

        // Actualiza el transporte en la base de datos
        const TransporteActualizado = await Transporte.findByIdAndUpdate(id, updateTransporte, { new: true });
        res.status(200).send(TransporteActualizado);
    } catch (error) {
        console.error("Error al actualizar Transporte:", error);
        res.status(400).send({ msg: "Error al actualizar" });
    }
}



module.exports = {
    createTransporte,    
    getTransporte,
    delTransporte,
    updateTransporte
}