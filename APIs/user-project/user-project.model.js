const db = require('../../data/dbConfig');

function addUserIntoProject(user_project_ids){
    return db("user_project")
            .insert(user_project_ids)
           
}


function getProjectsOfUser(userId){
    return db("user_project as up")
            .where({user_id: userId})
            .join("projectIdeas as p", "p.id", "up.project_id")
            .select(
                "p.*"
            )
            
}

function getUserProject(){
    return db("user_project")
}

function getAllPeopleOfProject(projectId){
    return db("user_project as up")
            .where({project_id: projectId})
            .join("users as u", "u.id", "up.user_id")
            .join("projectIdeas as p", "p.id", "up.project_id")
            .join("category as c", "c.id", "p.category_id")
            .select(
                "p.project_name",
                "c.category",
                "p.target_user",
                "p.impact",
                "p.join_count",
                "u.first_last_name",
                "u.email",
                "up.is_host",
                "up.is_member"
                
            )
}

function getHostOfProject(projectId){
    return db("user_project as up")
            .where("up.project_id", projectId)
            .where("up.is_host", true)
            .join("users as u", "u.id", "up.user_id")
            .join("projectIdeas as p", "p.id","up.project_id")
            .select(
                "p.project_name",
                "p.category",
                "p.target_user",
                "p.impact",
                "p.join_count",
                "u.first_last_name",
                "u.profile_picture",
                "u.email"
        
        )
}

function getMembersOfProject(projectId){
    return db("user_project as up")
            .where("up.project_id", projectId)
            .where("up.is_member", true)
            .join("users as u", "u.id", "up.user_id")
            .join("projectIdeas as p", "p.id", "up.project_id")
            .select(
                "p.project_name",
                "p.category",
                "p.target_user",
                "p.impact",
                "p.join_count",
                "u.first_last_name",
                "u.email"
        
        )
}

module.exports = {
    addUserIntoProject,
    getUserProject,
    getAllPeopleOfProject,
    getHostOfProject,
    getMembersOfProject,
    getProjectsOfUser,
}
 