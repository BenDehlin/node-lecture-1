const users = require('../data/users')

const getUsers = (req, res) => {
  const {name, id, age, carMake, carModel} = req.query
  if(name){
    const selectedUsers = users.filter(val => {
      return val.name === name
    })
    return res.status(200).send(selectedUsers)
  }
  if(id){
    const selectedUsers = users.filter(val => {
      return val.id === +id
    })
    return res.status(200).send(selectedUsers)
  }
  if(age){
    const selectedUsers = users.filter( val => {
      return val.age === +age
    })
    return res.status(200).send(selectedUsers)
  }
  if(carMake){
    const selectedUsers = users.filter(val => {
      return val.car.make === carMake
    })
    return res.status(200).send(selectedUsers)
  }
  if(carModel){
    const selectedUsers = users.filter(val => {
      return val.car.model === carModel
    })
    return res.status(200).send(selectedUsers)
  }
  res.status(200).send(users)
}

module.exports = getUsers