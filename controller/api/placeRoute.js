const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Place, Review } = require('../../models');

// view results by state
router.get('/places', async (req, res) => {
    try{
        const placesData = await Place.findAll({
            where: {
                state: req.params.state
            },
        });

        const places = placesData.map((place) => place.get(req.params.id, { plain: true }));

        // replace 'places' with results page handlebar name
        res.render('places', { places })

    } catch (err) {
        res.status(500).json(err);
    }
})

// view single place and reviews associated with it
router.get('/places/:id', async (req, res) => {
    try{
        const placeData = await Place.findAll(req.params.id, {
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Review,
                    attributes: [
                        'id',
                        'review_content',
                        'user_id',
                    ],
                },
            ],
        });

        const place = placeData.get({ plain: true });
        // replace 'place' with single place page handlebar name
        res.render('place', { place });

    } catch (err) {
        res.status(500).json(err);
    }
});

// view upvotes and downvotes

// view reviews (doesn't need auth)
router.get('/reviews', (req, res) => {

})

// (add auth to add review)
router.post('/reviews', withAuth, async (req, res) => {
    try{

    } catch (err) {

    }
})

module.exports = router;
