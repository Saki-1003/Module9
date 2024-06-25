'use strict'

const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')
const Like = require('./like')

async function init() {
  User.hasMany(Post,{foreignKey: "UserID"});
  Post.belongsTo(User, {foreignKey: "UserID"});

  User.hasMany(Comment,{foreignKey: "UserID"});
  Comment.belongsTo(User, {foreignKey: "UserID"});

  User.hasMany(Like,{foreignKey: "UserID"});
  Like.belongsTo(User,{foreignKey: "UserID"});

  Post.hasMany(Comment,{foreignKey: "PostID"});
  Comment.belongsTo(Post,{foreignKey: "PostID"});

  Post.hasMany(Like,{foreignKey: "PostID"});
  Like.belongsTo(Post,{foreignKey: "PostID"});

  await User.sync()
  await Post.sync()
  await Comment.sync()
  await Like.sync()
};
init();

module.exports = {
  User,
  Post,
  Comment,
  Like 
}