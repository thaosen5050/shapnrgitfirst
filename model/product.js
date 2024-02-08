const fs=require('fs')
const path=require('path')

const rootDir=require('../util/path')
const p=path.join(rootDir, 'data' , 'products.json')

const getFileData=()=>{
    return fs.readFileSync(p, (err,data)=>{
        if(err){
           return []
        }
        return  data
    })
}

module.exports = class Product{
    constructor(t){
        this.title=t
    }
    save(){
        let products=JSON.parse(getFileData())
        products.push(this)
        fs.writeFile(p , JSON.stringify(products) ,(err)=>{
            if (err){
                console.log(err)
            }
        })
    }
    static showAll(){
        return getFileData()
    }
}