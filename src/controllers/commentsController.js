const comments = require('../services/comments')
const uuid = require('uuid')

exports.index = (req, res) => {
  const data = comments.getComments()

  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.show = async (req, res) => {
  const id = req.params.id
  const data = await comments.showComment(id)

  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.store = async (req, res) => {
  const obj = req.body
  obj.id = uuid()

  await comments.saveComment(obj)

  res.json({
    status: 'OK',
    message: 'success',
    data: obj
  })
}

exports.update = async (req, res) => {
  const id = req.params.id
  const obj = req.body

  console.log(obj);

  await comments.updateComment(id, obj)

  const data = await comments.showComment(id)

  res.json({
    status: 'OK',
    message: 'success',
    data,
  })
}

exports.destroy = async (req, res) => {
  const { id } = req.params

  await comments.removeComment(id)

  res.json({
    status: 'OK',
    message: 'data successfully deleted.',
    data: null,
  })
}
