const path=require('path')
const rootDir=require('../util/path')

exports.getAddProduct = (req, res, next)=>{
    
    res.sendFile(path.join(rootDir, 'views' , 'add-product.html'))
}

exports.postAddProduct= (req,res,next)=>{    
    console.log(req.body)              
    console.log('name='+req.body.title+' size='+req.body.size)
    res.redirect('/')
}