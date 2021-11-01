const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      // do not allow user to post, this response should be triggered when hitting 'submit' for reviews on the listing page
    } else {
      //post review
    }
};

module.exports = withAuth;