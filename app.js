const express = require("express") 
// Função que cria um servidor express
const rotaLivro = require("./rotas/livros")

const app = express()
app.use(express.json())
//Lê json agr
//Chama a função criada
app.use('/livros', rotaLivro)
const port = 8000
//Porta que vai ter acesso ao back
// app.get('/', (req, res)=>{
//     res.send("Olá mundo da Bia!")
// })
//rotas, request é o que é mandado e response o que é recebido pela pessoa que nos chamou, send é enviar
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
//Terá que ficar escutando o que recebe na porta 8000