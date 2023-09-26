const { StatusCodes } = require('http-status-codes');

const { Booking } = require('../models/index');
const {AppError, ValidationError} = require('../utils/errors/index');

class BookingRepository {
    async create(data){
        try{
            const booking = await Booking.create(data);
            return booking;
            catch (error) {
                if(error.name == 'SequelizeValidationError') {
                    throw new ValidationError(error);
                }
                throw new AppError(
                    'RepositoryError',   //name
                    'Cannot create Booking',  //message
                    'There was some issue creating the booking, please try again later', //explanation
                    StatusCodes.INTERNAL_SERVER_ERROR     //status code
                ); 
            }
        }
    }   
}

module.exports = BookingRepository;