const router = require('express').Router();
const projectModel = require('./projectIdeas.model');
const protected = require('../../middlewares/restricted-middleware')

//GET all projects
router.get('/', (req,res) => {
    projectModel.getProjects()
                .then(projects => {
                    res.status(200).json(projects)
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
})

//POST a project
router.post('/', (req, res) => {
    const project = req.body
    projectModel.addProject(project)
                .then(id => {
                    res.status(200).json(id)
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
})

//GET a project by id
router.get('/:id', (req,res) => {
    const id = req.params.id
    projectModel.getProjectById(id)
                .then(project => {
                    res.status(200).json(project)
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
})

//UPDATE a project, can update join_count or any info through here
router.patch('/edit/:id', (req, res) => {
    const change = req.body;
    const id = req.params.id;
    projectModel.getProjectById(id)
                .then(project => {
                    if (project){
                        projectModel.updateProject(id, change)
                                    .then(count => {
                                        res.status(200).json({messgae: `updated ${count} project`})
                                    })
                                    .catch(err => res.status(500).json(err.message))
                    }
                    else {
                        res.status(404).json({message: "project does not exist"})
                    }
                })
})

//DELETE a project
router.delete('/delete/:id', (req,res) => {
    const id = req.params.id;
    projectModel.getProjectById(id)
                .then(project => {
                    if (project){
                        projectModel.deleteProject(id)
                                    .then(count => {
                                        res.status(200).json({messgae: `deleted ${count} project`})
                                    })
                                    .catch(err => res.status(500).json(err.message))
                    }
                    else {
                        res.status(404).json({message: "project does not exist"})
                    }
                })
} )

module.exports = router;