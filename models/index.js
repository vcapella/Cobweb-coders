const User = require('./User');
const Place = require('./Place');
const Review = require('./review');

Review.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id',
})

module.exports = { User, Place, Review }