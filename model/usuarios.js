const mongoose = require("mongoose");

const usuariosModel = new mongoose.Schema({
    nome: { type: String, required: true },
    nomeUsuario: { type: String, required: true },
    senha: { type: Number, required: true } ,    
    dataCriacao: { type: Date, default: Date.now },
});

const usuarios = mongoose.model("usuarios", usuariosModel);

module.exports = usuarios;
