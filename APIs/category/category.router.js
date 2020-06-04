const router = require('express').Router();
const cateModel = require('./category.model');


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