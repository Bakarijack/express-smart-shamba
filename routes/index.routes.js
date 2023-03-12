const indexController = require('../controllers/index.controller')

module.exports = app => {
    app.get('/', indexController.indexPageRender)

    app.get('/login',indexController.loginPageRender)
    
    app.get('/signup', indexController.signupPageRender)

    app.get('/client-dashboard',indexController.dashboardPageRender)

}