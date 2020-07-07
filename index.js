const express = require('express')
require('dotenv/config')

const routes = require('./routes')
const initDb = require('./data/db')
const middlewares = require('./middlewares')

const app = express()

middlewares(app)
routes(app)

const port = process.env.PORT || 3001

initDb({
    connectionString: process.env.MONGO_URI
}).then(() => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    });
}).catch(err => {
    console.log(err)
});