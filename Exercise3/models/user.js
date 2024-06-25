const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model { }

User.init({
  UserId: {
    type: DataTypes.INTEGER, allowNull: false, autoIncrement:true, primaryKey: true
  },
  Name: {
    type: DataTypes.STRING, allowNull: false, 
  },
  Age: {
    type: DataTypes.INTEGER, allowNull: false, 
  },
  Gender: {
    type: DataTypes.STRING, allowNull: false,
  },
  Email: {
    type: DataTypes.STRING, allowNull: false, 
    unique: true
  }},
  {
  sequelize: sequelizeInstance, 
  modelName: 'users', 
  }
)
module.exports = User;