const indexController = require('../controllers/index.controller')

module.exports = app => {
    app.get('/', indexController.indexPageRender)
    
    app.get('/signup', indexController.signupPageRender)

    app.get('/dashboard',indexController.dashboardPageRender)

}