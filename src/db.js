const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    password: 'kali00',
    host: 'localhost',
    port: '5432',
    database: 'tasksdb'
})


module.exports=pool;