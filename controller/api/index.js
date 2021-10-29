// api routes hub
const router = require('express').Router();
const userRoute = require('./userRoute');
const placeRoute = require('./placeRoute');

router.use('/users', userRoute);
router.use('/projects', placeRoute);

module.exports = router;