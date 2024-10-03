import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define("pedidos", {
  numero: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  valor: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
Pedido.sync({force: false});
export default Pedido;