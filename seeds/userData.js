const { User } = require("../models");

const userdata = [
  {
    name: "prince",
    email: "prince@email.com",
    password: "password123",
  },
];

const seedUsers = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
