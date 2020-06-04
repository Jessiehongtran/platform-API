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

//GET members for each project
router.get('/:id', (req, res) => {
    const projectId = req.params.id
    membersModel.getMemberForProject(projectId)
                .then(members => {
                    res.status(200).json(members)
                    
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
})


module.exports = router;