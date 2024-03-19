// import json-server library
const jsonServer = require('json-server')

// create server using create function
const mPlayerServer = jsonServer.create()

// create path for db.json file
const router = jsonServer.router('database.json')

// create middleware to convert json into js
const middleware = jsonServer.defaults()


// connect
mPlayerServer.use(middleware)
mPlayerServer.use(router)


// setup port for the server
const port = 4000 || process.env.PORT

// run the server
mPlayerServer.listen(port,()=>{
    console.log('server running successfully');
})