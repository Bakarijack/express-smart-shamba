
exports.indexPageRender = (req, res, next) => res.render('index')

exports.loginPageRender = (req, res, next) => res.render('login', { layout: 'auth'})

exports.signupPageRender = (req, res, next) => res.render('signup', { layout: 'auth'})


exports.dashboardPageRender = (req, res, next) => res.sendFile('public/Dashboard.html', { root: '.'})