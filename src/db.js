const { Pool } = require('pg')

//AUTHENTICANDOSE A POSTGRESQL**
const pool = new Pool({
    user: 'postgres',
    password: 'kali00',
    host: 'localhost',
    port: '5432',
    database: 'tasksdb'
})


module.exports=pool;