const Sequelize = require('sequelize');
const sequelize = require('../config/db'); // Ensure this file correctly exports an instance of Sequelize

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Recipe = require('./recipe')(sequelize, Sequelize.DataTypes);

User.hasMany(Recipe, { foreignKey: 'userId' });
Recipe.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, Recipe };
