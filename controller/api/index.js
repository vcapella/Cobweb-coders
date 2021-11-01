// api routes hub
const router = require("express").Router();
const userRoute = require("./userRoute");
const reviewRoute = require("./reviewRoute");

router.use("/users", userRoute);
router.use("/reviews", reviewRoute);

module.exports = router;
