const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const Adapter = new FileSync('db/comments.json')
const Db = low(Adapter)

const initialData = {
  comment: [],
}

// Db.defaults(initialData).write()

exports.getComments = () => (
  Db.get('comments').value()
)

exports.showComment = (id) => (
  Db.get('comments')
    .find({ id })
    .value()
)

exports.saveComment = (comment) => (
  Db.get('comments')
    .push(comment)
    .write()
)

exports.updateComment = (id, obj) => (
  Db.get('comments')
    .find({ id })
    .assign(obj)
    .write()
)

exports.removeComment = (id) => (
  Db.get('comments')
    .remove({ id })
    .write()
)
