const fs=require('fs')

const requestHandler=(req,res)=>{
    const url=req.url
    const method=req.method
    if (url==='/home'){
        res.write('<html>')
        res.write('<head><title>Home page</title></head>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        return res.end()
    }
    if (url==='/about'){
        res.write('<html>')
        res.write('<head><title>About page</title></head>')
        res.write('<body><h1>Welcome to about us page</h1></body>')
        res.write('</html>')
        return res.end()
    }
    if (url==='/node'){
        res.write('<html>')
        res.write('<head><title>Node page</title></head>')
        res.write('<body><h1>Welcome to my Node.js project</h1></body>')
        res.write('</html>')
        return res.end()
    }
    if (url==='/'){
        
        return fs.readFile('message.txt' , 'utf-8' ,(err,data)=>{
            
            res.write('<html>')
            res.write('<head><title>ReadFile</title></head>')
            res.write(`<body><form action="/message" method="POST"><label for="datad">${data}</label><br>`)
            res.write('<input type="text" id="datad" name="mess"><button type="submit">send</button></form></body>')
            res.write('</html>')
            return res.end()
        })
    }
    if (url==='/message' && method==='POST'){
        const body=[]
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
        req.on('end' , ()=>{
            const parsedBody=Buffer.concat(body).toString()
            const content=parsedBody.split('=')[1]
            fs.writeFileSync('message.txt', content)
        })
        
        res.statusCode=302
        res.setHeader('Location', '/')
        return res.end()
    }
    res.setHeader('Content-Type' , 'text/html')
    res.write('<html>')
    res.write('<head><title>My default page</title></head>')
    res.write('<body><h1>Welcome to my dd Node.js project</h1></body>')
    res.write('</html>')
    res.end()
}

//module.exports= requestHandler

// module.exports={
//     handler : requestHandler,
//     someText : 'Hello'
// }

// module.exports.handler=requestHandler
// module.exports.someText='Hello'

exports.handler=requestHandler
exports.someText='Hello'