const express = require('express');
const server = express();


server.use(express.json());

server.get('/', (req,res) => {
    res.send("Hello from Express")
})

module.exports = server;


/*
Routes:
- GET/POST projects
- GET people who joined same project based on project id
- GET/POST comments : join with users
- GET host for projects
*/