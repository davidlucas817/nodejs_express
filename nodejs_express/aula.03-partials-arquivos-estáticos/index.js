// Importando o Express na aplicação //
const express = require("express") // CommonJS Modules (Node, forma antiga)

// Criando uma instância do Express //
const app = express()

//Definindo o EJS como renderizador de páginas
app.set(`view engine`, `ejs`)

// Definir a pasta dos arquivos estáticos (public)
app.use(express.static('public'))

//ROTA PRINCIPAL
app.get("/", (req, res) => {
    //Será renderizada a página "index.ejs" que está na pasta 'views'
    res.render('index')
})

//ROTA PERFIL
app.get("/perfil/:nome?", (req,res) => {
    res.render('perfil')
})

//Criando a rota Videos
app.get("/videos/:playlist?/:video?", (req,res) => {
    res.render('videos')
})

// ROTA PRODUTOS
app.get("/produtos/:produto?", (req,res) => {
    const listaProdutos = ['Computador', 'Celular', 'Tablet', 'Notebook']
    const produto = req.params.produto
    res.render('produtos',{
        //Enviando a variável para a página
        //Será chamado na página
        produto : produto, //Variável que está na index (req.params)
        listaProdutos : listaProdutos
        //Na página produtos.ejs
    })
})

//Iniciando o servidor na porta 4000 //
app.listen(4000, function(error) {
    if(error){
        console.log(`Ocorreu um erro: ${error}`)
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})