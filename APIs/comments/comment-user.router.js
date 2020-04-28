const router = require('express').Router();
const commentModel = require('./comment-users.model');

//GET all comments
router.get('/', (req,res) => {
    commentModel.getComments()
                .then(comments => {
                    res.status(200).json(comments)
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
})


//GET comments for each project
router.get('/:id', (req,res) => {
    const id = req.params.id
    commentModel.getCommentOfProject(id)
                .then(comments => {
                    res.status(200).json(comments)
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
})


//POST a comment
router.post('/', (req,res) => {
    const comment = req.body
    commentModel.addComment(comment)
                .then(id => {
                    res.status(200).json(id)
                })
                .catch(err => {
                    res.status(500).json(err.message)
                })
})

module.exports = router;



















