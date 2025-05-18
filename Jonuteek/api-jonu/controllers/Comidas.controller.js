const Comida = require('../models/Comidas.models');
const imagen = require("../utils/imagen");
const fs = require('fs');
const path = require('path');

async function createComida(req, res) {
    try {
        const Comidas = new Comida(req.body);

        // Manejo de la imagen
        if (req.files && req.files.imageC) {
            const imageCath = imagen.getFilePath(req.files.imageC); // Obtiene la ruta completa
            const fileName = path.basename(imageCath); // Extrae solo el nombre del archivo
            Comidas.imageC = fileName; // Guarda solo el nombre del archivo
        } else {
            Comidas.imageC = ""; // Si no hay imagen, deja el campo vacío
        }

        // Guarda el Comida en la base de datos
        const datos = await Comidas.save();

        // Devuelve el Comida creado con el nombre de la imagen
        res.status(200).send({
            ...datos._doc, // Incluye todos los datos del Comida
            imageUrl: Comidas.imageC // Devuelve solo el nombre del archivo
        });
    } catch (error) {
        console.error("Error al crear Comida:", error);
        res.status(500).send({
            msg: "Error al crear el Comida",
            error: error.message,
        });
 }
}

async function getComida(req, res) {
    try {
        const buscarComida = await Comida.find();
        res.status(200).send(buscarComida);
    } catch (error) {
        res.status(500).send({ msg: "Error al buscar los datos" });
    }

}

async function delComida(req, res) {
    const { id } = req.params;
    try {
        const comida = await Comida.findById(id); // Cambia a 'comida'
        if (comida && comida.imageC) {
            const imageCath = path.join(__dirname, '..', 'uploadsC', comida.imageC); // Usa uploadsC
            if (fs.existsSync(imageCath)) {
                await fs.promises.unlink(imageCath);
            } else {
                console.warn('La imagen no existe en el servidor:', imageCath);
            }
        }
        await Comida.findByIdAndDelete(id);
        res.status(200).send({ msg: "Comida eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar Comida:", error);
        res.status(500).send({ msg: "No se ha podido eliminar la información" });
    }
}

async function updateComida(req, res) {
    const { id } = req.params;
    const updateComida = { ...req.body };

    try {
        const ComidaExistente = await Comida.findById(id);
        if (!ComidaExistente) {
            return res.status(404).send({ msg: "Comida no encontrado" });
        }

        // Si hay una nueva imagen, procesarla
        if (req.files && req.files.imageC) {
            const imageCath = imagen.getFilePath(req.files.imageC);
            updateComida.imageC = path.basename(imageCath);

            // Eliminar la imagen anterior si existe
            if (ComidaExistente.imageC) {
                const oldImageCimageCath = path.join(__dirname, '..', 'uploads', ComidaExistente.imageC);
                if (fs.existsSync(oldImageCimageCath)) {
                    await fs.promises.unlink(oldImageCimageCath);
                }
            }
        } else if (!ComidaExistente.imageC) {
            // Si no hay imagen previa y no se envió una nueva, deja el campo vacío
            updateComida.imageC = "";
        } else {
            // Mantener la imagen anterior si no se envió una nueva
            updateComida.imageC = ComidaExistente.imageC;
        }

        const ComidaActualizado = await Comida.findByIdAndUpdate(id, updateComida, { new: true });
        res.status(200).send(ComidaActualizado);
    } catch (error) {
        console.error("Error al actualizar Comida:", error);
        res.status(400).send({ msg: "Error al actualizar" });
    }
}


module.exports = {
    createComida,
    getComida,
    delComida,
    updateComida
}