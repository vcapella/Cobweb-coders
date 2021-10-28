const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Place extends Model {}

Place.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        review_id: {
            type: DataTypes.TEXT,
            references: {
                model: 'review',
                key: 'id',
            },    
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'place',
    }
);

module.exports = Place;