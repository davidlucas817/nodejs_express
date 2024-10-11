import express from "express"
const router = express.Router()
import Pedido from "../models/Pedido.js";

router.get("/pedidos", (req, res) => {
  Pedido.findAll()
    .then((pedidos) => {
      res.render("pedidos", {
        pedidos: pedidos,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/pedidos/new", (req, res) => {
  const idPedido = req.body.preco;
  const preco = req.body.preco;
  const cpf = req.body.cpf;
  const status = req.body.status;

  Pedido.create({
    idPedido:idPedido,
    preco:preco,
    status:status,
    cpf:cpf,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/pedidos/delete/:id", (req, res) => {
    const id = req.params.id
    Pedido.destroy({
        where : {
            id : id
        }
    }).then(() => {
        res.redirect("/pedidos")
    }).catch(error => {
        console.log(error)
    })
})

router.get("/pedidos/edit/:id", (req,res) => {
  const id = req.params.id
  Pedido.findByPk(id).then(pedido => {
    res.render("pedidoEdit", {
      pedido:pedido
    })
  })
})

router.post("/pedidos/update/:id", (req, res) => {
  const id = req.body.id
  const idPedido = req.body.idPedido
  const preco = req.body.preco
  const cpf = req.body.cpf
  const status = req.body.status
  Pedido.update(
    {
      idPedido:idPedido,
      preco:preco,
      cpf:cpf,
      status:status,

    },
    {where: {id:id}}
  ).then(() => {
    res.redirect("/pedidos")
  })
})

export default router