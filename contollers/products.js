const path=require('path')

const rootDir=require('../util/path')
const Product=require('../model/product')

exports.getAddProduct = (req, res, next)=>{
    let show=Product.showAll()
    console.log(JSON.parse(show))
    res.sendFile(path.join(rootDir, 'views' , 'add-product.html'))
}

exports.postAddProduct= (req,res,next)=>{    
     const product=new Product(req.body.title)
     console.log(product)
     product.save()
     //  console.log(req.body)              
     //  console.log('name='+req.body.title+' size='+req.body.size)
     //console.log(proAll)
     res.redirect('/')
}