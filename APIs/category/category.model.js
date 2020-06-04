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
    console.log(cate)
    return db("category")
            .returning("id")
            .insert(cate)
            .then(ids => ({id: ids[0]}))
}


module.exports = {
    getProjectsPerCate,
    getCates,
    addCate
}