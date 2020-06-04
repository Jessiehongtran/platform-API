const db = require('../../data/dbConfig');

function getProjectsPerCate(cateId){
    return db("category as c")
            .where("c.id", cateId)
            .join("projectIdeas as p", "p.category_id", "c.id" )           
}

function getCates(){
    return db("category")
}

function addCate(cate){
    return db("category")
            .returning("id")
            .insert(cate)
            .then(ids => ({id: ids[0]}))
}

function delCate(cateId){
    return db("category")
            .where(cateId)
            .del()
}

function findCate(filter){
    return db("category")
            .where(filter)
            .then(cates => cates[0])
}


module.exports = {
    getProjectsPerCate,
    getCates,
    addCate,
    delCate,
    findCate
}