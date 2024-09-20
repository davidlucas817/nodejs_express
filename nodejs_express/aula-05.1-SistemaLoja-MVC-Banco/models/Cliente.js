//PPRM - SEQUELIZE
import Sequelize from "sequelize";

//CONFIGURAÇÃO DO SEQUELIZE
import connection from "../config/sequelize-config.js";

//Define a criação da tabela no banco
const Cliente = connection.define("clientes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
//Não força a criação da tabela caso já exista
Cliente.sync({ force: false });
export default Cliente
