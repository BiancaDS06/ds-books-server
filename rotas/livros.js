const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livros")

const router = Router()

router.get('/', getLivros)
//rotas, request é o que é mandado e response o que é recebido pela pessoa que nos chamou, send é enviar
router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)

module.exports = router