const landController = require('../controllers/lands.controller')

module.exports = app => {
    app.post('/api/register-land/process', landController.register_landProcess)
}