const Producto = require('../models/producto.models');
const imagen = require("../utils/imagen");
const fs = require('fs');
const path = require('path');

async function createProducto(req, res) {
    try {
        const productos = new Producto(req.body);

        // Manejo de la imagen
        if (req.files && req.files.imagep) {
            const imagePath = imagen.getFilePath(req.files.imagep); // Obtiene la ruta completa
            const fileName = path.basename(imagePath); // Extrae solo el nombre del archivo
            productos.imagep = fileName; // Guarda solo el nombre del archivo
        } else {
            productos.imagep = ""; // Si no hay imagen, deja el campo vacío
        }

        // Guarda el producto en la base de datos
        const datos = await productos.save();

        // Devuelve el producto creado con el nombre de la imagen
        res.status(200).send({
            ...datos._doc, // Incluye todos los datos del producto
            imageUrl: productos.imagep // Devuelve solo el nombre del archivo
        });
    } catch (error) {
        console.error("Error al crear producto:", error);
        res.status(500).send({
            msg: "Error al crear el producto",
            error: error.message,
        });
    }
}

async function getProducto(req, res) {
    try {
        const buscarProducto = await Producto.find();
        res.status(200).send(buscarProducto);
    } catch (error) {
        res.status(500).send({ msg: "Error al buscar los datos" });
    }

}

async function delProducto(req, res) {
    const { id } = req.params;
    try {
        const producto = await Producto.findById(id);
        if (producto && producto.imagep) {
            const imagePath = path.join(__dirname, '..', 'uploads', producto.imagep); // Ajusta la ruta si es necesario
            if (fs.existsSync(imagePath)) {
                await fs.promises.unlink(imagePath);
            } else {
                console.warn('La imagen no existe en el servidor:', imagePath);
            }
        }
        await Producto.findByIdAndDelete(id);
        res.status(200).send({ msg: "Producto eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).send({ msg: "No se ha podido eliminar la información" });
    }
}

async function updateProducto(req, res) {
    const { id } = req.params;
    const updateproducto = { ...req.body };

    try {
        const productoExistente = await Producto.findById(id);
        if (!productoExistente) {
            return res.status(404).send({ msg: "Producto no encontrado" });
        }

        // Si hay una nueva imagen, procesarla
        if (req.files && req.files.imagep) {
            const imagePath = imagen.getFilePath(req.files.imagep);
            updateproducto.imagep = path.basename(imagePath);

            // Eliminar la imagen anterior si existe
            if (productoExistente.imagep) {
                const oldImagePath = path.join(__dirname, '..', 'uploads', productoExistente.imagep);
                if (fs.existsSync(oldImagePath)) {
                    await fs.promises.unlink(oldImagePath);
                }
            }
        } else if (!productoExistente.imagep) {
            // Si no hay imagen previa y no se envió una nueva, deja el campo vacío
            updateproducto.imagep = "";
        } else {
            // Mantener la imagen anterior si no se envió una nueva
            updateproducto.imagep = productoExistente.imagep;
        }

        const productoActualizado = await Producto.findByIdAndUpdate(id, updateproducto, { new: true });
        res.status(200).send(productoActualizado);
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        res.status(400).send({ msg: "Error al actualizar" });
    }
}


module.exports = {
    createProducto,
    getProducto,
    delProducto,
    updateProducto
}