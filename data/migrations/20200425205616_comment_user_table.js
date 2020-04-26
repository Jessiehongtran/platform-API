
exports.up = function(knex) {
    return knex.schema.createTable('comment_user', tbl => {
        tbl.increments();
        tbl
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        tbl.string('comment', 5000);
        tbl.time('created_at');
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('comment_user')
};
