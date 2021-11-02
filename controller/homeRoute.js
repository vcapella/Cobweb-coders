const router = require("express").Router();
const { User, Place, Review } = require("../models");

const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.redirect("/homepage");
});

router.get("/homepage", async (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/search/:state", async (req, res) => {
  console.log(decodeURI(req.params.state));
  try {
    const placesData = await Place.findAll({
      where: {
        state: decodeURI(req.params.state),
      },
      limit: 5,
    });
    console.log(placesData);
    const places = placesData.map((place) => place.get({ plain: true }));

    const place1 = places[0].id;

    res.render("searchpage", { 
      places,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/listings/:id", async (req, res) => {
  try {
    const placeData = await Place.findByPk(req.params.id, {
      include: [{ model: Review, include: [User] }],
    });

    const place = placeData.get({ plain: true });

    console.log(place);

    res.render("listingpage", { 
      place,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/login", (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect("/");
//     return;
//   }

//   res.render("login");
// });

module.exports = router;
