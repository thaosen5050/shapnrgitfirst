const express=require('express')

const router=express.Router()

router.get('/add-product', (req, res, next)=>{
    console.log('In middleware5')
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">submit</button></form>')
})

router.post('/product' , (req,res,next)=>{                  //add-product possible too since diferrent methods
    console.log(req.body)
    console.log('name='+req.body.title+' size='+req.body.size)
    res.redirect('/')
})

module.exports=router