const express = require("express") 

const app = express()

app.set(`view engine`, `ejs`)

app.use(express.static('public'))

//Principal
app.get("/", (req, res) => {
    res.render('index')
})

//Pedidos
app.get("/pedidos", (req,res) => {
    const listaPedidos = [
        {id: "123", preco: "R$700,00", cpf: "348.122.455.69", status: "Saiu da transportadora"},
        {id: "124", preco: "1200,00", cpf: "100.567.234.78", status: "Em preparação"},
        {id: "125", preco: "R$149,99", cpf: "100.567.234.78", status: "Entregue"},
        {id: "126", preco: "R$2799,99", cpf: "677.778.111.12", status: "Saiu da transportadora"}
    ]
    res.render("pedidos", {
        listaPedidos: listaPedidos
    })
})

//Clientes
app.get("/clientes", (req,res) => {
    const cliente = [{nome: "Sonic Shopper", foto: "imgs/sonic1.jpg", cpf: '100.567.234.78', endereco: "Rua Eggman, nº5"},
    {nome: "Comprando Sonics", foto: "imgs/sonic2.jpg", cpf: '348.122.455.69', endereco: "Rua Registro, nº8"},
    {nome: "Sonic Sucesso", foto: "imgs/sonic3.jpg", cpf: '526.333.672.21', endereco: "Rua África, nº37"},
    {nome: "Super Sonic", foto: "imgs/sonic4.jpg", cpf: '677.778.111.12', endereco: "Rua Japonês, nº1"},
    ]
    res.render('clientes',{
        cliente : cliente,
    })
})

//Produtos
app.get("/produtos", (req,res) => {
    const produto = [{nome: "Eggman Toy + Mini Sonic", foto: "imgs/brinquedo1.jpg", preco: 'R$ 700,00', distrib: "Ebay Turkey"},
        {nome: "Coleção Turma do Sonic Toy", foto: "imgs/brinquedo2.jpg", preco: 'R$ 1200,00', distrib: "Amazon Shopping"},
        {nome: "Mini Tails Toy Ed. BK", foto: "imgs/brinquedo3.jpeg", preco: 'R$ 149,99', distrib: "Entregas Fáceis LTDA"},
        {nome: "Pista do Sonic Toy", foto: "imgs/brinquedo4.jpg", preco: 'R$2799,99', distrib: "Entregas Fáceis LTDA"},
    ]
    res.render('produtos',{
        produto : produto
    })
})

//Iniciando o servidor na porta 4000 //
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});