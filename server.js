const express = require('express');
const server = express();

const usersRouter = require('./APIs/users/user.router');
const commentsRouter = require('./APIs/comments/comment-user.router');
const projectsRouter = require('./APIs/projectIdeas/projectIdeas.router');

server.use(express.json());
server.use('/api/users', usersRouter)
server.use('/api/comments', commentsRouter)
server.use('/api/projects', projectsRouter)

server.get('/', (req,res) => {
    res.send("Hello from Express")
})

module.exports = server;


/*
Routes:
- GET/POST projects
- GET people who joined same project based on project id
x GET/POST comments : join with users
- GET host for projects
- GET members for projects
*/