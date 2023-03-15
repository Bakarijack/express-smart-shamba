const landController = require('../controllers/lands.controller')

module.exports = app => {
    app.post('/api/register-land/process', landController.register_landProcess)

    app.post('/api/update-td-verification', landController.update_td_verification)
}