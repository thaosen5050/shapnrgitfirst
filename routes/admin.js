const express=require('express')
const path=require('path')


const rootDir=require('../util/path')
const productController= require('../contollers/products')
const contactController = require('../contollers/contactUs')
const successController = require('../contollers/success')

const router=express.Router()

router.get('/add-product', productController.getAddProduct)

router.get('/contact', contactController.getContact)

//add-product possible too since diferrent methods
router.post('/product' , productController.postAddProduct)

//add-product possible too since diferrent methods
router.post('/success' , successController.postSuccess )

module.exports=router