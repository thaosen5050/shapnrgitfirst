const express=require('express')
const bodyParser=require('body-parser')
const fs=require('fs');

const chat=express()
 
chat.use(bodyParser.urlencoded({extended : false}))

chat.get('/login' , (req,res,next)=>{
    res.send('<form action="/details" method="POST"><input type="text" name="username"><button type="submit">login</button></form>')
})

chat.post('/details' , (req,res,next)=>{
    fs.writeFileSync('user.txt' , req.body.username)
    res.redirect('/')
})

chat.get('/' , (req,res,next)=>{
    fs.readFile('chat.txt' , 'utf-8' , (err,data)=>{
    res.send(`<form action="/chat" method="POST"><label for="history">${data}</label><br><input type="text" id="history" name="text"><button type="submit">send</button></form>`)
   })
}) 

chat.post('/chat' , (req,res,next)=>{
    fs.readFile('chat.txt' , 'utf-8' , (err,data)=>{
        let user=fs.readFileSync('user.txt' ,'utf-8')
        let content=data.replace(data,data+'  '+user+':'+req.body.text)
        fs.writeFileSync('chat.txt' , content, 'utf-8')
        res.redirect('/')
    })
})

chat.listen(4000)