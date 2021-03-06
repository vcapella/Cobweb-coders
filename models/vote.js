const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        upvote: {
            type: DataTypes.BOOLEAN,
        },
        down_vote: {
            type: DataTypes.BOOLEAN,
        },
        place_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'place',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote',
    }
);

module.exports = Vote;