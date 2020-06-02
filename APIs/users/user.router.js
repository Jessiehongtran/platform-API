const router = require("express").Router();
const bcrypt = require("bcryptjs");
const usersModel = require('./users.model');

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
                  res.status(200).json(id)
              })
              .catch(err => {
                  res.status(500).json(err.message)
              })
})

//POST a user - Log in
router.post('/login', (req, res) => {
    let {email, password} = req.body;

    usersModel.findBy(email)
              .first()
              .then(user => {
                  if (user && bcrypt.compareSync(password, user.password)){
                      res.status(200).json({message: `Welcome ${user.email}`});
                  }
                  else {
                      res.status(401).json({message: 'Invalid Credentials'});
                  }
              })
              .catch(err => {
                  res.status(500).json(err)
              })
})

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

module.exports = router;