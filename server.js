const express = require('express');
const server = express();

const usersRouter = require('./APIs/users/user.router');
const commentsRouter = require('./APIs/comments/comment-user.router');
const projectsRouter = require('./APIs/projectIdeas/projectIdeas.router');
const userprojectRouter = require('./APIs/user-project/user-project.router');

server.use(express.json());
server.use('/api/users', usersRouter)
server.use('/api/comments', commentsRouter)
server.use('/api/projects', projectsRouter)
server.use('/api/user_project', userprojectRouter)

server.get('/', (req,res) => {
    res.send("Hello from Express")
})

module.exports = server;


/*
Routes:
x GET/POST projects
x GET/POST comments : join with users
x UPDATE join_count
x GET host for projects
x GET members for projects
*/