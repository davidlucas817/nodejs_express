// Importando o Express na aplicação //
const express = require("express") // CommonJS Modules (Node, forma antiga)

// Criando uma instância do Express //
const app = express()

//Criando a rota principal
app.get("/", (req, res) => {
    res.send("<h1>Hello world! <br>Olá....</h1>")
})

//Criando a rota Perfil
// :nome é um parâmetro obrigatório
app.get("/perfil/:nome", (req,res) => {
    const nome = req.params.nome // Coletando o parâmetro e guardando na variável
    //Verificando se o parâmetro nome existe
    if(nome) { //Se nome = true
        res.send(`Olá ${nome}! Seja bem vindo!`)
    } else {
        res.send(`<h2>"Faça login para acessar o seu perfil."</h2>`)
    }
})

//Criando a rota Videos
// :playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req,res) => {
    const playlist = req.params.playlist
    const video = req.params.video
    //Verificando se playlist = true e video = undefined
    if(playlist && video == undefined) {
        res.send(`<h2>Você está na playlist de ${playlist}<\h2>`)
    }
    //Verificando se os dois parâmetros são true
    if (playlist && video) {
        res.send(`<h2>Você está na playlist de ${playlist}</h2><br>Reproduzindo o vídeo ${video}...`)
    } else {
        res.send(`<h1>Página de vídeos</h1>`)
    }
})

//Iniciando o servidor na porta 8080 //
app.listen(4000, function(error) {
    if(error){
        console.log(`Ocorreu um erro: ${error}`)
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})