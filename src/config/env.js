import {config} from 'dotenv'

config({path: '.env'})

export const {PORT, DB_URI, NODE_ENV} = process.env
