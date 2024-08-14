const User = require('./user');

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingredients: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        instructions: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preparationTime: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users', // Should match the table name
                key: 'id',
            },
            allowNull: false,
        },
    });

    return Recipe;
};
