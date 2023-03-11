
exports.indexPageRender = (req, res, next) => res.sendFile('index.html')

exports.signupPageRender = (req, res, next) => res.sendFile('public/Login.html', {root: '.'})


exports.dashboardPageRender = (req, res, next) => res.sendFile('public/Dashboard.html', { root: '.'})