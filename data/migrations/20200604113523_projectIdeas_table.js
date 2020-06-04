
exports.up = function(knex) {
    return knex.schema.createTable('projectIdeas', tbl => {
        tbl.increments();
        tbl.string('idea').notNullable();
        tbl.string('project_name');
        tbl
          .integer('category_id')
          .unsigned()
          .references('id')
          .inTable('category')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
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

