
exports.up = function(knex) {
    return knex.schema.createTable('projectArchive', tbl => {
        tbl.increments();
        tbl.string('project_name');
        tbl.string('category');
        tbl.string('target_user');
        tbl.string('impact');
        tbl.string('human_resources');
        tbl.integer('join_count');
        tbl.string('description');
        tbl.integer('upvote')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projectArchive')
};
