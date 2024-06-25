const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model { }

Like.init({
  LikeId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
  }},
  {
  sequelize: sequelizeInstance, 
  modelName: 'likes', 
  }
)
module.exports = Like;