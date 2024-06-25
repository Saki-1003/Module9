const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Post extends Model { }

Post.init({
  PostId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
  },
  Title: {
    type: DataTypes.STRING, allowNull: false, 
  },
  Description: {
    type: DataTypes.STRING, allowNull: false,
  },
  Image: {
    type: DataTypes.STRING, allowNull: true, 
  }},
  {
  sequelize: sequelizeInstance, 
  modelName: 'posts', 
  }
)
module.exports = Post;