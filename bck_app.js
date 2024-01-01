const express=require('express')
const bodyParser=require('body-parser')

const app=express()

app.use(bodyParser.urlencoded({extended : false}))

app.get('/add-product', (req, res, next)=>{
    console.log('In middleware5')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">submit</button></form>')
})

app.post('/product' , (req,res,next)=>{
    console.log(req.body)
    console.log('name='+req.body.title+' size='+req.body.size)
    res.redirect('./')
})

app.get('/', (req, res, next)=>{
    res.send('<h1>hello from express</h1>')
})

app.listen(3000)