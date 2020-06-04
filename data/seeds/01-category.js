
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {
          id: 1, 
          category: 'Web dev',
          count_projects: 0
        },
        {
          id: 2, 
          category: 'Mobile',
          count_projects: 0
        },
        {
          id: 3, 
          category: 'Game dev',
          count_projects: 0
        },
        {
          id: 4, 
          category: 'Data science',
          count_projects: 0
        },
        {
          id: 5, 
          category: 'Machine learning',
          count_projects: 0
        }
      ]);
    });
};
