const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          first_last_name: "Hong Tran",
          email: "baovuong@gmail.com",
          password: bcrypt.hashSync("ssdsf", 10)
        }
       
      ]);
    });
};
