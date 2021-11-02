const withAuth = (req, res, next) => {
    if (req.session.logged_in) {
      // do not allow user to post, this response should be triggered when hitting 'submit' for reviews on the listing page
      // show logged in header
    } else {
      //post review
    }
};

module.exports = withAuth;