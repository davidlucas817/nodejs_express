import express from "express"
import Cliente from "../models/Cliente.js";
import Auth from "../middleware/Auth.js"
const router = express.Router()

router.get("/clientes", Auth, (req, res) => {
  Cliente.findAll().then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/clientes/new", Auth, (req, res) => {
  const nome = req.body.nome;
  const endereco = req.body.endereco;
  const cpf = req.body.cpf;
  
  Cliente.create({
    nome:nome,
    endereco:endereco,
    cpf:cpf
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/clientes/delete/:id", Auth, (req, res) => {
    const id = req.params.id
    Cliente.destroy({
        where : {
            id : id
        }
    }).then(() => {
        res.redirect("/clientes")
    }).catch(error => {
        console.log(error)
    })
})

router.get("/clientes/edit/:id", Auth, (req,res) => {
  const id = req.params.id
  Cliente.findByPk(id).then(cliente => {
    res.render("clienteEdit", {
      cliente:cliente
    })
  })
})

router.post("/clientes/update/:id", Auth, (req, res) => {
  const id = req.body.id
  const nome = req.body.nome
  const endereco = req.body.endereco
  const cpf = req.body.cpf
  Cliente.update(
    {
      nome:nome,
      endereco:endereco,
      cpf:cpf,
    },
    {where: {id:id}}
  ).then(() => {
    res.redirect("/clientes")
  })
})

export default router