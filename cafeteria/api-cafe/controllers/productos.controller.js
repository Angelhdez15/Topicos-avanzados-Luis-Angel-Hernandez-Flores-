const Producto = require('../models/producto.models');
const imagen = require("../utils/imagen");
const fs = require('fs');
const path = require('path');

async function createProducto(req, res) {
    const productos = new Producto(req.body);
    //  console.log(producto);

    try {
        if (req.files.imagep) {
            const imagePath = imagen.getFilePath(req.files.imagep);
            productos.imagep = imagePath;
        }
        const datos = await productos.save();
        res.status(200).send(datos);
    } catch (error) {
        //console.log(error);

        res.status(500).send({ msg: "Error al guardar los datos" });
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
            const imagePath = path.join(__dirname, '..', producto.imagep);
            try {
                await fs.promises.unlink(imagePath);
            } catch (err) {
                console.error('Error al eliminar la imagen:', err);
                return res.status(500).send({ msg: "Error al eliminar la imagen" });
            }
        }
        await Producto.findByIdAndDelete(id);
        res.status(200).send({ msg: "Producto eliminado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "No se ha podido eliminar la informacion" });
    }
}

async function updateProducto(req, res) {
    const { id } = req.params;
    const updateproducto = req.body;
    try {
        await Producto.findByIdAndupdate({ _id: id }, updateproducto);
        res.status(200).send({ msg: "Dato actualizados correctamente" });
    } catch (error) {
        res.status(400).send({ msg: "Error al actualizar" });
    }
}

module.exports = {
    createProducto,
    getProducto,
    delProducto,
    updateProducto
}