const path=require('path')
const rootDir=require('../util/path')

exports.postSuccess= (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views' , 'success.html'))
}