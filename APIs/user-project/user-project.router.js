const router = require('express').Router();
const userProjectModel = require('./user-project.model');
const projectModel = require('../projectIdeas/projectIdeas.model');

//POST a user into a project
router.post('/', (req,res) => {
    const user_project_ids = req.body
    userProjectModel.addUserIntoProject(user_project_ids)
                    .then(id => {
                        res.status(200).json({message: "Added user into the project"})
                    })
                    .catch(err => {
                        res.status(500).json(err.message)
                    })
})


//GET projects based on user_id
router.get('/projects/:user_id', (req,res) => {
    const user_id = req.params.user_id
    console.log('user_id', user_id)
    userProjectModel.getProjectsOfUser(user_id)
                    .then(projects => {
                        res.status(200).json(projects)
                    })
                    .catch(err => {
                        res.status(500).json(err.message)
                    })
    
})

//GET user project
router.get('/', (req, res) => {
    userProjectModel.getUserProject()
                    .then(userProjects => {
                        res.status(200).json(userProjects)
                    })
                    .catch(err => {
                        res.status(500).json(err.message)
                    })
})

//GET all people in the project
router.get('/:id/people', (req, res) => {
    const id = req.params.id
    projectModel.getProjectById(id)
                .then(project => {
                    if (project){
                        userProjectModel.getAllPeopleOfProject(id)
                                        .then(users => {
                                            res.status(200).json(users)
                                        })
                                        .catch(err => {
                                            res.status(500).json(err.message)
                                        })
                                        }
                                        else {
                                            res.status(500).json({message: "the project does not exist yet"})
                                        }
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
    
})

//GET host of a project
router.get('/:id/host', (req, res) => {
    const id = req.params.id
    projectModel.getProjectById(id)
                .then(project => {
                    if (project){
                        userProjectModel.getHostOfProject(id)
                                        .then(host => {
                                            if (host){
                                            res.status(200).json(host)
                                            }
                                            else {
                                            res.status(200).json({message: "the project does not have a host yet"}) 
                                            }
                                        })
                                        .catch(err => {
                                            res.status(500).json(err.message)
                                        })
                                        }
                                        else {
                                            res.status(500).json({message: "the project does not exist yet"})
                                        }
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
   
})


//GET members of a project
router.get('/:id/members', (req, res) => {
    const id = req.params.id
    projectModel.getProjectById(id)
                .then(project => {
                    if (project){
                        userProjectModel.getMembersOfProject(id)
                                        .then(members => {
                                            if (members){
                                            res.status(200).json(members)
                                            }
                                            else {
                                            res.status(200).json({message: "the project does not have a member yet"}) 
                                            }
                                        })
                                        .catch(err => {
                                            res.status(500).json(err.message)
                                        })
                                        }
                                        else {
                                            res.status(500).json({message: "the project does not exist yet"})
                                        }
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
   
})



module.exports = router;