const http=require('http')

const routes=require('./bck_app_routes.js')

console.log(routes.someText)
const server = http.createServer(routes.handler)

server.listen(4000)