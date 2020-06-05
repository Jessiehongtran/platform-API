const router = require('express').Router();
const cateModel = require('./category.model');


//GET all categories
router.get('/', (req, res) => {
    cateModel.getCates()
             .then(cates => {
                 res.status(200).json(cates)
             })
             .catch(err => {
                 res.status(500).json(err.message)
             })
})

//GET a category based on cateId
router.get('/:id', (req,res) => {
    const id = req.params.id
    cateModel.findCate({id: id})
             .then(cate => {
                 res.status(200).json(cate)
             })
             .catch(err => {
                 res.status(500).json(err.message)
             })
})

//POST a category
router.post('/', (req,res) => {
    const cate = req.body
    cateModel.addCate(cate)
             .then(id => {
                res.status(200).json(id)
             })
             .catch(err => {
                res.status(500).json(err.message)
             })
})

//DEL a category
router.delete('/delete/:id', (req,res) => {
    const id = req.params.id
    cateModel.findCate({id: id})
             .then(cate => {
                 if (cate){
                    cateModel.delCate({id: id})
                            .then(count => {
                                res.status(200).json({message: `Del ${count} category`})
                            })
                            .catch(err => {
                                res.status(500).json(err.message)
                            })
                 }
                 else {
                    res.status(401).json({message: "Category does not exist"})
                 }
             })
             .catch(err => {
                 res.status(500).json(err.message)
             })
    
})

//GET projects per cate
router.get('/projects/:id', (req,res) => {
    const id = req.params.id
    cateModel.getProjectsPerCate(id)
             .then(projects => {
                 res.status(200).json(projects)
             })
             .catch(err => {
                res.status(500).json(err.message)
            })

})

module.exports = router;