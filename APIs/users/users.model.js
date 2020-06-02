const db = require('../../data/dbConfig');

function getUsers(){
    return db("users")
}

function addUser(user){
    return db("users")
            .insert(user)
            .then(ids => ({id: ids[0]}))
}

function findBy(filter){
    return db("users")
           .where(filter)
}

function getUserById(id){
    return db("users")
            .where({id: id})
            .then(users => users[0])
}

module.exports = {
    getUsers,
    addUser,
    findBy,
    getUserById
}

