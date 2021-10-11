const db = require('../../data/dbConfig')

const getSubCommentsOfAComment = (commentID) => {
    return db("subcomment as s")
            .where({ comment_ID: commentID })
            .join("users as u", "u.id", "s.user_ID" )
            .select(
                "s.comment_ID",
                "s.subcomment",
                "u.first_last_name as first_last_name",
                "u.email as user_email"
            )
}

const addSubComment = (newComment) => {
    return db("subcomment")
            .insert(newComment)
            .then(ids => ({ id: ids[0] }))
}

module.exports = {
    getSubCommentsOfAComment,
    addSubComment
}