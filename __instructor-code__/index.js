const express = require('express');
const cors = require('cors');

const app = express();

const users = [
    {id: 0, name: 'Matt'},
    {id: 1, name: 'Matias'},
    {id: 2, name: 'Lucas'}
];

app.use(express.json());
app.use(cors());

app.get('/api/users', (req, res) => {
    res.status(200).send(users)
})

app.get('/api/user/:id', (req, res) => {
    const {id} = req.params;

    let selectedUser = users.find(element => element.id === +id);
    res.status(200).send(selectedUser);
})

app.post('/api/user', (req, res) => {
    users.push(req.body);
    res.status(200).send(users);
})

app.listen(3334, () => console.log('Server running on 3334'));