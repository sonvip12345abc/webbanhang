const express = require('express')
const router = express.Router();

const {
    processPayment,
    sendStripApi
} = require('../controllers/paymentController')

const { isAuthenticatedUser } = require('../middlewares/auth')

//  Payment routes
router.route('/payment/process').post(isAuthenticatedUser, processPayment);
router.route('/stripeapi').get(isAuthenticatedUser, sendStripApi);

module.exports = router