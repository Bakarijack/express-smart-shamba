
exports.indexPageRender = (req, res, next) => res.render('index')

exports.loginPageRender = (req, res, next) => res.render('login', { layout: 'auth'})

exports.signupPageRender = (req, res, next) => res.render('signup', { layout: 'auth'})


exports.dashboardPageRender = (req, res, next) => res.render('client_home', { layout: false })

exports.registerLandPageRender = (req, res, next) => res.render('register_land', { layout: false })