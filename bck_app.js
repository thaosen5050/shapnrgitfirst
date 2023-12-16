const http=require('http')
const fs=require('fs')

const server = http.createServer((req,res)=>{
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
        res.write('<html>')
        res.write('<head><title>Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="mess"><button type="submit">send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url==='/message' && method==='POST'){
        fs.writeFileSync('message.txt', 'Hello')
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
})

server.listen(4000)