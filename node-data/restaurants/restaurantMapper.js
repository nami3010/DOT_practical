// ===============================Load Internal Modules==================================================================

const restaurantCode = require('./restaurantConstants').http_codes
const restaurantMsg = require('./restaurantConstants').messages

// ===============================================Load Modules End====================================================================


/**update,get,delete  category & subCategory response
 * 
 * @param {*Object} result response updated data of category and subCategory
 * @param {*string} message msg for perticular query
 */
function response_Mapping(message, result) {
    var responseObj = {
        "responsecode": restaurantCode.OK,
        "responseMessage": message,
        "result": result

    }
    return responseObj
}

/**Bed Request Response
 * 
 * @param {*string} message response message
 */
function bedRequestRes(message) {
    var responseObj = {
        "responsecode": restaurantCode.BADREQUEST,
        "responseMessage": message,
    }
    return responseObj;
}

/**for unAuthorized access
 * 
 * @param {*string} message response message
 */
function unAuthorized() {
    var responseObj = {
        "responsecode": restaurantCode.UNAUTHORIZED,
        "responseMessage": restaurantMsg.UNAUTHACCESS,
    }
    return responseObj;
}

/**Permission Denied Response */
function forBidden() {
    var responseObj = {
        "responsecode": restaurantCode.FORBIDDEN,
        "responseMessage": restaurantMsg.PERMISSIONDENIED
    }
    return responseObj;
}

/**Data Not Found response */
function dataNotFound() {
    var responseObj = {
        "responsecode": restaurantCode.DATANOTFOUND,
        "responseMessage": restaurantMsg.DATANOTFOUND
    }
    return responseObj;
}

/**for handle internal server error*/
function internalError() {
    var responseObj = {
        "responsecode": restaurantCode.INTERNALERROR,
        "responseMessage": restaurantMsg.INTERNALERROR
    }
    return responseObj;
}
// ========================================EXPORT Module============================================================================

module.exports = {

    response_Mapping,/**for get restaurant details*/

    bedRequestRes,/**Bed Request Response */

    dataNotFound,/**Data Not Found response */

    unAuthorized,/**for unAuthorized access*/

    forBidden,  /**Permission Denied Response */

    internalError,/**for handle internal server error */

}