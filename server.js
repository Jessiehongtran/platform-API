const express = require('express');
const server = express();
const cors = require('cors');
const session = require('express-session')

const usersRouter = require('./APIs/users/user.router');
const commentsRouter = require('./APIs/comments/comment-user.router');
const projectsRouter = require('./APIs/projectIdeas/projectIdeas.router');
const userprojectRouter = require('./APIs/user-project/user-project.router');
const membersRouter = require('./APIs/members/members.router');
const cateRouter = require('./APIs/category/category.router');
const subcommentRouter = require('./APIs/subcomment/subcomment.router');

const sessionConfig = {
    name: 'monkey', //sid
    secret: 'keep it secret, keep it safe!',
    cookie: {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        secure: false, //true in production
        httpOnly: true
    },
    resave: false, 
    saveUninitialized: false, //GDPR laws against setting cookie automatically, this will be changed if user agrees with us to save cookie
};

server.use(express.json());
server.use(cors());
server.use(session(sessionConfig))


server.use('/api/users', usersRouter)
server.use('/api/comments', commentsRouter)
server.use('/api/projects', projectsRouter)
server.use('/api/user_project', userprojectRouter)
server.use('/api/category', cateRouter)
server.use('/api/subcomments', subcommentRouter)

server.get('/', (req,res) => {
    res.send("Hello from Express")
})

module.exports = server;
