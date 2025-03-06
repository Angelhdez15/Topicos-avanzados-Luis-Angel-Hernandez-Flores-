async function createProducto(req, res) {
    res.status(201).send({ message: "crear productos" });
}

async function getProducto(req, res) {
 res.json("ver productos")
}

async function delProducto(req, res) {
    res.status(201).send({ message: "Eliminar" });

}

async function updateProducto(req, res) {
    res.status(201).send({ message: "Actual productos" });

}

module.exports = {
    createProducto,
    getProducto,
    delProducto,
    updateProducto
}