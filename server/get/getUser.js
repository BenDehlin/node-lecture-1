const users = require('../data/users')

const getUser = (req, res) => {
  const {id} = req.params
  let selectedUser = users.find(el => el.id === +id)
  res.status(200).send(selectedUser)
}

module.exports = getUser