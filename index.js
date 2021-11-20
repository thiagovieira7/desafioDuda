require("dotenv").config();
const express = require("express");  
const app = express(); 
const cors = require("cors"); 
app.use(express.json());  

const Conn = require("./model/conn/index"); 
Conn(); 
app.use(cors());
app.options("*", cors());
app.get('/', (req,res) => {
    res.status(200).json({message:"API usuarios"});
});
const usuariosRouter = require("./routers/usuarios.routes");
app.use("/usuarios", usuariosRouter);

// app.listen(process.env.PORT, () => {
//   console.info(`App rodando em http://localhost:${process.env.PORT}`);
// }); usado para rodar com banco de dados
app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
