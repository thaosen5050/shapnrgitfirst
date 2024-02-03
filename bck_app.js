const express=require('express')
const path=require('path')

const bodyParser=require('body-parser')

const adminRoutes=require('./routes/admin')
const shopRoutes=require('./routes/shop')
const errorRoute=require('./contollers/404.js')

const app=express()


app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin',adminRoutes)
app.use(shopRoutes)



app.use(errorRoute.error404)

app.listen(3000)