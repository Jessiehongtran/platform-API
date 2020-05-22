exports.up = function(knex) {
    return knex.schema.createTable('projectIdeas', tbl => {
        tbl.increments();
        tbl.string('idea');
        tbl.string('project_name');
        tbl.string('banner_color')
        tbl.integer('banner_font_size')
        tbl.string('banner_font_family')
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
    return knex.schema.dropTableIfExists('projectIdeas')
};
