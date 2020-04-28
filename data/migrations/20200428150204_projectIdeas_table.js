
exports.up = function(knex) {
    return knex.schema.createTable('projectIdeas', tbl => {
        tbl.increments();
        tbl.string('project_name');
        tbl.string('category');
        tbl.string('target_user');
        tbl.string('impact');
        tbl.string('human_resources');
        tbl.integer('join_count')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projectIdeas')
};