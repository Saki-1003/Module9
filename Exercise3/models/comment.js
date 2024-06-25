const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model { }

Comment.init({
  CommentId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
  },
  TextField: {
    type: DataTypes.STRING, allowNull: false, 
  }},
  {
  sequelize: sequelizeInstance, modelName: 'comments', 
  timestamps: true, freezeTableName: true
  }
)
module.exports = Comment;