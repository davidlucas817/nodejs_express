// Importando o Express na aplicação //
const express = require("express") // CommonJS Modules (Node, forma antiga)

// Criando uma instância do Express //
const app = express()

//Criando a rota principal
app.get("/", function(req, res) {
    res.send("Hello world!")
})

//Iniciando o servidor na porta 8080 //
app.listen(8080, function(error) {
    if(error){
        console.log(`Ocorreu um erro: ${error}`)
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})