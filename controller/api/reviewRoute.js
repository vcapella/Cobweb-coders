const router = require('express').Router();
const { User, Place, Review } = require('../../models');

router.post('/', (req, res) => {
console.log(req.body)
	try{
		const review = Review.create({
			review_content:req.body.review_content,
			user_id:req.session.user_id,
			place_id:req.body.place_id
		})

		res.json(review)

	}catch(err){
		res.status(500).json(err)
	}

})


module.exports = router;