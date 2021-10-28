const sequelize = require('../config/connection');
const { Place, User } = require('../models');

const userData = require('./userData.json');
const placeData = require('./placesData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    await Place.bulkCreate(placeData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();