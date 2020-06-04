const db = require('../../data/dbConfig');


function addMember(member){
    return db("members")
            .returning("id")
            .insert(member)
            .then(ids => ({id: ids[0]}))
}

function getMemberForProject(projectId){
    return db("members")
            .where({project_id: projectId})
            .then(members => members)
}

module.exports = {
    addMember,
    getMemberForProject
}