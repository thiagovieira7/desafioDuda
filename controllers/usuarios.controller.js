const usuarios = require("./../model/usuarios");

function validarAddUpdt(res, reqisicao) {
  if (!reqisicao.nome) {
    res.status(400).send({
      message: "NOME inválido. Verifique as informações da requisição no body.",
    });
    return true;
  } else if (!reqisicao.nomeUsuario) {
    res.status(400).send({
      message:
        "QTDBAIRROS inválida. Verifique as informações da requisição no body.",
    });
    return true;
  } else if (!reqisicao.senha) {
    res.status(400).send({
      message:
        "POPULAÇÃO inválida. Verifique as informações da requisição no body.",
    });
    return true;
//   } else if (!reqisicao.dtAniversario) {
//     res.status(400).send({
//       message:
//         "DTANIVERSARIO inválida. Verifique as informações da requisição no body.",
//     });
//     return true;
  }
}

function validaId(res, id) {
  if (id.length !== 24) {
    res.status(400).json({ message: "id precisa ter 24 caracteres" });
    return true;
  }
}

exports.getRead = async (req, res) => {
  await usuarios
    .find({})
    .then((usuarios) => {
      res.status(200).json(usuarios);
    })
    .catch((err) => {
      res.status(404).json({ message: "Informação não encontrada" });
      console.error(err);
    });
};

exports.getReadID = async (req, res) => {
  if (validaId(res, req.params.id)) return;
  await usuarios
    .findById(req.params.id)
    .then((usuarios) => {
      console.log(usuarios.descri);

      if (usuarios == null) {
        res.status(404).json({ message: "Não localizado" });
      } else {
        res.status(200).json(usuarios);
      }
    })
    .catch((err) => {
      res.status(404).json({ message: "Nenhum resultado encontrado" });
      console.error(err);
    });
};

exports.postCreate = async (req, res) => {
//   if (validarAddUpdt(res, req.body)) return;

  await usuarios
    .create(req.body)
    .then(() => {
      res.status(200).json({ message: "Acessorio cadastrado com sucesso." });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao cadastrar" });
      console.error(err);
    });
};

exports.putUpdate = async (req, res) => {
  if (validaId(res, req.params.id)) return;
  if (validarAddUpdt(res, req.body)) return;
  await usuarios
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res
        .status(200)
        .json({ message: "Informações do usuario alterado com sucesso" });
    })
    .catch((err) => {
      res.status(400).json({ message: "Erro ao atualizar" });
      console.error(err);
    });
};

exports.deleteDel = async (req, res) => {
  if (validaId(res, req.params.id)) return;
  await usuarios
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Deletado com sucesso" });
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({ message: "Erro ao deletar" });
    });
};
