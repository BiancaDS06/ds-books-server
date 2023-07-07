const fs = require("fs")
//Ferramenta para manipular arquivos
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
//É uma função JavaScript que converte uma string JSON em um objeto JavaScript.
const novoDado = { id: '3', nome: 'Livro novo'}

fs.writeFileSync("livros.json", JSON.stringify ([...dadosAtuais, novoDado]))
//Objeto js em texto
//Escrever no arquivo, os três pontos significa colocar tudo daquela constante
console.log(JSON.parse(fs.readFileSync("livros.json")))