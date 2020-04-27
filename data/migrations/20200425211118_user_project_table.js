
exports.up = function(knex) {
    return knex.schema.createTable('user_project', tbl => {
        tbl.increments();
        tbl
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projectIdeas')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        tbl.boolean('is_host').notNullable();
        tbl.boolean('is_member').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_project')
};
