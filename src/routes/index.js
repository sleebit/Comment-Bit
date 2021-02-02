const commentsController = require('../controllers/commentsController')

module.exports = (express) => {
  const router = express.Router()

  router.get('/comments', commentsController.index)
  router.get('/comments/:id', commentsController.show)
  router.post('/comments', commentsController.store)
  router.put('/comments/:id', commentsController.update)
  router.delete('/comments/:id', commentsController.destroy)

  return router
}
