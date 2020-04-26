const db = require('../../data/dbConfig');

function getComments(){
    return db("comment_user as c")
            .join("users as u", "c.user_id", "u.id")
            .select(
                "u.first_last_name",
                "c.comment",
                "c.created_at"
            )
}

function addComment(comment){
    return db("comment_user")
            .insert(comment)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    getComments,
    addComment
}