const db = require('../../data/dbConfig');

function getProjectsPerCate(cateId){
    console.log('cateId', cateId)
    return db("category as c")
            .where("c.id", cateId)
            .join("projectIdeas as p", "p.category_id", "c.id" )           
}



module.exports = {
    getProjectsPerCate
}