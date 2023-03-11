const userController = require('../controllers/user.controller')

module.exports = app => {
    app.post('/api/signup/process', userController.signupProcess)

    app.post('/api/login/process',userController.loginProcess)
}