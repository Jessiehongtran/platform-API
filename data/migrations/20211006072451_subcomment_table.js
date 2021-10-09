
exports.up = function(knex) {
  return knex.schema.createTable('subcomment', tbl => {
      tbl.increments()
      tbl.integer('comment_ID')
         .unsigned()
         .references('id')
         .inTable('comment_user')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.integer('user_ID')
         .unsigned()
         .references('id')
         .inTable('users')
         .onDelete('CASCADE')
         .onUpdate('CASCADE')
      tbl.string('subcomment')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('subcomment')
};
