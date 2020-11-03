exports.getLogin = (req, res, next) => {
    // isLoggedIn = req.get('Cookie')
    //     .split(';')[1]
    //     .trim()
    //     .split('=')[1] === 'true';
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isLoggedIn: false
    });
};

exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true;
    res.redirect('/');
};