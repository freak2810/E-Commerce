const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isLoggedIn: req.session.isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    User.findById(req.session.user._id)
        .then(user => {
            req.session.isLoggedIn = true;
            req.user = user;
            req.session.save(err => {
                res.redirect('/');
            });
        })
        .catch(err => console.log(err));
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        res.redirect('/');
    });
};