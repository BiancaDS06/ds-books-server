const { Router } = require("express")
const { getLivros, getLivro, postLivro } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros)
//rotas, request é o que é mandado e response o que é recebido pela pessoa que nos chamou, send é enviar
router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH')
})

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE')
})

module.exports = router