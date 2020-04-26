const express = require('express');
const server = express();

const usersRouter = require('./APIs/users/user.router');
const commentRouter = require('./APIs/comments/comment-user.router');

server.use(express.json());
server.use('/api/users', usersRouter)
server.use('/api/comments', commentRouter)

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