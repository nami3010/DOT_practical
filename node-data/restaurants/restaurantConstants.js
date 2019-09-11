
http_codes = {
    CREATED: 201,
    OK: 200,
    UNAUTHORIZED: 401,
    DATANOTFOUND: 404,
    FORBIDDEN: 403,
    BADREQUEST: 400,
    INTERNALERROR: 501
}

messages = {
    INVALIDNAME: "Name Is Empty Or Invalid.",
    INTERNALERROR: "Internal Server Error",
    OK: "Ok",
    DATANOTFOUND: "Data Not Found",
    PERMISSIONDENIED: "Permission Denied",
    UNAUTHACCESS: "Unauthorize Access",
    DELETED: "Removed Successfully",
    INVALIDID: "Invalid Id"
}

// =====================================================EXPORT ========================================================================  

module.exports = {
    http_codes,
    messages
  
}