const users = require('../data/users')

const postUser = (req, res) => {
  users.push(req.body)
  res.status(200).send(users)
}

module.exports = postUser