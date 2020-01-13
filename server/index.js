const express = require('express')
const cors = require('cors')

const app = express()
const port = 3001

const getUsers = require('./get/getUsers')
const getUser = require('./get/getUser')

const postUser = require('./post/postUser')

app.use(express.json())
app.use(cors())

//get all users
app.get('/api/users', getUsers)
//get user by id
app.get('/api/user/id/:id', getUser)
//get user by name

//post user
app.post('/api/user', postUser)


app.listen(port, () => console.log(`Server listening on port ${port}`))