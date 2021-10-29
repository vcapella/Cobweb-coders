const User = require('./User');
const Place = require('./Place');
const Review = require('./review');
const Vote = require('./vote');

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Place, {
    foreignKey: 'place_id',
});

Place.hasMany(Review, {
    foreignKey: 'place_id',
    onDelete: 'CASCADE'
});

Vote.belongsTo(Place, {
    foreignKey: 'place_id'
});

Place.hasMany(Vote, {
    foreignKey: 'place_id',
    onDelete: 'CASCADE'
})

module.exports = { User, Place, Review }