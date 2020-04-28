const db = require('../../data/dbConfig');

function getComments(){
    return db("comment_user as c")
            .join("users as u", "c.user_id", "u.id")
            .join("projectIdeas as p", "p.id", "c.project_id")
            .select(
                "p.project_name",
                "u.first_last_name",
                "c.comment",
                "c.created_at"
            )
}

function getCommentOfProject(id){
    return db("comment_user as c")
            .where({project_id:id})
            .join("users as u", "c.user_id", "u.id")
            .join("projectIdeas as p", "p.id", "c.project_id")
            .select(
                "p.project_name",
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
    getCommentOfProject,
    addComment
}