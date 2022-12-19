module.exports = function(express){
    const route = express.Router()

    require('./modules/user/user_routes')(route);

    return route
}