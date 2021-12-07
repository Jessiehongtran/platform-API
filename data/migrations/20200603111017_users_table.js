
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('first_last_name').notNullable();
        tbl.string('email').unique().notNullable();
        tbl.string('password').notNullable();
        tbl.string('profile_picture');
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};




