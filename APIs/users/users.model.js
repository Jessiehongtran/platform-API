const db = require('../../data/dbConfig');

function getUsers(){
    return db("users")
}

function addUser(user){
    return db("users")
            .returning("id")
            .insert(user)
            .then(ids => ids[0])
}


function updateUser(userId, change){
    return db("users")
            .where({ id: userId })
            .update(change)
           
}

function findBy(filter){
    console.log('filter', filter)
    return db("users")
           .where(filter)
}

function getUserById(id){
    return db("users")
            .where({id: id})
            .then(users => users[0])
}

function delUser(id){
    return db("users")
            .where({id: id})
            .del()
}


module.exports = {
    getUsers,
    addUser,
    findBy,
    getUserById,
    delUser,
    updateUser
}

