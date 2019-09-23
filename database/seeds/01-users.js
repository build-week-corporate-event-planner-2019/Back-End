const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // users - id, email, password, name, company, role
  return knex("users").insert([
    {
      id: 1,
      email: "test@example.com",
      password: bcrypt.hashSync("test", 14),
      name: "John Smith",
      company: "Tester Inc.",
      role: "tester",
    },
    {
      id: 2,
      email: "tester@example.com",
      password: bcrypt.hashSync("test", 14),
      name: "Jane Doe",
      company: "Tester Inc.",
      role: "front desk",
    },
  ]);
};
