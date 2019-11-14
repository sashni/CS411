const router = require('express').Router();

const authCheck = (req, res, next) => {
    if (!req.user) { // if the user is not logged in, redirect them to log in
        res.redirect('/auth/login');
    } else { // the user is logged in!
        next(); // use next piece of middleware
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile', {
        user: req.user.username
    });
});

module.exports = router;
