const router = require("express").Router();
const bcrypt = require("bcryptjs");
const usersModel = require('./users.model');
const jwt = require("jsonwebtoken");
const secrets = require('../../config/secret')


//GET all users
router.get('/', (req, res) => {
    usersModel.getUsers()
              .then(users => {
                  res.status(200).json(users)
              })
              .catch(err => {
                  res.status(500).json(err.message)
              })
})

//POST a user - Sign up
router.post('/', (req,res) => {
    const user = req.body
    const pwhashed = bcrypt.hashSync(user.password, 10)
    user.password = pwhashed;
    usersModel.addUser(user)
              .then(id => {
                  const user = {
                      id: id
                  }
                  const token = generateToken(user)
                  res.status(200).json({
                      id:id,
                      token
                    })
                  
              })
              .catch(err => {
                  res.status(500).json(err.message)
              })
})

//POST a user - Log in
router.post('/login', (req, res) => {
    let {email, password} = req.body;

    usersModel.findBy({email})
              .first()
              .then(user => {
                  console.log('found a user', user)
                  if (user && bcrypt.compareSync(password, user.password)){
                    //   req.session.user = user;
                    const token = generateToken(user)

                      res.status(200).json({
                          message: `Welcome ${user.email}`,
                          id: user.id,
                          token
                        });
                  }
                  else {
                      res.status(401).json({message: 'Invalid Credentials'});
                  }
              })
              .catch(err => {
                  res.status(500).json(err)
              })
})

function generateToken(user){
    const payload = {
        subject: user.id, // sub,
        // ...other data
    }

    const secret = secrets.jwtSecret;
    const options = {
        expiresIn: '8h',
    }

    return jwt.sign(payload, secret, options)
}

//GET user by id
router.get('/:id', (req,res) => {
    const id = req.params.id
    usersModel.getUserById(id)
              .then(user => {
                  res.status(200).json(user)
              })
              .catch(err => {
                  res.status(500).json(err.message)
              })
})

//UPDATE a user in a project
router.patch('/:userId', (req,res) => {
    const { userId }= req.params;
    const change = req.body;
    usersModel.updateUser(userId, change)
                    .then(count => {
                        res.status(200).json({message: `updated ${count} user`})
                    })
                    .catch(err => {
                        res.status(500).json(err.message)
                    })
})

//DEL a user by id
router.delete('/del/:id', (req,res) => {
    const id = req.params.id
    usersModel.delUser(id)
              .then(count => {
                  res.status(200).json({message:   `deleted ${count} user`})
              })
              .catch(err => {
                  res.status(500).json(err.message)
              })
})


module.exports = router;