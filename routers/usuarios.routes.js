 
const express = require("express");
const router = express.Router();

const usuariosController = require("./../controller/usuarios.controller");

router.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Rota usuarios ok. Escolha entre as seguintes opções: ( /readall) ( /readid ) ( create ) ( update ) ( delete )",
  });
});

router.get("/readall", usuariosController.getAll);

router.get("/readid/:id", usuariosController.getlistid);

router.post("/create", usuariosController.postAdd);

router.put("/update/:id", usuariosController.putUpdate);

router.delete("/delete/:id", usuariosController.deleteDel);

module.exports = router;
