const mres = require('../constant/responseHandler'),
    resStatus = require('../constant/statusCodes'),
    resMessage = require('../constant/responseMessage'),
    jwt = require('jsonwebtoken')

module.exports = {
    authCheck: authCheck
}

function authCheck(req, res, next) {
    var no_auth = req.path.split('/f/').length > 1 ? ((req.headers['authorization']) ? false : true) : false
    if (!no_auth) {
        Authorized(req, res, next);
    } else {
        next()
    }
}

function Authorized(req, res, next) {
    const authHeader = req.headers["authorization"]
    if (authHeader !== undefined) {
        const authtoken = authHeader.split(" ")[1]
        // Verify the token using jwt.verify method
        jwt.verify(authtoken, 'demo@123', function (err, decoded) {
            req.user = decoded;
            if (err) {
                console.log("Error is from here : " + JSON.stringify(err))
                return mres(res, resStatus.AUTH_CODE, resMessage.INVALID_TOKEN);
            }
            next();
        });
    } else {
        return mres(res, resStatus.AUTH_CODE, resMessage.TOKEN_ERROR);
    }
}