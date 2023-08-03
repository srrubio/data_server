const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/players': '/players',
    "/api/": "/",
    '/:id': '/:id',
    "/:resource/:id": "/:resource/:id",
    "/blog/:category": "/posts?category=:category"

}))
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server