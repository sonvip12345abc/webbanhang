const express=require('express')
const router=express.Router();

const{newOrder}=require('../controllers/orderController')

const{isAuthenticateUSer,authorizeRoles}=require('../middlewares/auth')

router.route('/order.new').post(isAuthenticateUSer,newOrder);

module.exports=router;