const router = require("express").Router();
const { User, Review, Place } = require("../../models");

// create user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// login endpoint
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// logout endpoint
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// view all reviews with matching place id, and include the name of user who made it
// router.get('/reviews/:id', async (req, res) => {
//     const viewReviews = await Review.findAll(req.params.id, {
//         where: {
//             place_id: req.params.id
//         },
//         include: [
//           {
//             model: User,
//             attributes: ['name'],
//           },
//         ],
//     });

//     try{
//         if (!viewReviews){
//             res.status(400).json({message: 'No review found with this id!'})
//             return;
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// delete review (not part of MVP but can add later)
// router.delete('/reviews/:id', async (req, res) => {
//     try{
//         const reviewData = await Review.destroy({
//             where: {
//               id: req.params.id,
//               user_id: req.session.user_id,
//             },
//         });

//         if (!reviewData){
//             res.status(404).json({message: 'No review found with this id!'})
//             return;
//         }

//         res.status(200).json(reviewData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
module.exports = router;
