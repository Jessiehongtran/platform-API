const router = require("express").Router();
const membersModel = require('./members.model');


//POST a member 
router.post('/', (req,res) => {
    const member = req.body
    membersModel.addMember(member)
              .then(id => {
                  res.status(200).json(id)
                  
              })
              .catch(err => {
                  res.status(500).json(err.message)
              })
})


module.exports = router;