const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("Livros.json"))
}

function getLivrosPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id)[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("Livros.json"))
    const novaListaDeLivros = [...livros, livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes}
    //Basicamente o livros atuais trará um objeto com id e nome por exemplo, e o modificacoes irá adicionar ou sunstituir algo dentro desse objeto.
    livrosAtuais[indiceModificado] = conteudoMudado
    //Seu novo valor
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
    //Transforma o objeto em texto.
}

function deletaLivro(id) {
    const livrosAtuais = JSON.parse(fs.readFileSync("Livros.json"));
    const livroASerDeletado = livrosAtuais.filter(livro => livro.id !== id);
    //Lista de livros que tenha o id diferente do que passei e faz uma lista
    fs.writeFileSync("Livros.json", JSON.stringify(livroASerDeletado));
    //Escreve no ivros.json
}


module.exports = {
    getTodosLivros,
    getLivrosPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
}