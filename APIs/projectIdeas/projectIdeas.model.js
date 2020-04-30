const db = require('../../data/dbConfig');

function getProjects(){
    return db("projectIdeas")
}

function addProject(project){
    return db("projectIdeas")
            .insert(project)
            .then(ids => ({id: ids[0]}))
}

function getProjectById(id){
    return db("projectIdeas")
            .where({id: id})
            .then(projects => projects[0])
}

function updateProject(id, change){
    return db("projectIdeas")
            .where({id: id})
            .update(change)
}

function deleteProject(id){
    return db("projectIdeas")
            .where({id: id})
            .del()
}


module.exports = {
    getProjects,
    addProject,
    getProjectById,
    updateProject,
    deleteProject
    
}