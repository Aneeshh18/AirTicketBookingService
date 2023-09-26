const {StatusCodes} = require('http-status-codes');


class ServiceError extends Error {
    constructor(
        message = 'Something Went Wrong',
        explanation = 'Service layer error',
        statusCode = StatusCodes.1NTERNAL_SERVER ERROR
    ){
        this. name = 'ServiceError';
        this.message = message;
        this.explanation = explanation;
        this. statusCode = statusCode;  
    }
}


module.exports = ServiceError;