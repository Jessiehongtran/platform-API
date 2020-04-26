
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('first_last_name').notNullable();
        tbl.string('email').unique().notNullable();
        tbl.string('password').notNullable();
        tbl.boolean('is_host')
        tbl.boolean('is_member')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
