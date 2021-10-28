const sequelize = require('../config/connection');
const { Place, User } = require('../models');

const userData = require('./userData.json');
const placeData = require('./placesData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const place of placeData) {
      await Place.create({
        ...place,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();