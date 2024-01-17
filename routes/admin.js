const express=require('express')
const path=require('path')

const rootDir=require('../util/path')

const router=express.Router()

router.get('/add-product', (req, res, next)=>{
    
    res.sendFile(path.join(rootDir, 'views' , 'add-product.html'))
})

router.get('/contact', (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views' , 'contact.html'))
})

router.post('/product' , (req,res,next)=>{                  //add-product possible too since diferrent methods
    console.log(req.body)
    console.log('name='+req.body.title+' size='+req.body.size)
    res.redirect('/')
})
router.post('/success' , (req,res,next)=>{                  //add-product possible too since diferrent methods
    res.sendFile(path.join(rootDir, 'views' , 'success.html'))
})

module.exports=router