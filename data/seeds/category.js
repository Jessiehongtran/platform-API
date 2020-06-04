
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {id: 1, category: 'Web dev'},
        {id: 2, category: 'Mobile'},
        {id: 3, category: 'Game dev'},
        {id: 4, category: 'Data science'},
        {id: 5, category: 'Machine learning'}
      ]);
    });
};
