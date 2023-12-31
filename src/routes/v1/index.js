const express = require('express');

const {BookingController}  = require('../../controller/index');
const {createChannel} = require('../../utils/messageQueue');

const router = express.Router();

const bookingController = new BookingController();

router.get('/info', (req, res) => {
    return res.json({message: 'Response from routers'})
})
router.post('/bookings', bookingController.create);
router.post('/publish', bookingController.sendMessageToQueue);

module.exports = router;