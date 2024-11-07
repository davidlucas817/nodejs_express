import express from "express"
const router = express.Router()
import Produto from "../models/Produto.js";
import Auth from "../middleware/Auth.js"

router.get("/produtos", Auth, (req, res) => {
  Produto.findAll()
    .then((produtos) => {
      res.render("produtos", {
        produtos:produtos,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/produtos/new", Auth, (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const distrib = req.body.distrib;

  Produto.create({
   nome:nome,
    preco:preco,
    distrib:distrib,
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/produtos/delete/:id", Auth, (req, res) => {
    const id = req.params.id
    Produto.destroy({
        where : {
            id : id
        }
    }).then(() => {
        res.redirect("/produtos")
    }).catch(error => {
        console.log(error)
    })
})

router.get("/produtos/edit/:id", Auth, (req,res) => {
  const id = req.params.id
  Produto.findByPk(id).then(produto => {
    res.render("produtoEdit", {
      produto:produto
    })
  })
})

router.post("/produtos/update/:id", Auth, (req, res) => {
  const id = req.body.id
  const nome = req.body.nome
  const preco = req.body.preco
  const distrib = req.body.distrib
  Produto.update(
    {
      nome:nome,
      preco:preco,
      distrib:distrib,
    },
    {where: {id:id}}
  ).then(() => {
    res.redirect("/produtos")
  })
})

export default router