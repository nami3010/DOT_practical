// ========================================Load Internal Modules========================================================

const restaurantService = require('./restaurantService')

// ==========================================End Load Modules=============================================================



function getRestaurants(req, res) {
    return restaurantService.getRestaurants(req, res)
        .then((result) => {
            return result;
        })
}



function getDish(req, res) {
    return restaurantService.getDish(req, res)
        .then((result) => {
            return result;
        })
}
// ======================================Export Modules=================================================================

module.exports = {
    getRestaurants,/**calling service getRestaurants function  */

    getDish
}