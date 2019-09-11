
const restaurantDao = require('./restaurantDao')
const restaurantMapper = require('./restaurantMapper')
const restaurantMsg = require('./restaurantConstants').messages

function getRestaurants(req, res) {
   
    return restaurantDao.getRestaurants(req.query.availableMeals).then((result) => {
        return restaurantMapper.response_Mapping(restaurantMsg.OK, result);
    }).catch((err) => {
        return restaurantMapper.internalError();
    })
}


function getDish(req, res) {
    return restaurantDao.getDish(req.query.restaurant).then((result) => {
        return restaurantMapper.response_Mapping(restaurantMsg.OK, result);
    }).catch((err) => {
        return restaurantMapper.internalError();
    })
}

module.exports = {
    getRestaurants,
    getDish
}