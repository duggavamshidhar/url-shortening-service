import mongoose from 'mongoose'

import {DB_URI} from './env.js'

if (!DB_URI) {
    throw new Error('DB_URI is not defined')
}

export default async function dbConnection() {
    try {
        await mongoose.connect(DB_URI)
        console.log('Database Connected Successfully')
    } catch (error) {
        console.log('Database Connection Failed: ' + error)
        process.exit(1)
    }
}
