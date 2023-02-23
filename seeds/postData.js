const { Post } = require("../models");

const postdata = [
  {
    title: "Katamari Damacy",
    content: "Start Small and roll-up everything to get bigger",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
