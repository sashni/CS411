const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout(); // takes the user id out of our cookie
    res.redirect('/');
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google redirect
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
    res.redirect('/profile');

});


module.exports = router;
