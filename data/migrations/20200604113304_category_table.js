
exports.up = function(knex) {
    return knex.schema.createTable('category', tbl => {
        tbl.increments();
        tbl.string('category');
        tbl.integer('count_projects')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('category')
};

