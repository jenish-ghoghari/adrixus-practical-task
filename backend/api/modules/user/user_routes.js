module.exports = function (router) {

    const userCtrl = require('./controller/User_ctrl'),
        middleware = require('../../../middleware/auth')

    router.post('/f/user/registration', middleware.authCheck, userCtrl.registration)
    router.post('/f/user/login', middleware.authCheck, userCtrl.login)
    router.get('/user/getuser', middleware.authCheck, userCtrl.getAllUser)
    return router
}