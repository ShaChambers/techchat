//require User Post and Comment models
const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");
//Post belongs to User
//(Don't forget foreign key to connect models)
Post.belongsTo(User, {
  foreignKey: "user_id",
});
//User will have many Posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
//Comments belong to Post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

//Post can have many Comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});
//Comments belongs to Users
Comment.belongsTo(User, {
  foreignKey: "user_id",
});
//User hasMany Comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Post, Comment };
