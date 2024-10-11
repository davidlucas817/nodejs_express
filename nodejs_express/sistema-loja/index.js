import express from "express"
const app = express()

app.set(`view engine`, `ejs`);
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}))
app.use(express.json())

import connection from "./config/sequelize-config.js"

import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/", ClientesController)
app.use("/", PedidosController)
app.use("/", ProdutosController)

connection.authenticate().then(() => {
    console.log("Conexão estabelecida com sucesso.");
  })
  .catch((error) => {
    console.log(error);
  });

connection.query(`CREATE DATABASE IF NOT EXISTS loja;`)
  .then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch(error => {
    console.log(error);
  });

//Iniciando o servidor na porta 4000 //
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
