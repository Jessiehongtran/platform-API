
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_project').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_project').insert([
        {
          id: 1, 
          user_id: 1,
          project_id: 1,
          is_host: true,
          is_member: false
        },
        {
          id: 2, 
          user_id: 1,
          project_id: 2,
          is_host: true,
          is_member: false
        },
        {
          id: 3, 
          user_id: 1,
          project_id: 3,
          is_host: true,
          is_member: false
        },
        {
          id: 4, 
          user_id: 1,
          project_id: 4,
          is_host: true,
          is_member: false
        },
        {
          id: 5, 
          user_id: 1,
          project_id: 5,
          is_host: true,
          is_member: false
        },
        {
          id: 6, 
          user_id: 1,
          project_id: 6,
          is_host: true,
          is_member: false
        },
        {
          id: 7, 
          user_id: 1,
          project_id: 7,
          is_host: true,
          is_member: false
        },
        {
          id: 8, 
          user_id: 1,
          project_id: 8,
          is_host: true,
          is_member: false
        },
        {
          id: 9, 
          user_id: 1,
          project_id: 9,
          is_host: true,
          is_member: false
        },
        {
          id: 10, 
          user_id: 1,
          project_id: 10,
          is_host: true,
          is_member: false
        },
        {
          id: 11, 
          user_id: 1,
          project_id: 11,
          is_host: true,
          is_member: false
        },
        {
          id: 12, 
          user_id: 1,
          project_id: 12,
          is_host: true,
          is_member: false
        },
        {
          id: 13, 
          user_id: 1,
          project_id: 13,
          is_host: true,
          is_member: false
        },
        {
          id: 14, 
          user_id: 1,
          project_id: 14,
          is_host: true,
          is_member: false
        },
      ]);
    });
};
