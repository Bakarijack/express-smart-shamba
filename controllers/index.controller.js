
exports.indexPageRender = (req, res, next) => res.render('index')

exports.signupPageRender = (req, res, next) => res.sendFile('public/Login.html', {root: '.'})


exports.dashboardPageRender = (req, res, next) => res.sendFile('public/Dashboard.html', { root: '.'})