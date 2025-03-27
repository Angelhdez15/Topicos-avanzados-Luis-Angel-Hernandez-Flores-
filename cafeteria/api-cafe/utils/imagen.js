function getFilePath(file) {
    const filePath = file.path;
    const fileSplit = filePath.split("\\");
    return fileSplit.join("/"); // Convierte las barras invertidas en barras normales
}

module.exports = {
    getFilePath
};