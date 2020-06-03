const db = require('../../data/dbConfig');


function addMember(member){
    return db("members")
            .returning("id")
            .insert(member)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    addMember
}