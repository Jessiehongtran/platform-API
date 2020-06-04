
exports.up = function(knex) {
    return knex.schema.createTable('members', tbl => {
        tbl.increments();
        tbl
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projectIdeas')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        tbl.string('identity');
        tbl.string('why');
        tbl.string('role');
        tbl.string('profileUrl');
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('members')
};