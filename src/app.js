import express from 'express'

import dbConnection from './config/db.js'
import {PORT} from './config/env.js'

const app = express()

app.get('/', (req, res) => {
    res.send({message: 'Hello World!'})
})

app.listen(PORT, async () => {
    await dbConnection()
    console.log(`Server is running on port ${PORT}`)
})
