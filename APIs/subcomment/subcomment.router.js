const router = require("express").Router();
const subcommentModel = require('./subcomment.model');

//GET comments of a project
router.get('/comment/:commentID', async (req, res) => {
    const commentID = req.params.commentID
    try {
        const subcomments = await subcommentModel.getSubCommentsOfAComment(commentID)
        console.log('subcomments', subcomments)
        res.status(200).json(subcomments)
    } catch (err){
        console.log(err.message)
    }
})

//POST a comment
router.post('/', async (req, res) => {
    const newComment = req.body
    try {
        const response = await subcommentModel.addSubComment(newComment)
        res.status(200).json(response)
    } catch (err){
        console.log(err.message)
    }
})

module.exports = router;
