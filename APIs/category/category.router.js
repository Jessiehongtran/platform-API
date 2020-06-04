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

//GET projects per cate
router.get('/:id', (req,res) => {
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