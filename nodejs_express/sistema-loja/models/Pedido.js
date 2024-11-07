import Sequelize from "sequelize"
import connection from "../config/sequelize-config.js"

const Pedido = connection.define("pedidos", {
    idPedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    },
    cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
Pedido.sync({force: false})
export default Pedido;